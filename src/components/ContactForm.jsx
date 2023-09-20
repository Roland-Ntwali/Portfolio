import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

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

      setSubmitStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('failure');
      // eslint-disable-next-line
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact">
      <div className="contact-me">
        <h1>Contact Me</h1>
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
        {submitStatus === 'success' && <div>Message sent successfully!</div>}
        {submitStatus === 'failure' && <div>Error sending message. Please try again later.</div>}
      </div>
    </section>
  );
};

export default ContactForm;
