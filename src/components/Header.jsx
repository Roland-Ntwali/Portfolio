import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ro from '../images/ro.jpg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const hideHeaderContent = location.pathname === '/works'
    || location.pathname === '/contacts'
    || location.pathname === '/services';

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <h3>Roland</h3>
        <nav className="menu-toggle" style={{ display: windowWidth > 768 ? 'none' : 'block' }}>
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
                <Link to="/works" onClick={closeMenu}>Works</Link>
              </li>
              <li>
                <Link to="/contacts" onClick={closeMenu}>Contact</Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenu}>Services</Link>
              </li>
              {/* Additional menu links */}
              <li>
                <Link to="/" onClick={closeMenu}>About</Link>
              </li>
            </ul>
          )}
        </nav>
        {windowWidth > 768 && (
          <ul className="new-menu-list">
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
      </header>
      {!hideHeaderContent && (
        <>
          <div className="header-content">
            <h1>Hi, I am Ntwali Roland</h1>
            <p>I&apos;m a software developer passionate about creating amazing web applications.</p>
            <img src={ro} alt="Ntwali Roland" style={{ width: '250px', height: 'auto' }} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
