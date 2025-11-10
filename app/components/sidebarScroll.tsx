"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SidebarScroll.module.css";

export default function SidebarScroll() {
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  // update thumb position based on internal scroll container
  useEffect(() => {
    function update() {
      if (!scrollRef.current || !thumbRef.current) return;
      const el = scrollRef.current;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const pct = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;

      const trackH = el.clientHeight;
      const thumbH = thumbRef.current.clientHeight;
      const max = Math.max(0, trackH - thumbH);
      setOffset(max * pct);
    }

    update();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", update, { passive: true } as any);
      window.addEventListener("resize", update);
    }
    return () => {
      if (el) el.removeEventListener("scroll", update as any);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollByAmount(amount: number) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ top: amount, left: 0, behavior: "smooth" });
  }

  return (
    <aside
      className={`${styles.sidebar} ${active ? styles.active : ""}`}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      tabIndex={0}
      aria-label="Sidebar scroll"
    >
      <div className={styles.box}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Scroll up"
          onClick={() => scrollByAmount(-Math.round(window.innerHeight * 0.25))}
        >
          ▲
        </button>

        <div className={styles.scrollArea} ref={scrollRef}>
          <div className={styles.stack}>
            {/* Sidebar content — replace with real items as needed */}
            <div style={{ height: 1200 }} />
          </div>
        </div>

        <button
          type="button"
          className={styles.arrow}
          aria-label="Scroll down"
          onClick={() => scrollByAmount(Math.round(window.innerHeight * 0.25))}
        >
          ▼
        </button>

        {/* custom visual track/thumb overlayed on the scroll area */}
        <div className={styles.track}>
          <div
            className={styles.thumb}
            ref={thumbRef}
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      </div>
    </aside>
  );
}
