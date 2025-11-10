"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SocialTab() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("socialTabOpen");
      if (stored !== null) setOpen(stored === "1");
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("socialTabOpen", open ? "1" : "0");
    } catch (e) {}
  }, [open]);

  if (!open) {
    return (
      <div className="social-tab-toggle" role="button" aria-label="Open social tab">
        <button onClick={() => setOpen(true)} className="social-tab-open-button">☰</button>
      </div>
    );
  }

  return (
    <div className="social-tab" role="region" aria-label="Social links">
      <div className="social-tab-inner">
        <div className="social-row">
          <img className="social-icon social-arena" src="/are.na.png" alt="Are.na" title="Are.na" />
          <img className="social-icon social-bluesky" src="/bluesky.png" alt="Bluesky" title="Bluesky" />
          <img className="social-icon social-camera" src="/camera.png" alt="Camera" title="Photography" />
          <img className="social-icon social-orcid" src="/orcid.png" alt="ORCID" title="ORCID" />
          <img className="social-icon social-mastodon" src="/matsodon.png" alt="Mastodon" title="Mastodon" />
          <img className="social-icon social-linkedin" src="/linkedin.png" alt="LinkedIn" title="LinkedIn" />
          <Link href="/contact" aria-label="Contact page" className="social-link">
            <img className="social-icon social-mobile" src="/mobile.png" alt="Mobile / Contact" title="Contact" />
          </Link>
        </div>
        <button className="social-tab-close" aria-label="Close social tab" onClick={() => setOpen(false)}>×</button>
      </div>
    </div>
  );
}
