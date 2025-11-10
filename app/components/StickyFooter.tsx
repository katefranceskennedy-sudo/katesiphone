"use client";
import React from "react";
import { usePathname } from "next/navigation";

// Banner removed per user request. Keep a no-op component so imports don't break.
export default function StickyFooter() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  if (isContact) return null;
  // render a visual footer stripe; footer is decorative only and non-interactive
  return <div className="site-footer" aria-hidden="true" />;
}
