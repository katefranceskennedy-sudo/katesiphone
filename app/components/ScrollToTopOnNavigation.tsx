"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnNavigation() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      // Ensure we start at top for each new route
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (e) {
      // no-op
    }
  }, [pathname]);

  return null;
}
