import React from 'react';
import Services from './Services';
import '../styles/About.css';
import ContactForm from './ContactForm';

const About = () => (
  <div className="about-page">
    <section className="about">
      <div className="about_me">
        <h2>About Me</h2>
        <hr />
        <p className="about-para-one">
          Hello I&apos;m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&apos;t hestiate to contact me.
          {' '}
        </p>
      </div>
      <div className="about-me2">
        <h3 className="title">I am a Professional Web Developer</h3>
        <p>
          As a seasoned web developer, I am dedicated to crafting high-quality,
          user-friendly applications. My proficiency spans a wide range of
          technologies, enabling me to tackle diverse projects with ease. I thrive
          on writing clean, maintainable code that not only meets the functional
          requirements but also adheres to best practices. With a keen eye for
          detail and a drive for continuous learning, I am committed to delivering
          solutions that exceed client expectations.
        </p>
        <ul>
          <li>Age:  25 years old</li>
          <li>Address:  Kigali, Rwanda</li>
          <li>Phone:  +250788516564</li>
        </ul>
        <a className="cv" href="https://docs.google.com/document/d/1NLjj_45cJeJFrfiAhvt2pI2ZUJFoFwJD5DoCYbOHiD8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="cv_button" type="button">CV</button>
        </a>
      </div>
    </section>
    <Services />
    <ContactForm />
  </div>
);

export default About;
