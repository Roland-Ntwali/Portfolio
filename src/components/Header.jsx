import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ro from '../images/ro.jpg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const hideHeaderContent = location.pathname === '/works'
    || location.pathname === '/contacts'
    || location.pathname === '/services';

  return (
    <>
      <header>
        <h3>Roland</h3>
        <nav>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <div className="menu-icon">
              <span />
              <span />
              <span />
            </div>
          </button>
          {isMenuOpen && (
            <ul className="menu-links">
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* Additional menu links */}
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
      {!hideHeaderContent && (
        <>
          <div className="header-content">
            <h1>Ntwali Roland</h1>
            <p>I&apos;m a software developer passionate about creating amazing web applications.</p>
            <img src={ro} alt="Ntwali Roland" style={{ width: '250px', height: 'auto' }} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
