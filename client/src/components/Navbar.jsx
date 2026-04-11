import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const NAV_LINKS = [
  { label: '01.ABOUT_ME', href: '#about' },
  { label: '02.SKILL_MATRIX', href: '#skills' },
  { label: '03.REPO_LOG', href: '#projects' },
  { label: '04.SYSTEM_UPGRADES', href: '#timeline' },
  { label: '05.CERT_STORAGE', href: '#certs' },
  { label: '06.CONNECT_CLI', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map(l => l.href.slice(1))];
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          AB
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={activeSection === l.href.slice(1) ? 'active' : ''}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
