import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { site, socials } from '@/lib/data';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Joshua Ayotope Adeyefa for freelance projects, full-time roles and collaborations.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Available · freelance, full-time & collaboration"
        title={<>Start a <span className="serif">conversation</span></>}
        lead="Whether you're hiring, building a product, or just want to explore what's possible — my inbox is always open."
      />

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap contact-grid">
          <div>
            <div className="sticker intro-card rv">
              <img src="/images/JAA.jpg" alt="Joshua Ayotope Adeyefa" />
              <p>
                <b>Hi, I&apos;m Joshua 👋</b>
                <br />
                A web &amp; mobile developer based in {site.location}. I reply to every serious
                message within 24 hours.
              </p>
            </div>

            <div className="info-list rv">
              <a href={`mailto:${site.email}`}><b>Email</b>{site.email}</a>
              <div><b>Location</b>{site.location}</div>
              <div><b>Response time</b>Under 24 hours</div>
              <a href={site.resume} target="_blank" rel="noopener noreferrer"><b>Resume</b>Download ↓</a>
            </div>

            <div className="socials rv">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              ))}
            </div>
          </div>

          <div className="rv">
            <Suspense fallback={<div className="sticker form-card" style={{ minHeight: 520 }} />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
