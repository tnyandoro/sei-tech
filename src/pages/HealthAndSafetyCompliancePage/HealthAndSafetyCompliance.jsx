import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const HealthAndSafetyCompliance = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6 pt-24 md:pt-28">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            🏥 Health & Safety Compliance Services
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Elevating workplace safety isn't just a legal obligation - it's essential for 
            protecting employees and maintaining operational success. At SEI.TECH International, 
            we provide expert guidance to help organizations stay compliant and safe.
          </p>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            ⚖️ Legal Requirements
          </h2>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>
              <strong>5+ Employees:</strong> Written health and safety policy is legally required
            </li>
            <li>
              <strong>Fewer than 5 Employees:</strong> Written policy not mandatory but highly recommended
            </li>
          </ul>

          <h3 className="text-green-400 text-lg font-semibold mt-4 mb-2">
            Employee Responsibilities
          </h3>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Policies must be communicated during employee induction</li>
            <li>Reinforced through toolbox talks and refresher training</li>
            <li>Updated and shared whenever policy changes occur</li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            📝 Crafting an Effective Policy
          </h2>
          <p className="text-gray-300 mb-4">
            Under Section 2(3) of the Health and Safety at Work Act, policies must:
          </p>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Outline the employer's general health and safety policy</li>
            <li>Describe organizational arrangements for implementation</li>
            <li>Be reviewed and updated regularly</li>
          </ul>
          
          <div className="text-gray-300 mt-4">
            <p className="mb-2">Effective policies should be:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Concise and written in clear language</li>
              <li>Tailored to specific business operations</li>
              <li>Displayed prominently in the workplace</li>
              <li>Signed by the highest-ranking executive</li>
            </ul>
          </div>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            ⚠️ Why It Matters
          </h2>
          <p className="text-gray-300 mb-4">
            In case of workplace accidents, your health and safety policy will be the first document reviewed. 
            Maintaining an updated, comprehensive policy is crucial for:
          </p>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Demonstrating compliance</li>
            <li>Reducing legal liabilities</li>
            <li>Protecting employee well-being</li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            🛡️ Our Health & Safety Advisor Service
          </h2>
          <p className="text-gray-300 mb-4">
            Compliant with Regulation 7 of The Management of Health and Safety at Work Regulations 1999:
          </p>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>
              <strong>Retained Advisor:</strong> Monthly access to expert guidance
            </li>
            <li>
              <strong>Certification Support:</strong> Official documentation and personnel CVs
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Dedicated point of contact for bespoke strategies
            </li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            ✅ Let's Build a Safer Workplace Together
          </h2>
          <p className="text-gray-300 text-center mb-6">
            From policy creation to ongoing advisory support, we help you navigate workplace safety challenges 
            while ensuring regulatory compliance.
          </p>

          <div className="flex justify-center mt-8">
            <button 
              onClick={openModal}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
            >
              📅 Book Consultation
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookingForm 
          course="Health & Safety Compliance Services" 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HealthAndSafetyCompliance;