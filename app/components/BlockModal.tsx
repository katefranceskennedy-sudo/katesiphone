"use client";
import { useEffect } from 'react';
import Image from 'next/image';

import type { BlockItem } from '../../lib/seed';

export default function BlockModal({ block, onClose }: { block: BlockItem; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!block) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }} onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{ background: 'transparent', padding: 18, borderRadius: 8, maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <Image
            src={block.thumbUrl}
            alt={block.title}
            width={420}
            quality={85}
            style={{ maxWidth: '60vw', width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 6 }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ marginTop: 0 }}>{block.title}</h2>
            <div style={{ color: '#666' }}>{block.description || ''}</div>
            <div style={{ marginTop: 12 }}>
              <a href={block.source || '#'} target="_blank" rel="noreferrer" style={{ marginRight: 12 }}>Open source</a>
              <button onClick={onClose} style={{ padding: '6px 10px' }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
