import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const RiskAssessmentServices = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6 pt-24 md:pt-28">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            🛡️ Risk Assessment Services
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Ensuring the safety and well-being of your employees and others is not just good practice—it's a legal obligation. Let us help you identify, evaluate, and manage risks effectively to create a safer workplace.
          </p>

          {/* Existing content remains unchanged */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📋 What Is a Risk Assessment?</h2>
          <p className="text-gray-300 mb-4">
            A risk assessment is a structured process that identifies potential hazards in your workplace, evaluates their risks, and establishes control measures to protect everyone from harm. It is a legal requirement for employers, especially those with five or more employees, and is critical to maintaining a safe and compliant working environment.
          </p>

          {/* Other sections remain the same... */}

          {/* Call to Action */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🤝 Let’s Work Together</h2>
          <p className="text-gray-300 mb-6">
            Partner with us for effective risk assessments tailored to your needs. Ensure compliance, protect your employees, and maintain a safer workplace.
          </p>
          
          {/* Updated Book Now Button */}
          <div className="text-center">
            <button 
              onClick={openModal}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              📅 Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <BookingForm 
          course="Risk Assessment Services" 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default RiskAssessmentServices;