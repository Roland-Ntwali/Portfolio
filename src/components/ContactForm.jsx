import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    // You can use formData to access the entered values
  };

  return (
    <section id="contact">
      <p>
        If you have an application you are interested in developing, a feature
        that you need built, or a project that needs coding, I’d love to help
        with it.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full names"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Get in touch</button>
      </form>
    </section>
  );
};

export default ContactForm;
