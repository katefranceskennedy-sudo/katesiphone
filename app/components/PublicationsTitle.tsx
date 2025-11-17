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

      <div className="pub-extra-row" aria-hidden="false">
        <a id="overview-extra" className="bio-title pub-extra-item" href="#overview-extra">overview</a>
        <a id="viewpoint-extra" className="bio-title pub-extra-item" href="#viewpoint-extra">viewpoint</a>
        <div id="opinion-extra" className="bio-title pub-extra-item" role="region">
          <span className="pub-extra-label"><a className="window-link" href="/window-of-opportunity">Window of Opportunity</a></span>
          opinion
        </div>
        <div id="reviews-extra" className="bio-title pub-extra-item" role="region">
          <span className="pub-extra-label">
            <a className="newman-report-link" href="/newman-review">The Newman Report</a>: <a className="leadlight-link" href="https://linktr.ee/leadlightmagazine" target="_blank" rel="noopener noreferrer">LeadLight Issue 1</a>
          </span>
          reviews
        </div>
        <a id="social-media-extra" className="bio-title pub-extra-item" href="#social-media-extra">social media</a>
      </div>
    </div>
  );
}
