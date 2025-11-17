import React from "react";

// Load local mapping from the public/emoji folder. This keeps the header
// using local art files rather than remote Twemoji assets.
import emojiIndex from "../../public/emoji/emoji.json";

type EmojiSlot = { file: string; label: string };
const EMOJIS: EmojiSlot[] = (emojiIndex?.slots as EmojiSlot[]) || [];

export default function TopEmojisAnchor() {
  return (
    <div className="top-emojis-inline">
      <nav className="top-emojis" aria-label="Quick emojis">
        {EMOJIS.map((e, i) => (
          <span key={i} className="top-emoji" title={e.label} aria-hidden={false}>
            <img
              src={`/emoji/${e.file}`}
              alt={e.label}
              className={`top-emoji-img ${e.label === "Labrador" ? "black-lab" : ""}`}
              width={20}
              height={20}
            />
          </span>
        ))}
      </nav>
    </div>
  );
}

function getTwemojiUrl(char: string) {
  // Convert the emoji string into a dash-separated codepoint sequence
  // Filter out variation selector-16 (U+FE0F) because Twemoji filenames
  // typically omit it (e.g., 🖼️ -> 1f5bc.svg)
  const codepoints = Array.from(char)
    .map((c) => c.codePointAt(0))
    .filter((cp): cp is number => typeof cp === 'number')
    .filter((cp) => cp !== 0xfe0f) // drop VS16
    .map((cp) => cp.toString(16))
    .join("-");
  // Use PNG (72x72) color assets from Twemoji for richer, device-consistent color
  return `https://twemoji.maxcdn.com/v/latest/72x72/${codepoints}.png`;
}

