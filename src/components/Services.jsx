import React from 'react';
import '../styles/Services.css';

const Services = () => (
  <section id="services">
    <h2>My Services</h2>
    <div className="service">
      <img src="web-development-icon.png" alt="Web Development Icon" />
      <h3>Web Development</h3>
      <p>
        I specialize in creating dynamic and responsive websites tailored to your specific needs.
      </p>
    </div>
    <div className="service">
      <img src="friendly-design-icon.png" alt="Friendly Design Icon" />
      <h3>Friendly Design</h3>
      <p>
        I focus on designing user-friendly interfaces that enhance the overall user experience.
      </p>
    </div>
    <div className="service">
      <img src="clean-code-icon.png" alt="Clean Code Icon" />
      <h3>Clean Code</h3>
      <p>
        I write well-structured and maintainable
        code to ensure the longevity and scalability of your project.
      </p>
    </div>
  </section>
);

export default Services;
