import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm';

const RiskAssessmentServices = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-24 md:pt-28">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg mt-6">
                <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
                    🛡️ Risk Assessment Services
                </h1>
                <p className="text-gray-300 text-center mb-6">
                    Ensuring the safety and well-being of your employees is both a legal obligation and 
                    a crucial step in creating a safer workplace environment through proper risk management.
                </p>

                {/* What is a Risk Assessment? */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    What is a Risk Assessment?
                </h2>
                <p className="text-gray-300 mb-4">
                    A systematic process to identify potential hazards in your workplace, evaluate associated risks, 
                    and implement control measures to ensure safety and compliance.
                </p>

                {/* Assessment Process */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Assessment Process
                </h2>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>Identify hazards in the workplace</li>
                    <li>Determine who might be harmed and how</li>
                    <li>Evaluate risks and decide on precautions</li>
                    <li>Record findings and implement control measures</li>
                    <li>Review and update assessments regularly</li>
                </ul>

                {/* Legal Requirements */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Your Legal Duty
                </h2>
                <p className="text-gray-300 mb-4">
                    Under the Health and Safety at Work Act 1974 and Management Regulations 1999, employers must:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>Identify potential workplace hazards</li>
                    <li>Assess likelihood and severity of harm</li>
                    <li>Implement measures to eliminate or control risks</li>
                </ul>

                {/* Our Expertise */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Our Expertise
                </h2>
                <p className="text-gray-300 mb-4">
                    Specializing in comprehensive risk assessments across various industries, we offer:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>Tailored hazard identification strategies</li>
                    <li>Actionable risk reduction recommendations</li>
                    <li>Compliance-focused assessment solutions</li>
                </ul>

                {/* Assessment Types */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Assessment Types
                </h2>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>COSHH (Control of Substances Hazardous to Health)</li>
                    <li>DSE (Display Screen Equipment)</li>
                    <li>Working at Height & Confined Spaces</li>
                    <li>Manual Handling Operations</li>
                    <li>DSEAR (Dangerous Substances and Explosive Atmospheres)</li>
                </ul>

                {/* DSEAR Assessments */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    DSEAR Assessments
                </h2>
                <p className="text-gray-300 mb-4">
                    Critical for workplaces handling dangerous substances, these assessments:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>Identify fire and explosion risks</li>
                    <li>Evaluate chemical hazard potential</li>
                    <li>Implement safety controls for hazardous materials</li>
                </ul>

                {/* Review Process */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Regular Reviews
                </h2>
                <p className="text-gray-300 mb-4">
                    Assessments should be updated:
                </p>
                <ul className="text-gray-300 list-disc pl-6 space-y-2">
                    <li>After significant operational changes</li>
                    <li>Following incidents or near-misses</li>
                    <li>When current assessments expire</li>
                </ul>

                {/* Call to Action */}
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={openModal}
                        className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition-colors duration-200"
                    >
                        Book Consultation
                    </button>
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