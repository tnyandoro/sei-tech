import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const IncidentInvestigationCourse = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🕵️ Incident Investigation & Reporting
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Master the art of uncovering the root causes of workplace incidents with our Incident Investigation and Reporting Course.
          Equip yourself with the skills to analyze, report, and prevent future occurrences effectively.
        </p>

        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Principles of Incident Investigation:</strong> Learn the step-by-step process of conducting thorough investigations.</li>
          <li>✅ <strong>Data Collection and Analysis:</strong> Develop expertise in gathering evidence, interviewing witnesses, and analyzing findings.</li>
          <li>✅ <strong>Root Cause Analysis Techniques:</strong> Utilize proven methodologies such as the Fishbone Diagram and the 5 Whys for identifying underlying causes.</li>
          <li>✅ <strong>AI-Powered Case Simulations:</strong> Engage with real-world scenarios enhanced by AI for realistic training experiences.</li>
          <li>✅ <strong>Effective Reporting:</strong> Craft clear and actionable incident reports to drive organizational improvements.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Who Should Take This Course?
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ Union and Safety Representatives</li>
          <li>✅ Incident Response Teams</li>
          <li>✅ Supervisors and Managers</li>
          <li>✅ Health and Safety Officers</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Key Benefits
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Enhanced Investigative Skills:</strong> Build confidence in conducting effective investigations.</li>
          <li>✅ <strong>Actionable Insights:</strong> Learn to identify and mitigate risks to prevent future incidents.</li>
          <li>✅ <strong>AI-Driven Training:</strong> Gain hands-on experience with advanced investigative tools.</li>
          <li>✅ <strong>Certification:</strong> Earn a recognized certificate to demonstrate your expertise in incident management.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          At SEI.TECH International, our Incident Investigation Course combines expert guidance with AI-driven tools to provide a unique
          and impactful learning experience. Take the first step toward enhancing workplace safety and compliance with our tailored program.
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

        {/* Booking Form Modal */}
        {isModalOpen && (
          <BookingForm 
            course="Incident Investigation & Reporting" 
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default IncidentInvestigationCourse;