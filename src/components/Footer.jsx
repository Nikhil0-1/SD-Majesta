import './Footer.css';

const footerNav = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Connect', href: '/#connect' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-sd">SD</span>
              <span className="footer__logo-majesta">MAJESTA</span>
            </div>
            <p className="footer__tagline">Elevating Urban Luxury</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul>
              {footerNav.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li><a href="tel:+917009970071" className="footer__link">+91 700 99 700 71</a></li>
              <li><a href="mailto:contact@sdmajesta.com" className="footer__link">contact@sdmajesta.com</a></li>
              <li><span className="footer__link footer__address">Bodakdev, Ahmedabad</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Follow</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/sdmajesta/" target="_blank" rel="noopener noreferrer" className="footer__link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/sdmajesta/" target="_blank" rel="noopener noreferrer" className="footer__link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} SD Majesta. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
