import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm'; // Update path as needed

const DSEAssessments = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4 pt-28 md:pt-32">
      <div className="w-full md:w-1/2 bg-gray-800 text-white p-8 rounded-lg shadow-lg space-y-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🖥️ DSE Assessments
        </h1>
        <p className="text-sm">
          Protect your employees from the health risks of working with display screen equipment (DSE). Our expert workstation assessments ensure compliance, comfort, and productivity.
        </p>

        {/* Existing sections remain unchanged */}
        <section>
          <h2 className="text-lg font-semibold mb-2">📌 Why Are DSE Assessments Important?</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Neck, shoulder, and back pain.</li>
            <li>Discomfort in arms, wrists, and hands.</li>
            <li>Eye strain and headaches.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">⚖️ Legal Responsibilities for Employers</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Conduct a DSE workstation assessment.</li>
            <li>Reduce risks and encourage regular breaks from DSE work.</li>
            <li>Provide eye tests upon request.</li>
            <li>Offer training and information to employees.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🏠 Supporting Remote and On-Site Workers</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Fixed workstation users.</li>
            <li>Mobile workers.</li>
            <li>Home workers.</li>
            <li>Hot-desking employees.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🛠️ Our Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Workstation setup reviews.</li>
            <li>Remote assessments.</li>
            <li>Guidance on ergonomics.</li>
            <li>Comprehensive action lists.</li>
            <li>Specialized support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🌟 Why Choose SEI.TECH International?</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Tailored solutions for SMEs.</li>
            <li>Simple and flexible services.</li>
            <li>Expert advice for on-site and remote employees.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">💻 Let’s Optimize Your Workstations</h2>
          <p className="text-sm">
            A well-designed workstation isn’t just about compliance—it’s about ensuring your team’s productivity and well-being.
          </p>
        </section>

        <button 
          onClick={openModal}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg text-sm transition-colors duration-200"
        >
          Book Now
        </button>

        {/* Booking Form Modal */}
        {isModalOpen && (
          <BookingForm 
            course="DSE Assessments" 
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default DSEAssessments;