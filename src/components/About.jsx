import React from 'react';

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <hr />
    <h4 className="header">Hello, I&apos;m Roland Ntwali</h4>
    <hr />
    <h3 className="title">I&apos;m creative UI</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>
      Integer feugiat tellus ut turpis facilisis, a
    </p>
    <a href="https://docs.google.com/document/d/1NLjj_45cJeJFrfiAhvt2pI2ZUJFoFwJD5DoCYbOHiD8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className="cv" type="button">CV</button>
    </a>
  </section>
);

export default About;
