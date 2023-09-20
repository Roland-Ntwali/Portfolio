import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import ContactForm from './components/ContactForm';
import Services from './components/Services';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<About />} />
        <Route path="/Portfolio" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  </Router>
);

export default App;
