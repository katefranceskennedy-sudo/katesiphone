"use client";

import { useState } from "react";

export default function AboutContent() {
  const [hovering, setHovering] = useState(false);

  const handleEnter = () => setHovering(true);
  const handleLeave = () => setHovering(false);

  return (
    <div className="about-content" style={{ maxWidth: 900, width: "90%" }}>
      <p style={{ marginTop: 20 }}>My name is Kate Kennedy. I use my middle initial ‘F’ as there are many other Kate Kennedy’s out there.</p>

      <p style={{ marginTop: 8 }}>
        To get in touch, please copy and paste my email into your mail client:
        <br />
        <strong>katefranceskennedy@gmail.com</strong>
      </p>

      <p style={{ marginTop: 8 }}>
        I am still figuring out how to build a contact page in Visual Studio, so for now, please copy and paste my email to get in touch:
        <br />
        <strong>katefranceskennedy@gmail.com</strong>
      </p>

      <p style={{ marginTop: 12 }}>You can also find me at:</p>

      <ul className="outlined-bullets lighter-bullets" style={{ marginTop: 8, textAlign: "left" }}>
        <li className="academia-line-visible" style={{ textDecoration: 'line-through', textDecorationThickness: '1px', textDecorationColor: 'rgba(0,0,0,0.85)' }}>
          academia.edu: <span className={`after-colon`} style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(0,0,0,0.85)' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>katefranceskennedy (infrequently used)</span>
        </li>
        <li>
          are.na: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>katefrancesk</span>
        </li>
        <li>
          bluesky: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>@katefrancesk</span>
        </li>
        <li>
          github: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>katefrancesk</span>
        </li>
        <li>
          instagram: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>@katefranceskk</span>
        </li>
        <li>
          linkedin: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>katekennedy</span>
        </li>
        <li>
          mastodon: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>@katekennedy</span>
        </li>
        <li>
          orcid: <span className={`after-colon`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave} tabIndex={0}>0009-0003-8494-7444</span>
        </li>
      </ul>

      {/* hidden aria-only node for the academia strike-through control */}
      <p className={`academia-line${hovering ? " academia-struck" : ""}`} style={{ marginTop: 10, display: "none" }} aria-hidden>
        academia.edu: katefranceskennedy (infrequently used)
      </p>
    </div>
  );
}
