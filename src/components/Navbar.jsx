import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrochureModal from './BrochureModal';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Horizon', href: '/projects/horizon' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Location', href: '/#location' },
  { label: 'Calculator', href: '/#investment-calculator' },
  { label: 'Connect', href: '/#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const id = href.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="navbar" role="navigation">
        <div className="nav__inner container">
          <Link to="/" className="nav__logo" aria-label="SD Majesta Home">
            <span className="nav__logo-text">SD</span>
            <span className="nav__logo-accent">MAJESTA</span>
          </Link>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className="nav__link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="nav__link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav__cta-group">
            <button
              type="button"
              className="btn btn-outline nav__brochure-btn"
              onClick={() => setBrochureOpen(true)}
            >
              Brochure
            </button>
            <a
              href="/#connect"
              className="btn btn-gold nav__cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#connect'); }}
            >
              Schedule Visit
            </a>
          </div>

          <button
            className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav__mobile ${menuOpen ? 'nav__mobile--open' : ''}`}>
          <div className="nav__mobile-inner">
            <ul className="nav__mobile-links">
              {navLinks.map((link, i) => (
                <li key={link.label} style={{ transitionDelay: `${i * 0.04}s` }}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="nav__mobile-link"
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="nav__mobile-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav__mobile-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => { setMenuOpen(false); setBrochureOpen(true); }}
              >
                Download Dossier
              </button>
              <a
                href="/#connect"
                className="btn btn-gold"
                onClick={(e) => { e.preventDefault(); handleNavClick('/#connect'); }}
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Brochure Modal */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </>
  );
}
