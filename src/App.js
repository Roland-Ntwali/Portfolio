import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <div className="container">
    <Header />
    <About />
    <Projects />
    <ContactForm />
    <Footer />
  </div>
);

export default App;
