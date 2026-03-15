"use client";

import { useRef } from "react";

export default function PublicationsTitle() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={wrapperRef} className="publications-title-wrapper">
      <h1 className="bio-title projects-bio">publications</h1>

      <ul className="pub-sublist" aria-label="Publications sections">
        <li><a href="#overview-extra">overview</a></li>
        <li><a href="#viewpoint-extra">viewpoint</a></li>
        <li><a href="#opinion-extra">opinion</a></li>
        <li><a href="#reviews-extra">reviews</a></li>
        <li><a href="#social-media-extra">social media</a></li>
      </ul>

      {/* Quick links removed: keep title and section list only */}
    </div>
  );
}
