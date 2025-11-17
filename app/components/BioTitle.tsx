"use client";

import { useEffect, useRef } from "react";

export default function BioTitle() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Only run the JS positioning logic for instances that explicitly opt-in
    // (pages that add the `projects-bio` class). The bio page uses CSS for
    // its positioning and should not be overridden by the JS calculations.
    if (!ref.current.classList.contains("projects-bio")) return;

    function update() {
      const header = document.querySelector("header");
      const main = document.querySelector("main");
      if (!header || !main || !ref.current) return;

      // Get positions relative to the document (account for scroll)
      const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
      const mainTop = main.getBoundingClientRect().top + window.scrollY;

      // Desired gap between the bottom of the header and the top of the title
      const GAP = 100;
      // Move the title up by this many pixels (positive moves up)
      // Use a negative value to move the heading down. Set to -200 to move down 100px
      // further than the previous -100 value.
      const MOVE_UP = -200;

      // Compute required margin-top on the heading so its top sits GAP px below header bottom
      // then shift it up by MOVE_UP pixels.
      // Note: allow negative margins so the title can overlap previous content if requested.
      const marginTop = Math.round(headerBottom + GAP - mainTop - MOVE_UP);
      // Debug logging to help diagnose why the title may not move as expected
      // Open browser devtools console to see these values.
      // eslint-disable-next-line no-console
      console.debug("BioTitle: headerBottom", headerBottom, "mainTop", mainTop, "calcMargin", headerBottom + GAP - mainTop, "finalMargin", marginTop);

      // Apply the computed margin (allow negatives). Use CSS !important to
      // override the existing strong global rules that force the title up.
      ref.current.style.setProperty("margin-top", `${marginTop}px`, "important");
      // Reset any forced offsets applied by global CSS so the inline margin
      // is the authoritative positioning. Use !important to override.
      ref.current.style.setProperty("top", "0px", "important");
      ref.current.style.setProperty("transform", "none", "important");
      ref.current.style.setProperty("position", "relative", "important");

      // Fallback: re-run after a short delay in case layout shifts after scripts/styles load
      setTimeout(() => {
        const hb = header.getBoundingClientRect().bottom + window.scrollY;
        const mt = main.getBoundingClientRect().top + window.scrollY;
        const m2 = Math.round(hb + GAP - mt - MOVE_UP);
        // eslint-disable-next-line no-console
        console.debug("BioTitle (delayed): headerBottom", hb, "mainTop", mt, "finalMargin", m2);
        if (ref.current) {
          ref.current.style.setProperty("margin-top", `${m2}px`, "important");
          ref.current.style.setProperty("top", "0px", "important");
          ref.current.style.setProperty("transform", "none", "important");
          ref.current.style.setProperty("position", "relative", "important");
        }
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
    <>
      <div className="bio-block">
        <h1 ref={ref} className="bio-title">
          bio
        </h1>
        <div className="bio-image-wrapper" aria-hidden="true">
          <img src="/kate.jpg" alt="Kate" className="bio-image" />
          {/* second portrait placed to the right; absolutely positioned so it doesn't affect layout */}
          <img src="/sana.jpg" alt="Sana" className="bio-image bio-image-sana" />
          <figcaption className="bio-caption"><span className="bio-caption-highlight">photo of me</span> by the seine in front of pont neuf</figcaption>
          <figcaption className="bio-caption-sana"><span className="bio-caption-highlight">photo of my friend and I</span> by millennium bridge behind the <span className="bio-caption-highlight">southbank centre</span></figcaption>
          <figcaption className="bio-caption bio-caption-degree">
            <span className="degree-line">Kate Kennedy is a graduate of</span>
            <span className="degree-line"><span className="bio-caption-highlight">Digital Media and Culture</span></span>
            <span className="degree-line">at the <span className="bio-caption-highlight">Department of Digital Humanities, King's College London</span>.</span>
          </figcaption>
          <figcaption className="bio-caption bio-caption-extra">
            <span className="extra-line">To independently build kate.网站, she sourced open and closed software</span>
            <span className="extra-line">editing applications including Github, Microsoft Visual Code, Canva, Figma, G-Suite</span>
            <span className="extra-line">and Adobe Premiere Pro and Audition.</span>
            <span className="extra-line">Kate works across both windows and macOS systems.</span>
          </figcaption>
        </div>
      </div>
    </>
  );
}
