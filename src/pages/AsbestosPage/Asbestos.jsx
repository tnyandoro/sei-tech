import React, { useState } from "react";
import BookingForm from "../../components/BookingForm";

const AsbestosAwareness = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenBooking = () => {
    setShowForm(true);
  };

  const handleCloseBooking = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🏗️ Asbestos Awareness Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Protect yourself and your team by gaining critical knowledge about asbestos, its dangers,
          and the necessary precautions to work safely in environments where it may be present.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3">✅ Course Highlights</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Understanding Asbestos: Learn about its properties, types, and common uses in construction.</li>
          <li>Health Risks: Explore the dangers of exposure, including mesothelioma, asbestosis, and lung cancer.</li>
          <li>Identifying Asbestos: Recognize where asbestos is commonly found and how to safely identify hazards.</li>
          <li>Legislation and Compliance: Stay updated on the Control of Asbestos Regulations (CAR) 2012.</li>
          <li>Emergency Procedures: Learn what to do if asbestos is disturbed or discovered on-site.</li>
          <li>Interactive Learning: Utilize AI-powered simulations for hands-on training.</li>
        </ul>

        {/* Who Should Take This Course */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">
          👷‍♂️ Who Should Take This Course?
        </h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Construction workers</li>
          <li>Demolition crews</li>
          <li>Maintenance teams</li>
          <li>Supervisors and project managers</li>
          <li>Health and safety officers</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🎯 Key Benefits</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Risk Reduction: Learn how to minimize risks associated with asbestos exposure.</li>
          <li>Regulatory Compliance: Ensure work meets all legal and safety requirements.</li>
          <li>Enhanced Safety Culture: Promote awareness and safe practices across your workforce.</li>
          <li>Practical Skills: Gain hands-on learning through AI-enhanced simulations.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">💡 Why Choose SEI.TECH?</h2>
        <p className="text-gray-300">
          SEI.TECH International provides cutting-edge training programs that combine expert knowledge
          with innovative learning technologies. Our Asbestos Awareness course equips you with the skills
          and confidence to manage asbestos risks effectively.
        </p>

        {/* Certification */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📜 Certification</h2>
        <p className="text-gray-300">
          Participants will receive a certificate of completion, demonstrating their understanding of
          asbestos hazards and compliance with industry standards.
        </p>

        {/* Book Now Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleOpenBooking}
            className="bg-green-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-green-600"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showForm && <BookingForm course="Asbestos Awareness" onClose={handleCloseBooking} />}
    </div>
  );
};

export default AsbestosAwareness;
