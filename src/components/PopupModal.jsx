import React, { useState, useEffect } from 'react';
import seiLogo from '../assets/images/SEI_TECH-logo.png'; // Import the logo

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Close the modal when the close button is clicked
  const handleClose = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-start z-[100] pt-20">
      {/* Modal Content */}
      <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={seiLogo}
            alt="SEI Tech Logo"
            className="h-24" // Increased logo size by 50% (from h-16 to h-24)
          />
        </div>

        {/* Content */}
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to SEI.TECH International</h1>
          <p className="mb-4">
            Safety Ecosphere Innovation (SEI Tech) is a leader in delivering affordable, practical, and straightforward Health & Safety and Environmental Engineering solutions. With bases in Kent, UK and South Africa, we proudly serve businesses across various sectors and locations.
          </p>
          <p className="mb-4">
            From supporting small local businesses to partnering with large national enterprises, SEI Tech addresses diverse challenges, ranging from basic workplace safety needs to complex risk management. We are your trusted partner in ensuring compliance and operational excellence.
          </p>
          <p className="mb-4">
            Our dedicated team of consultants collaborates closely with clients to deliver tailored solutions that meet legal obligations. This allows you to focus on what matters most—growing your business.
          </p>
          <p className="mb-4">
            At SEI Tech, we are at the forefront of innovation, integrating cutting-edge technologies, including AI-driven solutions and state-of-the-art safety systems. Our commitment to sustainable, efficient, and legally compliant practices ensures we align with your business goals and protect your most valuable assets—your people and the environment.
          </p>
          <p className="mb-6">
            Together, we foster operational excellence, uphold the highest ethical standards, and build lasting partnerships with businesses worldwide.
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClose}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;