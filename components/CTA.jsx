import Link from 'next/link';
import Eyes from '@/components/Eyes';
import EmailCapture from '@/components/EmailCapture';
import { socials } from '@/lib/data';

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="glow" aria-hidden="true" />
      <div className="wrap cta-inner">
        <span className="eyebrow rv">Have an idea?</span>
        <h2 id="cta-title" className="display rv" style={{ marginTop: 22 }}>
          Let&apos;s build something <span className="serif">amazing</span>
          <Eyes />
        </h2>
        <p className="lead rv">
          Freelance project, full-time role or collaboration — drop your email and tell me what
          you&apos;re working on.
        </p>
        <div className="rv" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EmailCapture id="cta" cta="Get in touch" note="I reply to every serious message within 24 hours." />
        </div>
        <div className="socials rv">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
          <Link href="/projects">See my work →</Link>
        </div>
      </div>
    </section>
  );
}
