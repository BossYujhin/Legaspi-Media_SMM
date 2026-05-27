import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/siteData.js';
import Button from './Button.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentHash = location.hash || '#home';

  const linkIsActive = (link) => {
    if (link.path.startsWith('/#')) {
      const linkHash = `#${link.path.split('#')[1]}`;
      if (linkHash === '#home') {
        return location.pathname === '/' && (!location.hash || location.hash === '#home');
      }
      return location.pathname === '/' && location.hash === linkHash;
    }

    return location.pathname === link.path;
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={() => (linkIsActive(link) ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Button to="/contact">Book a Call</Button>
        </div>
      </div>
    </header>
  );
}
