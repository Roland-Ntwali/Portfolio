import React from 'react';
import Services from './Services';
import '../styles/About.css';

const About = () => (
  <div>
  <section className="about">
    <div className='about_me'>
      <h2>About Me</h2>
      <hr />
      <p className='about-para-one'>Hello I&apos;m a software developer! I can help you build a product , 
        feature or website Look through some of my work and experience! 
        If you like what you see and have a project you need coded,
         don&apos;t hestiate to contact me. </p>
    </div>
    <div className='about-me2'>
      <h3 className="title">I am a Professional Web Developer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul>
        <li>Age:</li>
        <li>Address:</li>
        <li>Phone:</li>
      </ul>
      <a href="https://docs.google.com/document/d/1NLjj_45cJeJFrfiAhvt2pI2ZUJFoFwJD5DoCYbOHiD8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="cv" type="button">CV</button>
      </a>
    </div>
  </section>
    <Services />
  </div>
);

export default About;
