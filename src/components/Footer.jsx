import { Link } from 'react-router-dom';
import { navLinks } from '../data/siteData.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Premium social media strategy, content design, and campaign systems for brands that want to look refined and sell with confidence.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          {navLinks.slice(1).map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Brand Strategy</Link>
          <Link to="/services">Social Media Management</Link>
          <Link to="/services">Content Design</Link>
          <Link to="/services">Paid Growth</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>Let’s connect</h4>
          <a href="mailto:hello@legaspimedia.com">hello@legaspimedia.com</a>
          <a href="tel:+639123456789">+63 912 345 6789</a>
          <span>Manila, Philippines</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Legaspi Media. All rights reserved.</span>
        <span>Strategic. Creative. Impactful.</span>
      </div>
    </footer>
  );
}
