"use client";
import React from 'react';

// InspectorProvider stub: returns children and no-op inspector functions.
export function InspectorProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useInspector() {
  return {
    open: (_blocks: any[] = [], _idx = 0) => {},
    close: () => {},
    next: () => {},
    prev: () => {},
    isOpen: false,
    blocks: [],
    index: 0,
    current: undefined,
  };
}
