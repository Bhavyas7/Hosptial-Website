import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Services from './components/Services.js';
import FindDoctor from './components/FindDoctor.js';
import BookAppointment from './components/BookAppointment.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
