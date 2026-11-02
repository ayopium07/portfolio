import { faqs } from '@/lib/data';

/**
 * Native <details> accordion. The shared `name` makes it exclusive
 * (one open at a time) in supporting browsers; others simply allow many.
 */
export default function FAQ() {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} name="faq" className="rv" style={{ '--d': `${i * 60}ms` }} open={i === 0}>
          <summary>
            {f.q}
            <span className="plus" aria-hidden="true" />
          </summary>
          <p className="answer">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
