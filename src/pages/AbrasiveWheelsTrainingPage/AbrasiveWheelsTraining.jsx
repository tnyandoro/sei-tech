import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm';

const AbrasiveWheelsTraining = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🛠️ Abrasive Wheels Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Gain the expertise needed to safely operate and maintain abrasive wheels in the workplace. This course focuses on the safe use, handling, and maintenance of abrasive wheels, ensuring compliance with the Provision and Use of Work Equipment Regulations 1998 (PUWER).
        </p>

        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Introduction to PUWER:</strong> Understand the legal requirements and responsibilities for using abrasive wheels.</li>
          <li>✅ <strong>Wheel Types and Selection:</strong> Learn about various types of abrasive wheels, their applications, and how to select the right one for the job.</li>
          <li>✅ <strong>Health and Safety Measures:</strong> Explore the risks of HAVS (Hand-Arm Vibration Syndrome) and noise exposure, and the importance of PPE.</li>
          <li>✅ <strong>Wheel Mounting and Maintenance:</strong> Master techniques for dressing, mounting, and inspecting abrasive wheels.</li>
          <li>✅ <strong>Safe Operations:</strong> Identify and mitigate potential hazards during the use of abrasive wheels.</li>
          <li>✅ <strong>AI-Powered Simulations:</strong> Experience interactive scenarios for practical understanding and skill-building.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          At SEI.TECH International, we combine industry expertise with advanced training methodologies to deliver impactful learning experiences.
        </p>

        <div className="flex justify-center mt-8">
          <button 
            onClick={openModal}
            className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition-colors duration-200"
          >
            Book Now
          </button>
        </div>

        {/* Modal will only render when isModalOpen is true */}
        {isModalOpen && (
          <BookingForm 
            onClose={closeModal} 
            course="Abrasive Wheels Training" 
          />
        )}
      </div>
    </div>
  );
};

export default AbrasiveWheelsTraining;