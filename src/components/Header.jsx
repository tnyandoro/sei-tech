import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import seiLogo from '../assets/images/sei_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50 font-poppins">
      {/* Logo Section - Clickable to Home */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src={seiLogo} alt="Logo" className="h-20 cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-green-500 font-medium text-sm">
          Home
        </Link>

        {/* Bespoke Training */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('bespoke')}
            className="hover:text-green-500 flex items-center font-medium text-sm"
          >
            Training {activeDropdown === 'bespoke' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === 'bespoke' && (
            <div className="absolute left-0 bg-black text-white mt-2 py-2 w-56 rounded shadow-lg">
              {["CDM Awareness", "Manual Handling", "Fire Warden Course", "Abrasive Wheels", "Emergency Procedure", "Asbestos Awareness"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Compliance Services */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('compliance')}
            className="hover:text-green-500 flex items-center font-medium text-sm"
          >
            Compliance Services {activeDropdown === 'compliance' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === 'compliance' && (
            <div className="absolute left-0 bg-black text-white mt-2 py-2 w-56 rounded shadow-lg">
              {["Fire Risk Assessments", "Health and Safety GAP Audit", "Health and Safety Procedure and Policy", "Risk Assessment Services", "Face Fit", "Site Inspections"].map((item) => (
                <a key={item} href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#" className="hover:text-green-500 font-medium text-sm">Upcoming Trainings</a>
        <Link to="/about-us" className="hover:text-green-400">About Us</Link>
        <Link to="/products" className="hover:text-green-400">Products</Link>
        <Link to="/e-learning" className="hover:text-green-400">E-Learning</Link>
        <Link to="/testimonials" className="hover:text-green-400">Testimonial</Link>
        <Link to="/contact-us" className="hover:text-green-400">Contact Us</Link>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-4 md:hidden h-screen overflow-y-auto">
          <Link to="/" className="block py-2 hover:text-green-500 font-medium text-sm">
            Home
          </Link>

          {/* Bespoke Training (Mobile) */}
          <div>
            <button onClick={() => toggleDropdown('bespoke')} className="hover:text-green-500 flex items-center w-full font-medium text-sm">
              Bespoke Training {activeDropdown === 'bespoke' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeDropdown === 'bespoke' && (
              <div className="ml-4 mt-2">
                {["CDM Awareness", "Manual Handling", "Fire Warden Course", "Abrasive Wheels", "Emergency Procedure", "Asbestos Awareness"].map((item) => (
                  <a key={item} href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Compliance Services (Mobile) */}
          <div>
            <button onClick={() => toggleDropdown('compliance')} className="hover:text-green-500 flex items-center w-full font-medium text-sm">
              Compliance Services {activeDropdown === 'compliance' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeDropdown === 'compliance' && (
              <div className="ml-4 mt-2">
                {["Fire Risk Assessments", "Health and Safety GAP Audit", "Health and Safety Procedure and Policy", "Risk Assessment Services", "Face Fit", "Site Inspections"].map((item) => (
                  <a key={item} href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* <a href="#" className="block py-2 hover:text-green-500 font-medium text-sm">Upcoming Trainings</a> */}
          {/* <Link to="/products" className="hover:text-green-500 font-medium text-sm">Products</Link> */}
          {/* <Link to="/e-learning" className="hover:text-green-400">E-Learning</Link> */}
          {/* <a href="#" className="block py-2 hover:text-green-500 font-medium text-sm">Testimonials</a> */}
          {/* <Link to="/about-us" className="hover:text-green-400">About Us</Link> */}
          {/* <a href="#" className="block py-2 hover:text-green-500 font-medium text-sm">Contacts</a> */}
        </div>
      )}

      {/* Account Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login" className="hover:text-green-500 font-medium text-sm">
          Login
        </Link>
        <Link to="/register" className="hover:text-green-500 font-medium text-sm">
          Register For a Course
        </Link>
      </div>
    </header>
  );
};

export default Header;
