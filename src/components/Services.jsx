import React from 'react';
import '../styles/Services.css';
import appDevelopmentImage from '../images/app-development.png';
import cleanCodeImage from '../images/clean-code.png';
import designImage from '../images/design.png';

const Services = () => (
  <section>
    <h2 className="service-header">My Services</h2>
    <div id="services">
      <div className="service">
        <img src={appDevelopmentImage} alt="Web Development Icon" />
        <h3>Web Development</h3>
        <p>
          I specialize in creating dynamic and responsive websites tailored to your specific needs.
        </p>
      </div>
      <div className="service">
        <img src={designImage} alt="Friendly Design Icon" />
        <h3>Friendly Design</h3>
        <p>
          I focus on designing user-friendly interfaces that enhance the overall user experience.
        </p>
      </div>
      <div className="service">
        <img src={cleanCodeImage} alt="Clean Code Icon" />
        <h3>Clean Code</h3>
        <p>
          I write well-structured and maintainable
          code to ensure the longevity and scalability of your project.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
