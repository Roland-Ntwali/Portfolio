import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Services from './Services';
import '../styles/About.css';
import ContactForm from './ContactForm';
import ro from '../images/ro.jpg';
import '../styles/Header.css';

const About = () => (
  <div className="about-page">
    <div className="about-me">
      <div className="my-description">
        <h1>Hi, I am Ntwali Roland</h1>
        <p>
          {' '}
          A Full-stack Software Developer with an exceptional eye for detail,
          consistently surpassing expectations with meticulously crafted code and designs.
        </p>
        <Link to="/contacts">
          <button type="button" className="hire">Hire Me</button>
        </Link>

        <h4 className="icon">LET&apos;S CONNECT</h4>
        <ul className="social-icons">
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali" aria-label="GitHub"><FaGithub /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roland-ntwali/" aria-label="LinkedIn"><FaLinkedin /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_Ntwali" aria-label="Twitter"><FaTwitter /></a></li>
        </ul>
      </div>
      <div className="my-image">
        <img src={ro} alt="Ntwali Roland" style={{ width: '250px', height: 'auto' }} />
      </div>
    </div>
    <section>
      <div className="about">
        <div className="about_me">
          <h2>About Me</h2>
          <hr />
          <p className="about-para-one">
            I specialize in bringing your ideas to life through custom product development,
            feature enhancements, and website creation.
            Take a glimpse at my portfolio and expertise!
            If you have a coding project in mind, feel free to reach out.
            Let&apos;s turn your vision into reality!
            {' '}
          </p>
        </div>
        <div className="about-me2">
          <h3 className="title">I am a Professional Web Developer</h3>
          <p>
            As a dedicated web developer, I take pride in creating top-notch,
            user-friendly applications. My expertise covers a diverse range of
            technologies, allowing me to approach various projects with confidence.
            I&apos;m passionate about writing clean, efficient code that not only
            meets functional requirements but also follows industry best practices.
            With a sharp attention to detail and a commitment to ongoing learning,
            I&apos;m focused on delivering solutions that surpass client expectations.
          </p>
          <ul>
            <li>Address:  Kigali, Rwanda</li>
            <li>Phone:  +250788516564</li>
          </ul>
          <a className="cv" href="https://docs.google.com/document/d/1m7zhyW_-alI-vsfSHviXNiNUYq3T17tYRgwJthEP1Yk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
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
            <button type="button" className="skill-button">Remote pair-programming</button>
            <button type="button" className="skill-button">Teamwork</button>
            <button type="button" className="skill-button">Mentoring</button>
          </div>
        </div>
      </div>
    </section>
    <Services />
    <ContactForm />
  </div>
);

export default About;
