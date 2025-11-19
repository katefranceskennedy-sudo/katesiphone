"use client";
import React from "react";

type Props = {
  error: { message?: string; digest?: string } | unknown;
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  const message = (error as any)?.message;
  const digest = (error as any)?.digest;

  return (
    <html>
      <body
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          fontFamily:
            'var(--font-open-sans), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 style={{ marginBottom: 8 }}>App error</h2>
          {message && <p style={{ opacity: 0.8, marginTop: 0 }}>{message}</p>}
          {digest && (
            <p style={{ fontFamily: "monospace", opacity: 0.7 }}>
              Error digest: {digest}
            </p>
          )}
          <button
            onClick={reset}
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
