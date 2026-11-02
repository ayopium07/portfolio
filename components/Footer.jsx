import Link from 'next/link';
import { Logo } from '@/components/Header';
import { nav, site, socials } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo />
            <p>
              {site.role} building responsive websites and cross-platform apps from {site.location}.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              {nav.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>Email</a></li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Web &amp; Mobile · {site.location}</span>
        </div>
      </div>
    </footer>
  );
}
