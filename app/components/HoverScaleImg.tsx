"use client";
import { useState } from 'react';

type HoverScaleImgProps = React.ImgHTMLAttributes<HTMLImageElement> & { hoverScale?: number };

export default function HoverScaleImg({ src, alt, style, hoverScale = 1.06, ...rest }: HoverScaleImgProps) {
  const [hover, setHover] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
  {...rest}
      style={{
        transition: 'transform 180ms cubic-bezier(.2,.9,.2,1), background-color 120ms',
        transform: hover ? `scale(${hoverScale})` : 'scale(1)',
        backgroundColor: hover ? 'rgba(0,0,0,0.04)' : 'transparent',
        cursor: 'pointer',
        display: 'block',
        margin: '0 auto',
        borderRadius: 6,
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
    />
  );
}
