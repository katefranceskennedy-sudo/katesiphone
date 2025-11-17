"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function PublicationsTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const content = (
    <div ref={wrapperRef} className="publications-title-wrapper">
      <h1 className="bio-title projects-bio">publications</h1>

      <ul className="pub-sublist" aria-label="Publications sections">
        <li><a href="#overview">overview</a></li>
        <li><a href="#viewpoint">viewpoint</a></li>
        <li><a href="#opinion">opinion</a></li>
        <li><a href="#reviews">reviews</a></li>
        <li><a href="#social-media">social media</a></li>
      </ul>

      <div className="pub-extra-row" aria-hidden="false">
        <span className="bio-title pub-extra-item">overview</span>
        <span className="bio-title pub-extra-item">viewpoint</span>
        <span className="bio-title pub-extra-item">opinion</span>
        <span className="bio-title pub-extra-item">reviews</span>
        <span className="bio-title pub-extra-item">social media</span>
      </div>
    </div>
  );

  useEffect(() => {
    // Previously this effect force-locked the publications wrapper into
    // a fixed position using inline styles and a MutationObserver. To keep
    // the publications content in-flow like the bio, we no longer perform
    // runtime locking here. The wrapper will render in document flow and
    // be positioned by CSS instead.
    return;
  }, [mounted]);

  if (!mounted) return null;
  // Render in-place (no portal) so the publications block stays in the
  // document flow like the bio title and doesn't rely on runtime locking.
  return content;
}
