"use client";
import { useState } from 'react';
import HoverScaleImg from './HoverScaleImg';
import BlockModal from './BlockModal';

export default function BlockCard({ block }: { block: any }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: 'inline-block', width: '100%', marginBottom: 12, breakInside: 'avoid' }}>
        <div onClick={() => setOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }} style={{ cursor: 'pointer' }}>
          <HoverScaleImg src={block.thumbUrl} alt={block.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 6 }} hoverScale={1.06} />
          <div style={{ marginTop: 8, fontSize: 13 }}>{block.title}</div>
        </div>
      </div>
      {open && <BlockModal block={block} onClose={() => setOpen(false)} />}
    </>
  );
}
