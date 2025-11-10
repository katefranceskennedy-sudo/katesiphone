"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { SPLASH_GIF, SPLASH_POSTER } from "../config/assets";

export default function ClientSplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Optionally, only show splash on first visit — keep simple for now
  }, []);

  return (
    <>
      {showSplash && (
        <SplashScreen
          variant="video"
          videoSrc={SPLASH_GIF}
          poster={SPLASH_POSTER}
          autoplay={true}
          loop={true}
          minDisplayMs={3000}
          onFinish={() => setShowSplash(false)}
        />
      )}
      <div style={{ display: showSplash ? "none" : undefined }}>{children}</div>
    </>
  );
}
