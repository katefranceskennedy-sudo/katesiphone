"use client";

import { useRef } from "react";

export default function PublicationsTitle() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
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
}
