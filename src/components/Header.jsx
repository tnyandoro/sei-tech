import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import seiLogo from '../assets/images/sei_logo.png'; // Import the logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bespokeOpen, setBespokeOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50 font-poppins">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={seiLogo} alt="Logo" className="h-20" /> {/* Enlarged logo by 100% */}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-green-500 font-medium text-xl">
          Home
        </a>
        <div className="relative">
          <button
            onClick={() => setBespokeOpen(!bespokeOpen)}
            className="hover:text-green-500 flex items-center font-medium text-xl"
          >
            Bespoke Training {bespokeOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {bespokeOpen && (
            <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                CDM Awareness
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Manual Handling
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Fire Warden Course
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Abrasive Wheels
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Emergency Procedure
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Asbestos Awareness
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setComplianceOpen(!complianceOpen)}
            className="hover:text-green-500 flex items-center font-medium text-xl"
          >
            Compliance Services {complianceOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {complianceOpen && (
            <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Fire Risk Assessments
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Health and Safety GAP Audit
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Health and Safety Procedure and Policy
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Risk Assessment Services
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Face Fit
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-green-500 hover:text-white font-medium text-lg">
                Site Inspections
              </a>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-green-500 font-medium text-xl">
          Upcoming Trainings
        </a>
        <a href="#" className="hover:text-green-500 font-medium text-xl">
          About Us E-learning
        </a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-4 md:hidden">
          <a href="#" className="block py-2 hover:text-green-500 font-medium text-xl">
            Home
          </a>
          <div>
            <button
              onClick={() => setBespokeOpen(!bespokeOpen)}
              className="hover:text-green-500 flex items-center w-full font-medium text-xl"
            >
              Bespoke Training {bespokeOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {bespokeOpen && (
              <div className="ml-4 mt-2">
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  CDM Awareness
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Manual Handling
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Fire Warden Course
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Abrasive Wheels
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Emergency Procedure
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Asbestos Awareness
                </a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setComplianceOpen(!complianceOpen)}
              className="hover:text-green-500 flex items-center w-full font-medium text-xl"
            >
              Compliance Services {complianceOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {complianceOpen && (
              <div className="ml-4 mt-2">
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Fire Risk Assessments
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Health and Safety GAP Audit
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Health and Safety Procedure and Policy
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Risk Assessment Services
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Face Fit
                </a>
                <a href="#" className="block py-2 hover:text-green-500 font-medium text-lg">
                  Site Inspections
                </a>
              </div>
            )}
          </div>
          <a href="#" className="block py-2 hover:text-green-500 font-medium text-xl">
            Upcoming Trainings
          </a>
          <a href="#" className="block py-2 hover:text-green-500 font-medium text-xl">
            About Us E-learning
          </a>
          <div className="flex flex-col mt-4">
            <button className="text-white mb-2 font-medium text-xl">Login</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded font-medium text-xl">
              Create an Account
            </button>
          </div>
        </div>
      )}

      {/* Account Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-white font-medium text-xl">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded font-medium text-xl">
          Create an Account
        </button>
      </div>
    </header>
    
  );
};

export default Header;