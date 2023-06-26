import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import ContactForm from './components/ContactForm';
import Services from './components/Services'; // Import the Services component
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        {' '}
        {/* Add the Services route */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
