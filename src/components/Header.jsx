import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ro from '../images/ro.jpg';
import '../styles/Header.css';

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
              aria-label="Toggle menu"
              type="button"
              id="menuButton"
            >
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
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
      {!hideHeaderContent && (
        <>
          <div className="about-me">
            <div className="my-description">
              <h1>Hi, I am Ntwali Roland</h1>
              <p>
                {' '}
                FULL-STACK SOFTWARE DEVELOPER
              </p>
              <Link to="/contacts">
              <button className="hire">Hire Me</button>
            </Link>

              <h4 className="icon">LET&apos;S CONNECT</h4>
              <ul className="social-icons">
                <li><a href="https://github.com/Roland-Ntwali" aria-label="GitHub"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/roland-ntwali/" aria-label="LinkedIn"><FaLinkedin /></a></li>
                <li><a href="https://twitter.com/_Ntwali" aria-label="Twitter"><FaTwitter /></a></li>
              </ul>
            </div>
            <div className="my-image">
              <img src={ro} alt="Ntwali Roland" style={{ width: '250px', height: 'auto' }} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
