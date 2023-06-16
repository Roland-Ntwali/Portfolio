import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
