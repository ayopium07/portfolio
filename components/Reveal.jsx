'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Fades `.rv` elements in as they enter the viewport.
 * Re-binds on navigation and also picks up `.rv` nodes added later
 * (e.g. when the project filter re-renders the grid).
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = (root) => {
      if (root.nodeType !== 1) return;
      if (root.matches?.('.rv:not(.in)')) io.observe(root);
      root.querySelectorAll?.('.rv:not(.in)').forEach((el) => io.observe(el));
    };

    observeAll(document.body);

    const mo = new MutationObserver((muts) =>
      muts.forEach((m) => m.addedNodes.forEach(observeAll))
    );
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
