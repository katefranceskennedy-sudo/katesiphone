"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectOnReload() {
  const router = useRouter();
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      // don't redirect if already on home
      if (window.location.pathname === "/") return;

      // Prefer the PerformanceNavigationTiming API where available
      let navType: string | number = "navigate";
      const entries = performance.getEntriesByType && performance.getEntriesByType("navigation");
      if (entries && entries.length) {
        // modern browsers provide a `type` such as 'reload', 'navigate', 'back_forward'
        // @ts-ignore
        navType = (entries[0] as any).type || navType;
      } else if ((performance as any).navigation) {
        // fallback (deprecated) numeric values: 1 === reload
        // @ts-ignore
        navType = (performance as any).navigation.type === 1 ? "reload" : (performance as any).navigation.type;
      }

      if (navType === "reload" || navType === 1) {
        // do a client-side replace to avoid polluting history
        router.replace("/");
      }
    } catch (e) {
      // silent fail — do not block render
    }
    // run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
