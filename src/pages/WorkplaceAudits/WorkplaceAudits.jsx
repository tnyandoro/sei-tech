import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const WorkplaceAudits = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🏢 Workplace Audits
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Regardless of your workspace, we can carry out audits or inspections on your behalf. Our expert approach ensures compliance, efficiency, and a safer working environment.
        </p>

        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Your Legal Duty
        </h2>
        <p className="text-gray-300 text-center mb-6">
          As an employer, under the Health and Safety at Work Act 1974, you have a legal duty to provide a safe working environment and systems of work. Regular audits help ensure compliance and protect your workforce.
        </p>

        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Advantages of Our Audit Services
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Expertise:</strong> Our team knows exactly what to look for, reducing audit time and improving accuracy.</li>
          <li>✅ <strong>Efficiency:</strong> Our approach minimizes disruption while maximizing safety compliance.</li>
          <li>✅ <strong>Clear Reporting:</strong> Receive an easy-to-read report outlining key findings and necessary actions.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Frequency of Audits
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Regular audits should be conducted annually or when significant changes occur, such as moving premises or introducing vulnerable individuals into the workplace.
        </p>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Our Experience
        </h2>
        <p className="text-gray-300 text-center">
          With experience across diverse sectors—including construction, offices, manufacturing, and storage—we simplify compliance and enhance workplace safety and efficiency.
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

      {/* Booking Form Modal */}
      {isModalOpen && (
        <BookingForm 
          course="Workplace Audits" 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default WorkplaceAudits;