import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const HealthAndSafetyGAPAudit = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6 pt-24 md:pt-28">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            📊 Health & Safety GAP Audit
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Stay compliant and protect your workforce with our comprehensive Health & Safety GAP Audit Review. 
            At SEI.TECH International, we bring expertise and a fresh perspective to help SMEs meet legal obligations 
            and enhance workplace safety.
          </p>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            Why Is a GAP Audit Important?
          </h2>
          <p className="text-gray-300 mb-4">
            Under the Health and Safety at Work Act 1974, employers must provide safe working environments 
            and systems. Our audit identifies discrepancies between current practices and required standards.
          </p>
          
          <div className="text-gray-300 mb-6">
            <p className="mb-2">Our audit includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>✅ Review of safety management systems</li>
              <li>✅ Evaluation of procedures and documentation</li>
              <li>✅ Identification of compliance gaps</li>
              <li>✅ Actionable solutions for improvement</li>
            </ul>
          </div>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            Key Benefits
          </h2>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>✅ Enhanced regulatory compliance</li>
            <li>✅ Improved workplace safety culture</li>
            <li>✅ Prevention of costly fines and disruptions</li>
            <li>✅ Expert insights from safety professionals</li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            Our Process
          </h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <strong>Initial Consultation:</strong> Understand your operations and safety measures
            </div>
            <div>
              <strong>On-Site Audit:</strong> Detailed examination of workplace and documentation
            </div>
            <div>
              <strong>GAP Analysis Report:</strong> Clear report highlighting risks and recommendations
            </div>
            <div>
              <strong>Action Plan:</strong> Collaborative implementation of solutions
            </div>
          </div>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            Legal Requirements
          </h2>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Conduct regular risk assessments</li>
            <li>Identify and control workplace hazards</li>
            <li>Document and communicate safety procedures</li>
          </ul>

          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
            Why Choose SEI.TECH?
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Our retained solution ensures ongoing compliance through:
          </p>
          <ul className="text-gray-300 list-disc pl-6 space-y-2">
            <li>Regular policy reviews and updates</li>
            <li>Continuous monitoring of regulatory changes</li>
            <li>Proactive risk management strategies</li>
          </ul>

          <div className="flex justify-center mt-8">
            <button 
              onClick={openModal}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
            >
              📅 Book Audit Now
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookingForm 
          course="Health & Safety GAP Audit" 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HealthAndSafetyGAPAudit;