import Link from 'next/link';
import Eyes from '@/components/Eyes';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { education, experience, facts, site, skillGroups } from '@/lib/data';

export const metadata = {
  title: 'About',
  description:
    'Joshua Ayotope Adeyefa — Web & Mobile Developer with a Cybersecurity background. 2+ years building cross-platform apps and web platforms.',
};

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <article className="tl-item rv" key={it.role} style={{ '--d': `${i * 70}ms` }}>
          <time>{it.when}</time>
          <div>
            <h3>{it.role}</h3>
            <h4>{it.org}</h4>
            <p>{it.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Available for remote work"
        title={<>Joshua Ayotope <span className="serif">Adeyefa</span></>}
        lead={`${site.role} · Cybersecurity background · ${site.location}.`}
      />

      <section className="section section-tint" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="bio">
            <div className="meet-photo rv">
              <div className="sticker frame">
                <img src="/images/Temisayo.png" alt="Joshua Ayotope Adeyefa" />
              </div>
              <span className="sticker tag-hello"><Eyes /> That&apos;s me</span>
            </div>
            <div>
              <span className="eyebrow rv">My story</span>
              <h2 className="h2 rv" style={{ margin: '18px 0 24px' }}>
                Software should <span className="serif">feel</span> good
              </h2>
              <p className="lead rv">
                I&apos;m a developer who cares deeply about <b>how software actually feels</b> to
                use. With 2+ years of experience building web platforms and cross-platform apps, I
                combine a <b>cybersecurity mindset</b> with clean, product-focused engineering.
              </p>
              <p className="lead muted rv">
                My background in Cybersecurity isn&apos;t just a credential — it shapes how I write
                code. Security considerations, data integrity, and user trust are built into
                everything I ship from day one.
              </p>
              <div className="meet-actions rv">
                <a className="btn btn-primary" href={site.resume} target="_blank" rel="noopener noreferrer">
                  Download resume ↓
                </a>
                <Link className="btn btn-ghost" href="/contact">Get in touch <span className="arrow">→</span></Link>
              </div>
            </div>
          </div>

          <div className="facts rv">
            {facts.map((f) => (
              <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">Technical skills</span>
            <h2 className="h2 rv">What I <span className="serif">work with</span></h2>
          </div>
          <div className="groups">
            {skillGroups.map((g, i) => (
              <div className="group rv" key={g.title} style={{ '--d': `${i * 80}ms` }}>
                <h3>{g.title}</h3>
                <div className="pills">
                  {g.pills.map((p) => <span className="pill" key={p}>{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head left">
            <span className="eyebrow rv">Work history</span>
            <h2 className="h2 rv">Experience</h2>
          </div>
          <Timeline items={experience} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head left">
            <span className="eyebrow rv">Academic background</span>
            <h2 className="h2 rv">Education</h2>
          </div>
          <Timeline items={education} />
        </div>
      </section>

      <CTA />
    </>
  );
}
