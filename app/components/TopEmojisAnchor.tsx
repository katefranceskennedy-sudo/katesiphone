"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function TopEmojisAnchor(): React.ReactElement | null {
  const [hasColumn, setHasColumn] = useState<boolean | null>(null);
  

  useEffect(() => {
    // detect whether the purple column exists in the DOM (only on Digital Culture page)
    setHasColumn(!!document.getElementById("digital-culture-column"));
  }, []);

  const emojis = (
    <>
      <div
        className="top-emojis-wrap"
        aria-hidden={false}
        style={hasColumn
          ? { position: "sticky", top: "24px", display: "flex", justifyContent: "flex-start", width: "100%", zIndex: 9999, transform: "none" }
          : { position: "fixed", left: "50%", transform: "translateX(calc(-50% - 120px))", top: "88px", zIndex: 9999 }}
      >
        <div className="top-emojis">
          <img src="/topemojis/swan.png" alt="" className="top-emoji" />
          <img src="/topemojis/art.png" alt="" className="top-emoji" />
          <img src="/topemojis/boquet.png" alt="" className="top-emoji" />
          <img src="/topemojis/data.png" alt="" className="top-emoji" />
          <img src="/topemojis/paint.png" alt="" className="top-emoji" />
          <img src="/topemojis/strawberry.png" alt="" className="top-emoji" />
        </div>
      </div>

      {hasColumn ? (
        <>
          <div className="top-emojis-caption" role="note" aria-label="Digital Culture topics" style={{ marginTop: 10, width: "100%", display: "flex", justifyContent: "flex-start" }}>
            <div className="caption-inner">
              <div className="caption-text">Digital Technologies / AI Philosophy / Society and Culture / Digital Humanitarianism and Development</div>
            </div>
          </div>

          {/* topic buttons removed per request; only caption text remains */}

          {/* descriptive paragraph placed outside the highlighted caption */}
          <div className="caption-body" style={{ marginTop: 12, width: "100%", display: "flex", justifyContent: "flex-start" }}>
            <div className="caption-body-inner">
              <p>
                This season, I am reflecting on how digital technologies might cultivate care, solidarity, and imagination, rather than reinforce exploitation, <span className="inline-attribution-group">alienation, and harm <span className="caption-attribution">(Jonathan W.Gray, Founder of KCL Digital Culture Lab 💜)</span></span>.
              </p>
              <p>
                How do the material consequences of the seemingly immaterial infrastructures shape our digital world?
              </p>
              <p>
                I am no longer reading Digital Media and Culture at university, affording me to find insight and companionship in the works of the authors whose words and ideas I return to with affection.
              </p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );

  if (hasColumn === null) return null; // wait until we know whether the column exists
  if (hasColumn) return emojis;
  if (typeof document === "undefined") return null;
  return createPortal(emojis, document.body);
}

