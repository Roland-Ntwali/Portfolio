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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                I&apos;m a software developer! I can help you build a product , feature or
                website Look through some of my work and experience! If you like what
                you see and have a project you need coded, don&apos;t hestiate to contact me.
              </p>

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
