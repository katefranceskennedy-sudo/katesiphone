"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
          width: "min(20vw, 220px)", // 💥 larger image size restored
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
  return (
    <>
      {/* 💛 Intro line above header */}
      <div
        style={{
          textAlign: "center",
          fontFamily:
            '"FS Sans Coded", Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: "0.03em",
          color: "#000",
          marginTop: "10px",
          marginBottom: "8px",
        }}
      >
        My name is{" "}
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
        and my email is{" "}
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
      </div>

      {/* Header */}
      <header
        className="header-polka"
        style={{
          padding: "0px 9px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <nav
            aria-label="Top navigation"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24, // ✅ closer together, but not cramped
              padding: "10px 0",
              alignItems: "center",
              overflow: "visible",
              width: "max-content",
            }}
          >
            <ImageNavLink href="/" src="/Home.gif" alt="Home" />
            <ImageNavLink
              href="/digital-culture"
              // use the capitalized DigitalCulture.gif from public/ as requested
              src="/DigitalCulture.gif"
              // keep a safe fallback in case the file doesn't load for some reason
              fallbackSrc="/headerart.gif"
              alt="Digital Culture"
            />
            <ImageNavLink
              href="/updates"
              src="/updates.gif"
              alt="Updates"
              style={{
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            />
          </nav>
        </div>
      </header>
    </>
  );
}
