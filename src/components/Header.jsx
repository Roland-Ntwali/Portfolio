import React from 'react';
import '../index.css';

const Header = () => (
  <header>
    <h1>Ntwali Roland</h1>
    <p>Im a software developer passionate about creating amazing web applications.</p>
    {/* Navigation links */}
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
