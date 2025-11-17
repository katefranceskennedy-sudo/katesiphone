"use client";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

export default function ScrollBarOverlay() {
  const [scrollTop, setScrollTop] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [nativeScrollbarWidth, setNativeScrollbarWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const st = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const dh = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      setScrollTop(st);
      setViewportHeight(vh);
      setDocHeight(dh);
      // update track size from DOM when possible
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        setTrackHeight(rect.height);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // detect native scrollbar width and update offset so overlay avoids it
  useLayoutEffect(() => {
    const computeScrollbar = () => {
      try {
        const w = window.innerWidth - document.documentElement.clientWidth;
        setNativeScrollbarWidth(typeof w === "number" && w > 0 ? Math.round(w) : 0);
      } catch (e) {
        setNativeScrollbarWidth(0);
      }
    };
    computeScrollbar();
    window.addEventListener("resize", computeScrollbar);
    return () => window.removeEventListener("resize", computeScrollbar);
  }, []);

  const scrollByPage = (dir: number) => {
    const amount = Math.max(viewportHeight * 0.9, 200);
    window.scrollBy({ top: dir * amount, behavior: "smooth" });
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top; // position within track
    const trackHeight = rect.height;
    const ratio = clickY / trackHeight;
    const target = Math.round((docHeight - viewportHeight) * ratio);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const maxScroll = Math.max(1, docHeight - viewportHeight);
  const progress = Math.min(1, scrollTop / maxScroll || 0);

  // compute thumb size and position in pixels, respecting trackHeight
  const MIN_THUMB_PX = 24; // minimum visible thumb
  const trackH = trackHeight || 160; // fallback
  const thumbHeightPx = Math.max(
    MIN_THUMB_PX,
    Math.round((viewportHeight / Math.max(docHeight, viewportHeight)) * trackH),
  );
  const thumbAvailable = Math.max(0, trackH - thumbHeightPx);
  const thumbTopPx = Math.round(progress * thumbAvailable);

  return (
    <div className="page-scrollbar" aria-hidden={false} style={{ right: `${nativeScrollbarWidth}px` }}>
      <button
        className="scrollbar-arrow scrollbar-arrow-up"
        aria-label="Scroll up"
        onClick={() => scrollByPage(-1)}
      >
        ▲
      </button>

      <div className="scrollbar-track" ref={trackRef} onClick={handleTrackClick}>
        <div
          className="scrollbar-thumb"
          style={{ top: `${thumbTopPx}px`, height: `${thumbHeightPx}px` }}
        />
      </div>

      <button
        className="scrollbar-arrow scrollbar-arrow-down"
        aria-label="Scroll down"
        onClick={() => scrollByPage(1)}
      >
        ▼
      </button>
    </div>
  );
}
