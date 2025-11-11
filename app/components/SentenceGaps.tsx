"use client";
import { useEffect } from "react";

interface SentenceGapsProps {
  selector?: string;
  gap?: number;
  highlightColor?: string;
  hoverColor?: string;
}

// Splits paragraph innerHTML into sentence spans, adding gaps and highlight.
export default function SentenceGaps({
  selector = ".thin-window p",
  gap = 12,
  highlightColor = "#fff9c4",
  hoverColor = "#ffeb3b",
}: SentenceGapsProps) {
  useEffect(() => {
    const paragraphs = document.querySelectorAll<HTMLElement>(selector);
    paragraphs.forEach((p) => {
      if (p.getAttribute("data-sentence-gapped") === "true") return;
      const html = p.innerHTML.trim();
      // Basic sentence segmentation on HTML string; retains simple inline tags.
      const parts = html.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
      if (!parts) return;
      const wrapped = parts
        .map((s) => {
          const clean = s.trim();
          if (!clean) return "";
          return `<span class=\"sentence-block\">${clean} </span>`;
        })
        .join("");
      p.innerHTML = wrapped;
      p.setAttribute("data-sentence-gapped", "true");
    });
  }, [selector, gap, highlightColor, hoverColor]);
  return null;
}
