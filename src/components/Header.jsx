import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'visible'; // Allow scrolling when menu is closed
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'visible'; // Reset overflow on component cleanup
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="navbar-content">
        <div className="logo">
          <h3>Roland</h3>
        </div>
        <div className="menu-list">
          <nav className="menu-toggle" style={{ display: windowWidth > 768 ? 'none' : 'block' }}>
            <button
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} // Set appropriate labels for open and close states
              type="button"
              id="menuButton"
            >
              <div
                className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                onKeyDown={(e) => e.key === 'Enter' && toggleMenu()} // Handle Enter key for accessibility
                role="button"
                tabIndex={0} // Make it focusable
              >
                <span className="bar1" />
                <span className="bar2" />
                <span className="bar3" />
              </div>
            </button>
            {isMenuOpen && (
              <div className={`overlay ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu-links">
                  <li>
                    <Link to="/" onClick={closeMenu}>About</Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                  </li>
                  <li>
                    <Link to="/works" onClick={closeMenu}>Works</Link>
                  </li>
                  <li>
                    <Link to="/contacts" onClick={closeMenu}>Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
          {windowWidth > 768 && (
            <ul className="new-menu-list">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              {/* Additional menu links */}
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
