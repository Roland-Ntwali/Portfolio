import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const hideHeaderContent = location.pathname === '/projects' || location.pathname === '/contacts';

  return (
    <>
      <header>
        <nav>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contact</Link>
        </nav>
      </header>
      {!hideHeaderContent && (
        <>
          <h1>Ntwali Roland</h1>
          <p>I&apos;m a software developer passionate about creating amazing web applications.</p>
        </>
      )}
    </>
  );
};

export default Header;
