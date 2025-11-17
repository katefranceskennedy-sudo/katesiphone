import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import AppShell from "./components/AppShell";
import TitleSync from "./components/TitleSync";
import RedirectOnReload from "./components/RedirectOnReload";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";
import { LOGO_PATH } from "./config/assets";

const inter = Inter({ subsets: ["latin"], weight: ["100","300","400","700"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: 'kate kennedy',
    template: '%s @ kate kennedy',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* favicon uses the uploaded logo in public/ */}
        <link rel="icon" href={LOGO_PATH} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href={LOGO_PATH} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
        <div className="site-root">
          <TitleSync />
          <RedirectOnReload />
          <ScrollToTopOnNavigation />
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
