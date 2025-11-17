"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function ImageNavLink({
  href,
  src,
  fallbackSrc,
  alt,
  style,
  ...rest
}: {
  href: string;
  src: string;
  fallbackSrc?: string;
  alt?: string;
  style?: React.CSSProperties;
} & any) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hover, setHover] = useState(false);
  const cursorPrimary = "/cursorimage.gif";
  const cursorFallback = "/cursor.png";
  const showCursor = hover;

  return (
    <Link
      href={href}
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 6px",
        textDecoration: "none",
        position: "relative",
        flex: "0 0 auto",
        ...style,
      }}
    >
      <img
        src={imgSrc}
        alt={alt || ""}
        onError={() => {
          if (fallbackSrc && imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
        }}
        style={{
          display: "block",
          width: "min(20vw, 220px)",
          height: "auto",
        }}
      />
      {showCursor && (
        <img
          src={cursorPrimary}
          alt="cursor"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (el.src && !el.src.endsWith(cursorFallback))
              el.src = cursorFallback;
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(14vw, 200px)",
            height: "auto",
            opacity: 0.98,
            pointerEvents: "none",
            zIndex: 40,
          }}
        />
      )}
    </Link>
  );
}

export default function Header() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  // Measure only the width of the text content (not a full-width container)
  // so the vertical stripe matches just the header line width.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const updateWidth = () => {
      const w = el.getBoundingClientRect().width;
      // Set both legacy and current CSS variables for safety
      document.documentElement.style.setProperty("--aqua-stripe-width", `${w}px`);
      document.documentElement.style.setProperty("--ultramarine-stripe-width", `${w}px`);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    window.addEventListener("resize", updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      {/* Intro line above the decorative stripe; includes updates.gif to the right */}
      <div
        className="ultramarine-stripe-anchor"
        style={{
          display: 'block',
          width: 'fit-content',
          margin: '10px auto 8px',
          fontFamily:
            '"FS Sans Coded", Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '0.03em',
          color: '#000',
          position: 'relative',
          zIndex: 2 /* ensure header text is above background stripe */
        }}
      >
        <span ref={textRef} style={{ display: 'inline-block' }}>
          My name is {" "}
          <span
            style={{
              borderBottom: "2px dotted #fbc02d",
              transition: "border-bottom 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderBottom = "2px solid #fbc02d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderBottom = "2px dotted #fbc02d")
            }
          >
            Kate Kennedy
          </span>{" "}
          and my email is {" "}
          <a
            href="mailto:katefranceskennedy@gmail.com"
            style={{
              color: "#000",
              textDecoration: "none",
              borderRadius: 4,
              backgroundColor: "#fff9c4",
              padding: "0 3px",
              transition: "background-color 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffeb3b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff9c4")
            }
          >
            katefranceskennedy@gmail.com
          </a>{" "}
          <span
            style={{
              borderRadius: 4,
              backgroundColor: "#fff9c4",
              padding: "0 4px",
              transition: "background-color 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffeb3b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff9c4")
            }
          >
            💛
          </span>
        </span>

        {/* updates.gif removed from inline intro and placed above in the header so it sits
            centered on the decorative stripe/pink background without changing surrounding layout */}
      </div>

      {/* Header */}
      <header
        className="header-polka"
        style={{
          padding: "0px 6px",
          position: "relative",
          width: "100%",
        }}
      >
        {/* updates.gif removed — the decorative GIF was removed from the header to stop it appearing across pages */}
        <div
          style={{
            width: "100%",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            /* absolutely position the GIF nav and lift it visually by 200px */
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -200px)',
            zIndex: 60,
          }}
        >
          <nav
            aria-label="Top navigation"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              padding: "6px 0",
              alignItems: "center",
              overflow: "visible",
              width: "max-content",
            }}
          >
            {/* Home, Digital Culture and Updates links removed site-wide per request */}
          </nav>
        </div>
      </header>
      {/* Vertical aquamarine stripe spanning full viewport height, matching intro width */}
      <div aria-hidden="true" className="aquamarine-vertical-stripe" />
    </>
  );
}
