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

  const commonLinks = [
    { to: "/upcomings", text: "Upcoming Trainings" },
    { to: "/about-us", text: "About Us" },
    { to: "/products", text: "Products" },
    { to: "/e-learning", text: "E-Learning" },
    { to: "/testimonials", text: "Testimonials" },
    { to: "/contact-us", text: "Contact Us" },
  ];

  const trainingItems = [
    { to: "/cdm-awareness", text: "CDM Awareness" },
    { to: "/manual-handling-training", text: "Manual Handling Training" },
    { to: "/fire-warden-course", text: "Fire Warden Course" },
    { to: "/abrasive-wheels-training", text: "Abrasive Wheels Training" },
    { to: "/emergency-evacuation-training", text: "Emergency Evacuation Training" },
    { to: "/asbestos-awareness", text: "Asbestos Awareness" },
    { to: "/risk-assessment-services", text: "Risk Assessment Services" },
    { to: "/incident-investigation", text: "Incident Investigation" },
    { to: "/working-at-height", text: "Working at Height" },
    { to: "/environmental-awareness-training", text: "Environmental Awareness Training" },
    { to: "/ladder-inspection", text: "Ladder Inspection" },

  ];

  const complianceItems = [
    { to: "/fire-risk-assessments", text: "Fire Risk Assessments" },
    { to: "/health-safety-gap-audit", text: "Health and Safety GAP Audit" },
    { to: "/health-safety-compliance", text: "Health and Safety Procedure and Policy" },
    { to: "/risk-assessment-services", text: "Risk Assessment Services" },
    { to: "/face-fit", text: "Face Fit" },
    { to: "/site-inspections", text: "Site Inspections" },
    { to: "/DSE-assessments", text: "DSE Assessments" },
    { to: "/systems-iso-management", text: "Systems/ISO Management" },
    { to: "/Workplace-Audits", text: "Workplace Audits" },
    { to: "/Legionella-Risk-Assessment", text: "Legionella"},
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-4 sm:px-6 py-4 flex justify-between items-center z-50 font-poppins">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <Link to="/">
          <img src={seiLogo} alt="Logo" className="h-16 md:h-20 cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center flex-grow justify-between max-w-7xl mx-auto px-4">
        <div className="flex space-x-4 xl:space-x-6">
          <Link to="/" className="hover:text-green-500 font-medium text-sm">
            Home
          </Link>

          {/* Bespoke Training Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('bespoke')}
              className="hover:text-green-500 flex items-center font-medium text-sm"
            >
              Training {activeDropdown === 'bespoke' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeDropdown === 'bespoke' && (
              <div className="absolute left-0 bg-black text-white mt-2 py-2 w-56 rounded shadow-lg">
                {trainingItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-green-500 hover:text-white text-sm"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Compliance Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('compliance')}
              className="hover:text-green-500 flex items-center font-medium text-sm"
            >
              Compliance Services {activeDropdown === 'compliance' ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeDropdown === 'compliance' && (
              <div className="absolute left-0 bg-black text-white mt-2 py-2 w-56 rounded shadow-lg">
                {complianceItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-green-500 hover:text-white text-sm"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Common Links */}
          {commonLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-green-500 font-medium text-sm">
              {link.text}
            </Link>
          ))}
        </div>

        {/* Desktop Account Buttons */}
        <div className="flex items-center space-x-4 ml-4">
          <Link to="/login" className="hover:text-green-500 font-medium text-sm">
            Login
          </Link>
          <Link to="/register">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-medium text-sm whitespace-nowrap">
              Register For a Course
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <Link to="/login" className="hover:text-green-500 text-sm">
          Login
        </Link>
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden mt-16">
          <div className="h-full overflow-y-auto px-6 py-4">
            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              <Link to="/" className="block py-2 hover:text-green-500 text-lg" onClick={toggleMobileMenu}>
                Home
              </Link>

              {/* Bespoke Training Mobile Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('bespoke')}
                  className="w-full flex justify-between items-center py-2 hover:text-green-500 text-lg"
                >
                  <span>Training</span>
                  {activeDropdown === 'bespoke' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeDropdown === 'bespoke' && (
                  <div className="ml-4 space-y-2">
                    {trainingItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2 hover:text-green-500 text-base"
                        onClick={toggleMobileMenu}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Compliance Services Mobile Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('compliance')}
                  className="w-full flex justify-between items-center py-2 hover:text-green-500 text-lg"
                >
                  <span>Compliance Services</span>
                  {activeDropdown === 'compliance' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeDropdown === 'compliance' && (
                  <div className="ml-4 space-y-2">
                    {complianceItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2 hover:text-green-500 text-base"
                        onClick={toggleMobileMenu}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Common Mobile Links */}
              {commonLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-2 hover:text-green-500 text-lg"
                  onClick={toggleMobileMenu}
                >
                  {link.text}
                </Link>
              ))}

              {/* Mobile Register Button */}
              <Link to="/register" className="block w-full" onClick={toggleMobileMenu}>
                <button className="w-full bg-green-500 text-white px-4 py-3 rounded hover:bg-green-600 font-medium text-lg mt-4">
                  Register For a Course
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;