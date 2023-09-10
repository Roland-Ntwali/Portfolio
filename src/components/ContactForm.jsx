import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        message: formData.message,
      };

      await emailjs.send(
        'service_gqh08nn',
        'template_49ixsmq',
        templateParams,
        'T3IE1ODnDXFjJ2aTX',
      );

      alert('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
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
          name="user_name"
          placeholder="Full names"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Your email address"
          value={formData.user_email}
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
