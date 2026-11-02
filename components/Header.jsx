'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/data';

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} — home`}>
      joshua<span className="logo-dot" aria-hidden="true" />dev
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="wrap header-inner">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="text-link" href={site.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <Link href="/contact" className="btn btn-primary btn-pill" id="nav-cta">
            Let&apos;s talk
          </Link>
          <button
            className="burger"
            id="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" inert={!open ? true : undefined}>
        <Link href="/" className="m-link" aria-current={pathname === '/' ? 'page' : undefined}>
          Home <span aria-hidden="true">→</span>
        </Link>
        {nav.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="m-link"
            aria-current={isActive(l.href) ? 'page' : undefined}
          >
            {l.label} <span aria-hidden="true">→</span>
          </Link>
        ))}
        <a className="m-link" href={site.resume} target="_blank" rel="noopener noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
        <Link href="/contact" className="btn btn-primary">
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
