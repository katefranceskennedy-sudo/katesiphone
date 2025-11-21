"use client";

import { useEffect, useState } from "react";

export default function CenteredTextOverlay() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    const main = document.querySelector("main") as HTMLElement | null;
    const bioImgWrap = document.querySelector(".bio-image-wrapper") as HTMLElement | null;
    const header = document.querySelector("header") as HTMLElement | null;
    if (!main || !bioImgWrap) return;

    // Prefer an explicit hidden source if present (we add this to the About page)
    const srcEl = document.getElementById("bio-overlay-source");
    const raw = (srcEl?.textContent || main.innerText || main.textContent || "").trim();
    const collapsed = raw.replace(/\s+/g, " ");
    const maxLen = 5000;
    // start at Kate Kennedy if present
    const matchIndex = collapsed.search(/\bKate\s+Kennedy\b/i);
    const start = matchIndex >= 0 ? matchIndex : 0;
    const excerpt = collapsed.slice(start, start + maxLen);
    setText(excerpt);

    // We'll position the overlay absolutely inside `main` just below the
    // `.bio-image-wrapper`. To avoid changing layout, ensure `main` is a
    // positioned ancestor (position: relative) only if it is currently static.
    const mainComputed = window.getComputedStyle(main);
    const prevPosition = main.style.position;
    let restored = false;
    if (mainComputed.position === "static") {
      main.style.position = "relative";
      restored = true;
    }

    const GAP = 12; // vertical gap below images

    function computeAndSet() {
      // Use visual bounding rectangles so transforms don't misplace the overlay.
      const imgRect = bioImgWrap!.getBoundingClientRect();
      const mainRect = main!.getBoundingClientRect();
      const headerRect = header ? header.getBoundingClientRect() : { right: window.innerWidth };

      const left = Math.max(8, Math.round(imgRect.left));
      // move overlay left by 300px as requested, but don't go off-screen
      const leftMoved = Math.max(8, left - 300);
      // Default width matches image width but clamp to viewport/header boundaries.
      // Use the moved-left position when computing available space so we don't
      // accidentally size the overlay to extend past the viewport.
      const viewportRight = window.innerWidth - 16;
      const headerRight = headerRect && headerRect.right ? headerRect.right : viewportRight;
      const maxRight = Math.min(viewportRight, headerRight);
      const computedWidth = Math.round(imgRect.width);
      // Available space to the right of the moved-left position
      const maxAvailable = Math.max(120, Math.round(maxRight - leftMoved));
      const width = Math.min(Math.max(120, computedWidth), maxAvailable);

      // top relative to `main`: difference between image bottom and main top
      const top = Math.round(imgRect.bottom - mainRect.top + (main!.scrollTop || 0) + GAP);
      // Move overlay up by 400px total (previous 200 + additional 200)
      // but keep it on-screen
      const topMoved = Math.max(8, top - 400);

      setStyle({ position: "absolute", left: `${leftMoved}px`, top: `${topMoved}px`, width: `${width}px`, zIndex: 10001, pointerEvents: "none", opacity: 1, visibility: "visible" });
    }

    computeAndSet();

    function onResize() {
      computeAndSet();
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
      // restore previous inline position if we changed it
      if (restored) {
        main.style.position = prevPosition || "";
      }
    };
  }, []);

  if (!text || !style) return null;

  // Split text into lines of 3 words each
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 3) {
    lines.push(words.slice(i, i + 3).join(" "));
  }

  return (
    <div className="center-overlay" aria-hidden="true" style={style}>
      <div className="center-overlay__text">
        {lines.map((line, idx) => (
          <div key={idx} className="center-overlay__line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
