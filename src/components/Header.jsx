import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <p>Brief introduction goes here</p>
      {/* Navigation links */}
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
