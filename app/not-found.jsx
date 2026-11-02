import Link from 'next/link';
import Eyes from '@/components/Eyes';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '60vh' }}>
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <h1 className="display">
          4<Eyes style={{ '--size': '0.8em' }} />4
        </h1>
        <p className="lead">This page wandered off. Let&apos;s get you back somewhere useful.</p>
        <div className="meet-actions">
          <Link href="/" className="btn btn-primary">Back home</Link>
          <Link href="/projects" className="btn btn-ghost">See projects</Link>
        </div>
      </div>
    </section>
  );
}
