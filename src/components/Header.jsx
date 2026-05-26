import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData.js';
import Button from './Button.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              className={({ isActive }) => (isActive ? 'active' : '')}
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
