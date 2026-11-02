'use client';

import { useEffect, useRef } from 'react';

/**
 * The orange mascot with googly eyes. Pupils follow the pointer.
 */
export default function Eyes({ className = '', style }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(1, Math.hypot(dx, dy) / 300);
        const max = r.width * 0.06; // travel distance scales with mascot size
        el.style.setProperty('--px', `${Math.cos(angle) * max * dist}px`);
        el.style.setProperty('--py', `${Math.sin(angle) * max * dist}px`);
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <span ref={ref} className={`eyes ${className}`} style={style} aria-hidden="true">
      <span className="eye">
        <span className="pupil" />
      </span>
      <span className="eye">
        <span className="pupil" />
      </span>
    </span>
  );
}
