import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm';

const WorkingAtHeight = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-24 md:pt-28">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg mt-6">
                <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
                    🏗️ Working at Heights Training
                </h1>
                <p className="text-gray-300 text-center mb-6">
                    Elevate your safety standards with our comprehensive Working at Heights Training. 
                    Designed for individuals and teams working in elevated environments, this course equips 
                    you with the knowledge and skills needed to minimize risks and ensure safe operations.
                </p>

                {/* Course Highlights */}
                <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
                    Course Highlights
                </h2>
                <ul className="text-gray-300 space-y-2">
                    <li>✅ <strong>Legislation Overview:</strong> Understand the Working at Height Regulations and their implications for workplace safety.</li>
                    <li>✅ <strong>Risk Assessment Techniques:</strong> Learn to identify and mitigate risks associated with working at heights.</li>
                    <li>✅ <strong>Equipment Safety:</strong> Hands-on training with ladders, scaffolding, MEWPs, and safety harnesses.</li>
                    <li>✅ <strong>Emergency Procedures:</strong> Prepare for emergencies with evacuation and rescue training.</li>
                    <li>✅ <strong>AI-Powered Learning:</strong> Experience cutting-edge simulations for real-life height-related scenarios.</li>
                </ul>

                {/* Who Should Take This Course? */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Who Should Take This Course?
                </h2>
                <ul className="text-gray-300 space-y-2">
                    <li>✅ Scaffolding and rigging personnel</li>
                    <li>✅ Supervisors overseeing height-related activities</li>
                    <li>✅ Safety officers and compliance managers</li>
                </ul>

                {/* Key Benefits */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Key Benefits
                </h2>
                <ul className="text-gray-300 space-y-2">
                    <li>✅ <strong>Enhanced Safety:</strong> Equip your team with practical skills to prevent falls and accidents.</li>
                    <li>✅ <strong>Regulatory Compliance:</strong> Ensure adherence to height safety regulations and standards.</li>
                    <li>✅ <strong>Practical Application:</strong> Hands-on training with modern equipment and AI simulations.</li>
                    <li>✅ <strong>Boosted Confidence:</strong> Empower your workforce to operate safely and efficiently at heights.</li>
                </ul>

                {/* Why Choose SEI.TECH? */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Why Choose SEI.TECH?
                </h2>
                <p className="text-gray-300 text-center mb-6">
                    At SEI.TECH International, we leverage the latest technologies and industry expertise 
                    to deliver unparalleled training experiences. Our Working at Heights Training combines 
                    theoretical knowledge with practical applications, ensuring a safer work environment 
                    for your team.
                </p>

                {/* Certification */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
                    Certification
                </h2>
                <p className="text-gray-300 text-center mb-6">
                    Upon successful completion, participants will receive an industry-recognized certificate 
                    that validates their ability to work safely at heights.
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
                    course="Working at Heights Training" 
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default WorkingAtHeight;