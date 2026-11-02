import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { facts, services, steps } from '@/lib/data';

export const metadata = {
  title: 'Services',
  description: 'Web development, mobile apps and cybersecurity services by Joshua Ayotope Adeyefa.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="What I bring to the table"
        title={<>More than code — <span className="serif">a complete engineering mindset</span></>}
        lead="Whether you're hiring for your team or bringing me on as a freelancer, here's exactly what you gain: reliable delivery, clean architecture, and a developer who genuinely cares about your product's success."
      >
        <div className="meet-actions rv">
          <Link className="btn btn-primary" href="/contact">Let&apos;s work together</Link>
          <Link className="btn btn-ghost" href="/projects">View my work <span className="arrow">→</span></Link>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="facts rv" style={{ marginTop: 0 }}>
            {facts.map((f) => (
              <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">Core services</span>
            <h2 className="h2 rv">What I <span className="serif">do</span></h2>
          </div>
          <div className="groups">
            {services.map((s, i) => (
              <div className="group rv" key={s.id} style={{ '--d': `${i * 80}ms` }}>
                <span className="mono muted">{s.no}</span>
                <h3 style={{ marginTop: 14 }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: 16, marginBottom: 20 }}>{s.body}</p>
                <div className="pills">
                  {s.pills.map((p) => <span className="pill" key={p}>{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">How I work</span>
            <h2 className="h2 rv">My approach to <span className="serif">every engagement</span></h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step rv" key={s.title} style={{ '--d': `${i * 80}ms` }}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">FAQ</span>
            <h2 className="h2 rv">Good to <span className="serif">know</span></h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CTA />
    </>
  );
}
