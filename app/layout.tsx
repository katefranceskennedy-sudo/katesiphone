import "./globals.css";
import type { ReactNode } from "react";
import AppShell from "./components/AppShell";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* favicon uses the uploaded logo in public/ */}
        <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div className="site-root">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
