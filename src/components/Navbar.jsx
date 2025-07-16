import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul>
        <div className="logo">
          <img src={logo} alt="School Logo" />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <div className="help-line">
            <p className="title">Admission Help-Line:</p>
            <a href="tel:+919880030009" className="phone">+91 98800 30009</a>
          </div>
          <li><Link to="/home">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}



          <li className="dropdown">
            <li><Link to="/about">About</Link></li>
            <ul className="dropdown-menu">
              <li><Link to="/about/about">Leaderships</Link></li>
              <li><Link to="/about/aboutrajkot">About Rajkot</Link></li>
              <li><Link to="/about/why-marwadi">Why Marwadi</Link></li>
              <li><Link to="/about/hero-section">Status & Accreditation</Link></li>
              <li><Link to="/about/three-layer-education">Three Layer Education</Link></li>
              <li><Link to="/about/skill-development-report">Skill Development Initiatives</Link></li>

            </ul>
          </li>

          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
