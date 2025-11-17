"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SITE_NAME = "kate kennedy";
const TEMPLATE = (label: string) => `${label} @ ${SITE_NAME}`;

const PATH_LABELS: Record<string, string> = {
  "/": "",
  "/published-work": "Publications",
  "/features": "Projects",
  "/about": "Bio",
  "/updates": "Posts",
  "/books": "Books",
  "/contact": "Contact",
};

function titleCase(s: string) {
  return s.replace(/\b\w+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}

export default function TitleSync() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    let label = PATH_LABELS[pathname as string];

    if (label === undefined) {
      if (!pathname || pathname === "/") {
        label = "";
      } else {
        const parts = pathname.split("/").filter(Boolean);
        const last = parts[parts.length - 1] ?? "";
        const cleaned = decodeURIComponent(last).replace(/-/g, " ");
        label = titleCase(cleaned);
      }
    }

    if (!label) {
      document.title = SITE_NAME;
    } else {
      document.title = TEMPLATE(label);
    }
  }, [pathname]);

  return null;
}
