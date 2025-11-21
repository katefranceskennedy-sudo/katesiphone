import "./globals.css";
import { Open_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import AppShell from "./components/AppShell";
import TitleSync from "./components/TitleSync";
import RedirectOnReload from "./components/RedirectOnReload";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";
import { LOGO_PATH } from "./config/assets";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300","400","600","700","800"], variable: "--font-open-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-playfair" });

export const metadata = {
  title: {
    default: 'kate kennedy',
    template: '%s @ kate kennedy',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
      <head>
        {/* favicon uses the uploaded logo in public/ */}
        <link rel="icon" href={LOGO_PATH} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href={LOGO_PATH} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body style={{ fontFamily: 'var(--font-open-sans), system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
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
