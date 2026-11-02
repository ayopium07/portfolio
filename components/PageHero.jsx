/**
 * Centered inner-page hero: status badge, display headline, lead copy.
 */
export default function PageHero({ badge, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        {badge && (
          <span className="badge rv">
            <span className="dot" />
            {badge}
          </span>
        )}
        <h1 className="display rv">{title}</h1>
        {lead && <p className="lead rv">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
