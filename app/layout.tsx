import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import AppShell from "./components/AppShell";

const inter = Inter({ subsets: ["latin"], weight: ["100","300","400","700"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* favicon uses the uploaded logo in public/ */}
        <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
        <div className="site-root">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
