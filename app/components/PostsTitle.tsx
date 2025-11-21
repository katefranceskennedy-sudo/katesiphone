"use client";

import { useEffect, useRef } from "react";

export default function PostsTitle() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    function update() {
      const header = document.querySelector("header");
      const main = document.querySelector("main");
      if (!header || !main || !ref.current) return;

      const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
      const mainTop = main.getBoundingClientRect().top + window.scrollY;

      const GAP = 100;
      const MOVE_UP = 800;

      const marginTop = Math.round(headerBottom + GAP - mainTop - MOVE_UP);
      // eslint-disable-next-line no-console
      console.debug("PostsTitle: headerBottom", headerBottom, "mainTop", mainTop, "finalMargin", marginTop);

      ref.current.style.marginTop = `${marginTop}px`;

      setTimeout(() => {
        const hb = header.getBoundingClientRect().bottom + window.scrollY;
        const mt = main.getBoundingClientRect().top + window.scrollY;
        const m2 = Math.round(hb + GAP - mt - MOVE_UP);
        // eslint-disable-next-line no-console
        console.debug("PostsTitle (delayed): headerBottom", hb, "mainTop", mt, "finalMargin", m2);
        if (ref.current) ref.current.style.marginTop = `${m2}px`;
      }, 250);
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, []);

  return (
    <h1 ref={ref} className="bio-title projects-bio" style={{ fontWeight: 700 }}>
      posts
    </h1>
  );
}
