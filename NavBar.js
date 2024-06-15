import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://cdn.dribbble.com/users/2726/screenshots/12125043/healthcare_still_2x.gif?resize=400x0" alt="Elizabeth Hospital Logo" />
        <h1>Elizabeth Hospital</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/find-doctor">Find a Doctor</Link></li>
        <li><Link to="/book-appointment">Book Appointment</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
