"use client";
import React from "react";

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { error, reset } = props;
  return (
    <html>
      <body
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          fontFamily:
            'var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}
      >
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 style={{ marginBottom: 8 }}>App error</h2>
          {error?.message && (
            <p style={{ opacity: 0.8, marginTop: 0 }}>{error.message}</p>
          )}
          {error?.hasOwnProperty("digest") && error.digest && (
            <p style={{ fontFamily: "monospace", opacity: 0.7 }}>
              Error digest: {error.digest}
            </p>
          )}
          <button
            onClick={() => reset()}
            style={{
              marginTop: 16,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #000",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
