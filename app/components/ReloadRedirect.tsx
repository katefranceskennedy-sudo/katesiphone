"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReloadRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
  const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      let isReload = false;

      if (navEntries && navEntries.length > 0) {
        isReload = navEntries[0].type === 'reload';
      } else if ((performance as unknown as { navigation?: { type: number } }).navigation) {
        // fallback for older browsers
        isReload = (performance as unknown as { navigation?: { type: number } }).navigation!.type === 1;
      }

      // If it was a reload and we're not already on the homepage, replace to '/'
      if (isReload && window.location.pathname !== '/') {
        // use replace so it doesn't add history entry
        router.replace('/');
      }
    } catch (e) {
      // If anything goes wrong, don't block the page.
      console.error('ReloadRedirect check failed', e);
    }
  }, [router]);

  return null;
}
