const LABEL = { web: 'Web', mobile: 'Mobile', security: 'Security' };

export default function ProjectCard({ p, delay = 0 }) {
  const tag = p.tags.map((t) => LABEL[t]).join(' + ');
  const meta = [p.kind, p.year].filter(Boolean).join(' · ');

  const inner = (
    <>
      <div className={`project-media${p.logo ? ' is-logo' : ''}`}>
        <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
        <span className="project-tag">{tag}</span>
        <span className={`project-visit${p.href ? '' : ' private'}`}>
          {p.href ? <>Visit site <span aria-hidden="true">↗</span></> : 'Private repo'}
        </span>
      </div>
      <div className="project-info">
        <div className="meta mono">{meta}</div>
        <h3>{p.title}</h3>
        <p>{p.blurb}</p>
        {p.domain && <small>{p.domain}</small>}
      </div>
    </>
  );

  const props = { className: 'project rv', style: { '--d': `${delay}ms` } };

  return p.href ? (
    <a {...props} href={p.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <article {...props}>{inner}</article>
  );
}
