'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Eyes from '@/components/Eyes';
import { site } from '@/lib/data';

const SUBJECTS = ['Freelance Project', 'Full-time Role', 'Collaboration', 'General Enquiry'];

export default function ContactForm() {
  const params = useSearchParams();
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const body = encodeURIComponent(
      `${d.get('message')}\n\n— ${d.get('firstName')} ${d.get('lastName')} (${d.get('email')})`
    );
    setSending(true);
    // Opens the visitor's mail client with the message prefilled
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setTimeout(() => setSent(true), 700);
  };

  if (sent) {
    return (
      <div className="sticker form-card form-ok" role="status">
        <Eyes />
        <h2>Message ready!</h2>
        <p className="muted">
          Your mail app should have opened with the message. I&apos;ll reply within 24 hours.
        </p>
        <button className="btn btn-ghost" style={{ marginTop: 24, width: 'auto' }} onClick={() => { setSent(false); setSending(false); }}>
          Write another
        </button>
      </div>
    );
  }

  return (
    <div className="sticker form-card" id="message-form">
      <h2>Send a message</h2>
      <p className="form-intro">Tell me what you&apos;re working on and I&apos;ll get back to you with my thoughts.</p>

      <form onSubmit={onSubmit} noValidate>
        <fieldset className="chips">
          <legend className="sr-only">What&apos;s this about?</legend>
          {SUBJECTS.map((s) => (
            <button
              type="button"
              key={s}
              className="chip"
              aria-pressed={subject === s}
              onClick={() => setSubject(s)}
            >
              {s}
            </button>
          ))}
        </fieldset>

        <div className="frow">
          <div className="field">
            <label htmlFor="firstName">First name</label>
            <input className="input" id="firstName" name="firstName" autoComplete="given-name" placeholder="John" required />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input className="input" id="lastName" name="lastName" autoComplete="family-name" placeholder="Doe" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            defaultValue={params.get('email') ?? ''}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            className="input"
            id="message"
            name="message"
            placeholder="Tell me about your project, timeline, or any questions you have…"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" id="contact-submit" disabled={sending}>
          {sending ? 'Opening mail…' : <>Send message <span className="arrow">→</span></>}
        </button>
      </form>
    </div>
  );
}
