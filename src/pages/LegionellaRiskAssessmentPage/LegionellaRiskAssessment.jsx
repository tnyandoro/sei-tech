import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const LegionellaRiskAssessment = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6 pt-24 md:pt-28">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            💧 Legionella Risk Assessment
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Legionella bacteria pose serious health risks, including Legionnaires' disease. Our comprehensive risk assessment 
            services ensure compliance with **HSE guidelines** and protect your workforce and customers.
          </p>

          {/* Existing content remains unchanged */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🦠 What Is Legionella?</h2>
          <p className="text-gray-300 mb-4">
            Legionella is a bacteria found in water systems that, under certain conditions, can multiply to dangerous levels. 
            If inhaled through water droplets, it can cause **Legionnaires' disease**, a severe form of pneumonia.
          </p>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🔍 Why Do You Need an Assessment?</h2>
          <p className="text-gray-300 mb-4">
            Under the **Health and Safety at Work Act 1974** and **ACOP L8**, employers and landlords must assess and control 
            the risk of Legionella in water systems. Failure to comply can lead to serious legal and health consequences.
          </p>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📝 Our Assessment Process</h2>
          <ul className="text-gray-300 mb-4 list-disc list-inside">
            <li>Site survey to identify potential risks.</li>
            <li>Water temperature checks and system inspection.</li>
            <li>Sampling and laboratory testing.</li>
            <li>Compliance documentation and reporting.</li>
            <li>Recommendations for risk control and system maintenance.</li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">✅ Compliance and Safety</h2>
          <p className="text-gray-300 mb-4">
            Our expert team ensures that your premises meet **HSE and ACOP L8 regulations**, helping you stay compliant and 
            safeguarding public health.
          </p>

          {/* Book Now Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={openModal}
              className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition-colors duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <BookingForm 
          course="Legionella Risk Assessment" 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default LegionellaRiskAssessment;