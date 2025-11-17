"use client";
import { useEffect, useRef, useState } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";

type GifFrame = { dims: { width: number; height: number }; delay?: number; patch: Uint8ClampedArray };

function getSourceDimensions(src: HTMLVideoElement | HTMLImageElement | null) {
  if (!src) return { width: 640, height: 360 };
  const anySrc = src as unknown as { naturalWidth?: number; videoWidth?: number; naturalHeight?: number; videoHeight?: number };
  const width = anySrc.naturalWidth || anySrc.videoWidth || (src as HTMLElement).clientWidth || 640;
  const height = anySrc.naturalHeight || anySrc.videoHeight || (src as HTMLElement).clientHeight || 360;
  return { width, height };
}

declare global {
  interface Window {
    __gifFramesRef?: { frames: GifFrame[]; _index?: number; _last?: number };
  }
}

type SplashProps = {
  onFinish: () => void;
  variant?: "static" | "video";
  videoSrc?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  // minimum ms the splash should stay visible to avoid jarring flashes
  minDisplayMs?: number;
};

export default function SplashScreen({
  onFinish,
  variant = "static",
  videoSrc,
  poster,
  autoplay = true,
  loop = false,
  // default shorter time for quicker testing
  minDisplayMs = 150,
}: SplashProps) {
  const mountedAt = useRef<number | null>(null);
  const finished = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const tempCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const keyColorRef = useRef<[number, number, number] | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const [dots, setDots] = useState(0);
  const [useChroma, setUseChroma] = useState(true);
  const [decodeFailed, setDecodeFailed] = useState(false);
  const [threshold, setThreshold] = useState(90);
  const [detectedHex, setDetectedHex] = useState<string | null>(null);
  const isGif =
    typeof videoSrc === "string" && videoSrc.toLowerCase().endsWith(".gif");
  const [processingScale, setProcessingScale] = useState<number>(() => {
    try {
      if (typeof window === "undefined") return 1;
      const v = Number(window.localStorage.getItem("splash:scale"));
      return Number.isFinite(v) && v > 0 ? v : 1;
    } catch (e) {
      return 1;
    }
  });
  const [frameSkip, setFrameSkip] = useState<number>(() => {
    try {
      if (typeof window === "undefined") return 0;
      const v = Number(window.localStorage.getItem("splash:frameskip"));
      return Number.isFinite(v) && v >= 0 ? v : 0;
    } catch (e) {
      return 0;
    }
  });
  const [debugMask, setDebugMask] = useState<boolean>(() => {
    try {
      if (typeof window === "undefined") return false;
      return window.localStorage.getItem("splash:debug") === "1";
    } catch (e) {
      return false;
    }
  });
  const frameCountRef = useRef(0);
  // mark mount time so min-display countdown works
  useEffect(() => {
    mountedAt.current = Date.now();
    return () => {
      mountedAt.current = null;
    };
  }, []);
  // helper to ensure we wait at least `minDisplayMs` before finishing
  const finishAfterMin = () => {
    if (finished.current) return;
    const now = Date.now();
    const mounted = mountedAt.current ?? now;
    const elapsed = now - mounted;
    const remaining = Math.max(0, minDisplayMs - elapsed);
    finished.current = true;
    setTimeout(() => onFinish(), remaining);
  };

  // countdown display: compute remaining milliseconds until minDisplayMs has elapsed
  const [remainingMs, setRemainingMs] = useState<number | null>(null);
  const [hasLoadingGif, setHasLoadingGif] = useState<boolean>(false);
  useEffect(() => {
    // probe for /loading.gif in public/
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setHasLoadingGif(true);
    };
    img.onerror = () => {
      if (!cancelled) setHasLoadingGif(false);
    };
    img.src = "/loading.gif";
    return () => {
      cancelled = true;
    };
  }, []);

  // when loading GIF exists, show it first for a short delay before revealing the jackets media
  const [showMedia, setShowMedia] = useState<boolean>(true);
  useEffect(() => {
    let t: number | null = null;
    if (hasLoadingGif) {
  // show loading gif first, reveal media after 2000ms
  setShowMedia(false);
  t = window.setTimeout(() => setShowMedia(true), 2000);
    } else {
      setShowMedia(true);
    }
    return () => {
      if (t) clearTimeout(t as any);
    };
  }, [hasLoadingGif]);
  useEffect(() => {
    let t: number | null = null;
    const tick = () => {
      if (!mountedAt.current) return;
      const now = Date.now();
      const elapsed = now - mountedAt.current;
      const rem = Math.max(0, minDisplayMs - elapsed);
      setRemainingMs(rem);
      if (rem <= 0) {
        if (t) {
          clearInterval(t as any);
          t = null;
        }
        return;
      }
    };
    tick();
    t = window.setInterval(tick, 200);
    return () => {
      if (t) clearInterval(t as any);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minDisplayMs]);

  
  // (preserve original single useEffect below) ---

  useEffect(() => {
    // reduced motion users: skip the video and show fallback
    const mq =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) {
      setUseFallback(true);
      const timer = setTimeout(finishAfterMin, 1200);
      return () => clearTimeout(timer);
    }

    // Try to autoplay the video. If it fails, fall back to static UI and finish after a timeout.
    const vid = videoRef.current;
    let played = false;

    const tryPlay = async () => {
      if (!vid) return;
      try {
        if (autoplay) {
          const p = vid.play();
          if (p && typeof p.then === "function") {
            await p;
          }
        }
        played = true;
      } catch (e) {
        // autoplay failed (browser policy) — fall back to static
        setUseFallback(true);
        const timer = setTimeout(finishAfterMin, 1200);
        return () => clearTimeout(timer);
      }
    };

    tryPlay();

    // Ensure the splash will auto-finish after minDisplayMs even for video/gif variants.
    // This avoids a permanently visible splash when the media loops (eg GIFs).
    const autoFinishTimer = setTimeout(() => {
      finishAfterMin();
    }, Math.max(0, minDisplayMs));

    // If the video ends and not looping, finish.
    const onEnded = () => {
      if (!loop) finishAfterMin();
    };

    vid?.addEventListener("ended", onEnded);

    // If there's an error, fallback
    const onError = () => {
      setUseFallback(true);
      finishAfterMin();
    };
    vid?.addEventListener("error", onError);

    return () => {
      vid?.removeEventListener("ended", onEnded);
      vid?.removeEventListener("error", onError);
      clearTimeout(autoFinishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, videoSrc, autoplay, loop, minDisplayMs, onFinish]);

  // loading dots animation
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d + 1) % 4), 400);
    return () => clearInterval(t);
  }, []);

  // Utility: sample poster image to detect background color (top-left pixel average)
  const detectKeyColorFromPoster = async (posterSrc?: string) => {
    if (!posterSrc) return null;
    return new Promise<[number, number, number] | null>((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = Math.min(32, img.width);
          c.height = Math.min(32, img.height);
          const ctx = c.getContext("2d");
          if (!ctx) return resolve(null);
          ctx.drawImage(img, 0, 0, c.width, c.height);
          const data = ctx.getImageData(0, 0, c.width, c.height).data;
          // average corner/top-left area to avoid jacket pixels
          let r = 0,
            g = 0,
            b = 0,
            count = 0;
          const sampleSize = 6;
          for (let y = 0; y < sampleSize; y++) {
            for (let x = 0; x < sampleSize; x++) {
              const i = (y * c.width + x) * 4;
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              count++;
            }
          }
          if (count === 0) return resolve(null);
          const kc: [number, number, number] = [
            Math.round(r / count),
            Math.round(g / count),
            Math.round(b / count),
          ];
          // update UI hex
          setDetectedHex(
            `#${kc.map((v) => v.toString(16).padStart(2, "0")).join("")}`,
          );
          resolve(kc);
        } catch (e) {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = posterSrc;
    });
  };

  // Chroma-key processing loop: draws video or gif to canvas and clears pixels near keyColor
  useEffect(() => {
    if (!useChroma) return;
    let mounted = true;
    let raf = 0;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const gifEl = imgRef.current;
    const threshold = 90; // color distance threshold; tweak as needed

    const startProcessing = () => {
      if (!canvas || (!video && !gifEl)) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const draw = () => {
        if (!mounted) return;
        if (decodeFailed) return;
        try {
          const src = isGif ? gifEl : video;
          if (!src) return;
          const { width: vw, height: vh } = getSourceDimensions(src as HTMLVideoElement | HTMLImageElement);
          const dpr = window.devicePixelRatio || 1;
          const scale = Math.max(0.25, Math.min(1, processingScale));
          canvas.width = Math.max(1, Math.floor(vw * dpr * scale));
          canvas.height = Math.max(1, Math.floor(vh * dpr * scale));
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
          // draw from decoded GIF frames if available
          const gifStore = (window as any).__gifFramesRef;
          if (isGif && gifStore && gifStore.frames && gifStore.frames.length) {
            const frames: GifFrame[] = gifStore.frames;
            const idx = (gifStore._index || 0) % frames.length;
            const frameObj = frames[idx];
            let temp = tempCanvasRef.current;
            if (!temp) {
              temp = document.createElement("canvas");
              tempCanvasRef.current = temp;
            }
            temp.width = frameObj.dims.width;
            temp.height = frameObj.dims.height;
            const tctx = temp.getContext("2d");
            if (tctx) {
              const imageData = tctx.createImageData(frameObj.dims.width, frameObj.dims.height);
              imageData.data.set(frameObj.patch as Uint8ClampedArray);
              tctx.putImageData(imageData, 0, 0);
              ctx.drawImage(temp, 0, 0, vw, vh);
            }
            const delay = (frameObj.delay || 10) * 10;
            if (!gifStore._last || Date.now() - gifStore._last >= delay) {
              gifStore._index = ((gifStore._index || 0) + 1) % frames.length;
              gifStore._last = Date.now();
            }
          } else {
            // draw from img or video
            ctx.drawImage(src as CanvasImageSource, 0, 0, vw, vh);
          }
          // read at processing resolution
          const frame = ctx.getImageData(
            0,
            0,
            canvas.width / (dpr * scale),
            canvas.height / (dpr * scale),
          );
          const data = frame.data;
          const key = keyColorRef.current ?? [0, 0, 0];
          const thresh = threshold;
          // optionally skip frames to reduce CPU
          frameCountRef.current++;
          if (frameSkip > 0 && frameCountRef.current % (frameSkip + 1) !== 0) {
            raf = requestAnimationFrame(draw);
            rafRef.current = raf;
            return;
          }

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i],
              g = data[i + 1],
              b = data[i + 2];
            const dr = r - key[0];
            const dg = g - key[1];
            const db = b - key[2];
            const dist = Math.sqrt(dr * dr + dg * dg + db * db);
            if (dist < thresh) {
              // make transparent
              data[i + 3] = 0;
            }
          }
          if (debugMask) {
            // visualize keyed pixels as red overlay
            const debugFrame = ctx.createImageData(frame.width, frame.height);
            for (let i = 0; i < data.length; i += 4) {
              const alpha = data[i + 3];
              if (alpha === 0) {
                debugFrame.data[i] = 255;
                debugFrame.data[i + 1] = 0;
                debugFrame.data[i + 2] = 0;
                debugFrame.data[i + 3] = 160;
              } else {
                debugFrame.data[i] = data[i];
                debugFrame.data[i + 1] = data[i + 1];
                debugFrame.data[i + 2] = data[i + 2];
                debugFrame.data[i + 3] = data[i + 3];
              }
            }
            ctx.putImageData(debugFrame, 0, 0);
          } else {
            ctx.putImageData(frame, 0, 0);
          }
        } catch (e) {
          // ignore frame errors
        }
        raf = requestAnimationFrame(draw);
        rafRef.current = raf;
      };
      raf = requestAnimationFrame(draw);
      rafRef.current = raf;
    };

    const stop = () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    const setup = async () => {
      // detect key color from poster if available
      const kc = await detectKeyColorFromPoster(poster);
      if (kc) keyColorRef.current = kc;
      // Wait for source metadata/load depending on type
      if (isGif) {
        // attempt to decode GIF frames into memory for reliable per-frame access
        try {
          const win = window as any;
          if (!win.__gifFramesRef && videoSrc) {
            const resp = await fetch(videoSrc);
            const ab = await resp.arrayBuffer();
            const gif = parseGIF(ab);
            const decoded = decompressFrames(gif, true);
            const frames = decoded.map((f: any) => ({
              dims: f.dims,
              delay: f.delay,
              patch: f.patch,
            }));
            win.__gifFramesRef = { frames, _index: 0, _last: Date.now() };
          }
        } catch (e) {
          // decoding failed - mark failure so UI can show fallback and stop heavy processing
           
          console.warn(
            "Splash: GIF decode failed, falling back to hidden image/video rendering",
            e,
          );
          setDecodeFailed(true);
        }

        const imgEl = imgRef.current;
        if (imgEl && !imgEl.complete) {
          const onLoad = () => {
            startProcessing();
            imgEl.removeEventListener("load", onLoad);
          };
          imgEl.addEventListener("load", onLoad);
        } else {
          startProcessing();
        }
      } else {
        if (video && video.readyState < 2) {
          const onMeta = () => {
            startProcessing();
            video.removeEventListener("loadedmetadata", onMeta);
          };
          video.addEventListener("loadedmetadata", onMeta);
        } else {
          startProcessing();
        }
      }
    };

    setup();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useChroma, poster]);

  // Manual sampling helper exposed to UI
  const resamplePoster = async () => {
    const kc = await detectKeyColorFromPoster(poster);
    if (kc) keyColorRef.current = kc;
  };

  // Minimal fallback UI (used if video can't play or reduced-motion)
  const StaticCard = (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
  <div style={{ textAlign: "center", color: "#111", position: "relative" }}>
        {poster ? (
          <div style={{ width: "min(70vw,420px)", margin: "0 auto" }}>
            <img
              src={poster}
              alt="loading poster"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
                borderRadius: 12,
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 12,
              background: "#f3f3f3",
              margin: "0 auto",
            }}
          />
        )}
        {/* bottom-centered cursive loading label (countdown) placed below media */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          {hasLoadingGif ? (
            <img src="/loading.gif" alt="loading" style={{ width: 'min(70vw,260px)', height: 'auto', display: 'block', margin: '0 auto' }} />
          ) : null}
        </div>
      </div>
    </div>
  );

  if (variant === "video" && !useFallback) {
    if (isGif) {
      if (decodeFailed) return StaticCard;
      return (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              maxWidth: "90vw",
              width: "min(80vw,640px)",
            }}
          >
            {/* When a loading.gif exists, show it first for a short delay, then reveal the jackets GIF */}
            {hasLoadingGif && !showMedia ? (
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img
                  src="/loading.gif"
                  alt="loading"
                  style={{ width: "min(70vw,260px)", height: "auto", display: "block", margin: "0 auto" }}
                />
              </div>
            ) : (
              <>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <img
                    ref={imgRef}
                    src={videoSrc}
                    alt="splash animation"
                    style={{ width: "min(50vw,320px)", maxWidth: "320px", height: "auto", display: "block", margin: "0 auto" }}
                  />
                </div>

                {/* Keep loading.gif below the jackets GIF while the GIF is playing */}
                {hasLoadingGif ? (
                  <div style={{ marginTop: 12, textAlign: "center" }}>
                    <img src="/loading.gif" alt="loading" style={{ width: 'min(70vw,260px)', height: 'auto', display: 'block', margin: '0 auto' }} />
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: "90vw",
            width: "min(80vw,640px)",
          }}
        >
          {/* Hidden source video - frames are processed to canvas for chroma-key */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            playsInline
            muted={autoplay}
            loop={loop}
            autoPlay={autoplay}
            aria-hidden={true}
            style={{ display: "none" }}
          />

          {/* Canvas renders the processed frames with transparent background */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <canvas
              ref={canvasRef}
              style={{ width: "min(50vw,320px)", maxWidth: "320px", height: "auto", display: "block", borderRadius: 12 }}
            />
          </div>
          <div style={{ marginTop: 12, textAlign: "center" }}>
            {hasLoadingGif ? (
              <img src="/loading.gif" alt="loading" style={{ width: 'min(70vw,260px)', height: 'auto', display: 'block', margin: '0 auto' }} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return StaticCard;
}
