'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Hero-style "email + button" capture. Hands the email over to the
 * contact form so the visitor only has to add a message.
 */
export default function EmailCapture({ id = 'capture', cta = 'Start a project', note }) {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const q = email.trim() ? `?email=${encodeURIComponent(email.trim())}` : '';
    router.push(`/contact${q}#message-form`);
  };

  return (
    <>
      <form className="capture" onSubmit={onSubmit}>
        <label htmlFor={`${id}-email`} className="sr-only">Your email</label>
        <input
          id={`${id}-email`}
          className="input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" id={`${id}-submit`}>
          {cta}
        </button>
      </form>
      {note && <p className="capture-note">{note}</p>}
    </>
  );
}
