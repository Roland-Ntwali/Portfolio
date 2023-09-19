import React from 'react';
import Services from './Services';
import '../styles/About.css';
import ContactForm from './ContactForm';

const About = () => (
  <div className="about-page">
    <section>
      <div className="about">
        <div className="about_me">
          <h2>About Me</h2>
          <hr />
          <p className="about-para-one">
            Hello, I&apos;m a software developer! I can help you build a product ,
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
            <li>Address:  Kigali, Rwanda</li>
            <li>Phone:  +250788516564</li>
          </ul>
          <a className="cv" href="https://docs.google.com/document/d/1NLjj_45cJeJFrfiAhvt2pI2ZUJFoFwJD5DoCYbOHiD8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="cv_button" type="button">Download CV</button>
          </a>
        </div>
      </div>
      <div className="lang-container">
        <div className="languages">
          <h1>Languages</h1>
          <hr className="underline" />
          <div className="buttons">
            <button type="button" className="language-button">HTML</button>
            <button type="button" className="language-button">CSS</button>
            <button type="button" className="language-button">Javascript</button>
            <button type="button" className="language-button">Ruby</button>
          </div>
        </div>
        <div className="frameworks">
          <h1>Frameworks</h1>
          <hr className="underline" />
          <div className="buttons">
            <button type="button" className="framework-button">Ruby on Rails</button>
            <button type="button" className="framework-button">React</button>
            <button type="button" className="framework-button">Rspec</button>
            <button type="button" className="framework-button">Capybara</button>
            <button type="button" className="framework-button">Bootstrap</button>
            <button type="button" className="framework-button">Sass</button>
          </div>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <hr className="underline" />
          <div className="buttons">
            <button type="button" className="skill-button">Postgress</button>
            <button type="button" className="skill-button">Github</button>
            <button type="button" className="skill-button">Git</button>
            <button type="button" className="skill-button">Codepen</button>
          </div>
        </div>
      </div>
    </section>
    <Services />
    <ContactForm />
  </div>
);

export default About;
