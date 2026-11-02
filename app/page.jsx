import Link from 'next/link';
import Eyes from '@/components/Eyes';
import EmailCapture from '@/components/EmailCapture';
import ProjectCard from '@/components/ProjectCard';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { clients, facts, projects, services, site, steps, tech } from '@/lib/data';

function FeatureVisual({ id }) {
  if (id === 'web') {
    return (
      <>
        <div className="sticker mock-browser">
          <div className="bar"><i /><i /><i /></div>
          <div className="content">
            <div className="mock-line dark" />
            <div className="mock-line w80" />
            <div className="mock-line w60" />
            <div className="mock-line" />
          </div>
        </div>
        <div className="sticker mock-score">
          <span className="ring">100</span> Performance
        </div>
      </>
    );
  }
  if (id === 'mobile') {
    return (
      <>
        <div className="sticker mock-phone">
          <div className="notch" />
          <div className="tile o" />
          <div className="row"><div className="tile" /><div className="tile" /></div>
          <div className="tile" />
          <div className="row"><div className="tile" /><div className="tile" /></div>
        </div>
        <span className="sticker mock-chip ios">iOS</span>
        <span className="sticker mock-chip android">Android</span>
      </>
    );
  }
  return (
    <>
      <div className="sticker mock-lock">
        {['Secure authentication', 'Data encryption', 'Robust architecture'].map((t) => (
          <div className="row" key={t}>
            <span className="check" aria-hidden="true">✓</span>
            {t}
          </div>
        ))}
      </div>
      <div className="sticker sticker-orange mock-shield" aria-hidden="true">🔒</div>
    </>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const marquee = [...clients, ...clients];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="glow" aria-hidden="true" />

        <div className="wrap hero-inner">
          <Link href="/contact" className="badge rv" id="hero-badge">
            <span className="dot" />
            Available for new projects
            <span aria-hidden="true">→</span>
          </Link>

          <h1 id="hero-title" className="display rv" style={{ '--d': '80ms' }}>
            Crafting digital excellence for <span className="serif">modern brands</span>
            <Eyes />
          </h1>

          <p className="lead rv" style={{ '--d': '160ms' }}>
            I&apos;m Joshua — a web &amp; mobile developer in {site.location.split(',')[0]} building
            responsive websites and cross-platform apps that solve real problems and keep people
            engaged. Secure by default, pixel-perfect by habit.
          </p>

          <div className="rv" style={{ '--d': '240ms', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EmailCapture
              id="hero"
              cta="Start a project"
              note="Freelance, full-time or collab. I reply within 24 hours."
            />
          </div>

          {/* Compact sticker row for small screens */}
          <div className="hero-mobile-stickers" aria-hidden="true">
            <div className="sticker card-check">
              <span className="check">✓</span> Shipped to iOS &amp; Android
            </div>
            <div className="sticker sticker-orange card-stat">
              <span className="mono">Shipped · since 2023</span>
              <b>7+ projects</b>
            </div>
          </div>
        </div>

        {/* Floating stickers (desktop) */}
        <div className="floaters" aria-hidden="true">
          <a className="floater f-project" href="https://www.festivalofchange.org/" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <div className="sticker card-project">
              <span className="thumb"><img src="/images/FOC25.jpg" alt="" /></span>
              <span>
                <b>Festival of Change 25</b>
                <span className="mono">2025 · Next.js · Web</span>
              </span>
            </div>
          </a>

          <div className="floater f-chat">
            <div className="sticker card-chat">
              <span className="mono">Client DM · SWIP</span>
              <div className="bubble">Can we launch the new site this week?</div>
              <div className="reply">
                <span className="typing"><Eyes /><i /><i /><i /></span>
              </div>
            </div>
          </div>

          <div className="floater f-check">
            <div className="sticker card-check">
              <span className="check">✓</span> Shipped to iOS &amp; Android
            </div>
          </div>

          <div className="floater f-stat">
            <div className="sticker sticker-orange card-stat">
              <span className="mono">Missed deadlines · to date</span>
              <b>0</b>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clients marquee ---------------- */}
      <section className="clients" aria-label="Organisations I've built for">
        <p>Trusted by teams, NGOs and founders</p>
        <div className="marquee">
          <div className="marquee-track">
            {marquee.map((c, i) => (
              <span key={`${c}-${i}`} aria-hidden={i >= clients.length ? 'true' : undefined}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">What I do</span>
            <h2 id="services-title" className="h2 rv">
              One developer, <span className="serif">three superpowers</span>
            </h2>
            <p className="lead rv">
              From the first pixel to the last security check — web, mobile and the
              protection that keeps both safe.
            </p>
          </div>

          <div className="features">
            {services.map((s, i) => (
              <Link href="/services" className="feature rv" key={s.id} style={{ '--d': `${i * 90}ms` }}>
                <div className="feature-visual" aria-hidden="true">
                  <FeatureVisual id={s.id} />
                </div>
                <div className="feature-body">
                  <span className="no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="pills">
                    {s.pills.slice(0, 4).map((p) => <span className="pill" key={p}>{p}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Meet Joshua ---------------- */}
      <section className="section section-tint" id="about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="meet">
            <div className="meet-photo rv">
              <div className="sticker frame">
                <img src="/images/Ayofe.png" alt="Portrait of Joshua Ayotope Adeyefa" loading="lazy" />
              </div>
              <span className="sticker tag-hello"><Eyes /> Hi, I&apos;m Joshua</span>
              <span className="sticker tag-loc">📍 {site.location}</span>
            </div>

            <div className="meet-copy">
              <span className="eyebrow rv">Meet Joshua</span>
              <h2 id="about-title" className="h2 rv">
                Builds things that <span className="serif">feel right</span>
              </h2>
              <p className="lead rv">
                I work with organisations and brands to turn ideas into polished, high-performance
                products. I care about the details, from pixel-perfect interfaces to secure,
                well-architected systems.
              </p>
              <p className="lead muted rv">
                My background in Cybersecurity isn&apos;t just a credential — it shapes how I write
                code. Security, data integrity and user trust are built in from day one.
              </p>
              <div className="meet-actions rv">
                <Link href="/about" className="btn btn-dark">More about me <span className="arrow">→</span></Link>
                <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Download resume ↓
                </a>
              </div>
            </div>
          </div>

          <div className="facts rv">
            {facts.map((f) => (
              <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
            ))}
          </div>

          <div className="stack rv" aria-label="Tech stack">
            {tech.map((t) => <span className="pill" key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head-row">
            <div className="section-head left">
              <span className="eyebrow rv">Recent work</span>
              <h2 id="work-title" className="h2 rv">
                Shipped, live and <span className="serif">loved</span>
              </h2>
            </div>
            <Link href="/projects" className="btn btn-ghost rv">View all projects <span className="arrow">→</span></Link>
          </div>

          <div className="projects">
            {featured.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 90} />)}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section section-tint" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">How I work</span>
            <h2 id="process-title" className="h2 rv">
              A process with <span className="serif">no surprises</span>
            </h2>
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

      {/* ---------------- Quote ---------------- */}
      <section className="section">
        <figure className="wrap quote">
          <blockquote className="rv">
            “I care about the product as much as the people building it. Good code is a{' '}
            <span className="serif">by-product</span> of good communication and clear goals.”
          </blockquote>
          <figcaption className="rv">
            <img src="/images/JAA.jpg" alt="" loading="lazy" />
            <span>
              <b>{site.name}</b>
              <span>{site.role}</span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section section-tint" id="faq" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow rv">FAQ</span>
            <h2 id="faq-title" className="h2 rv">
              Questions, <span className="serif">answered</span>
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CTA />
    </>
  );
}
