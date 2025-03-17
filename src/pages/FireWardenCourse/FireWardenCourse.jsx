import React, { useState } from "react";
import BookingForm from '../../components/BookingForm';

const FireWardenCourse = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🔥 Fire Warden Course
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Be the first line of defense in fire safety with our comprehensive Fire Warden Training. This course equips you
          with the skills and knowledge to ensure workplace fire safety and emergency preparedness.
        </p>

        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Fire Safety Fundamentals:</strong> Understand fire chemistry, common causes, and preventative measures.</li>
          <li>✅ <strong>Emergency Response Planning:</strong> Learn evacuation procedures and how to coordinate with emergency services.</li>
          <li>✅ <strong>Practical Use of Fire Equipment:</strong> Get hands-on experience with fire extinguishers and safety devices.</li>
          <li>✅ <strong>AI-Powered Simulation Tools:</strong> Train using AI-enhanced fire scenarios for realistic and impactful learning.</li>
          <li>✅ <strong>Regulatory Compliance:</strong> Gain insights into fire safety laws and standards to ensure your organization meets compliance requirements.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Who Should Take This Course?
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ Designated Fire Wardens</li>
          <li>✅ Health and Safety Officers</li>
          <li>✅ Team Leaders and Supervisors</li>
          <li>✅ Employees working in high-risk environments</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Key Benefits
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Enhanced Safety Knowledge:</strong> Develop a deep understanding of fire risks and preventive measures.</li>
          <li>✅ <strong>Confidence in Emergencies:</strong> Gain the skills to act decisively during fire emergencies.</li>
          <li>✅ <strong>AI-Driven Learning:</strong> Experience advanced, interactive training modules tailored to your needs.</li>
          <li>✅ <strong>Certification:</strong> Receive a professional Fire Warden Certificate to showcase your competence and commitment.</li>
        </ul>

        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          At SEI.TECH International, our Fire Warden Course integrates expert knowledge with cutting-edge AI tools to deliver
          impactful training. Ensure your workplace is prepared for fire emergencies with our trusted programs.
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
            course="Fire Warden Course" 
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default FireWardenCourse;