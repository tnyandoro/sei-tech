import React from "react";

const ManualHandlingTraining = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🏗️ Manual Handling Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Equip yourself with the essential knowledge and practical skills to minimize risks and ensure safety during manual handling tasks.
          This training combines cutting-edge technology with expert insights to provide a comprehensive learning experience.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Ergonomics and Body Mechanics:</strong> Understand how to reduce strain and avoid injury through proper posture and movement.</li>
          <li>✅ <strong>Risk Assessment Techniques:</strong> Learn to identify hazards and assess the risks associated with manual handling.</li>
          <li>✅ <strong>Safe Lifting Techniques:</strong> Practical training on lifting, carrying, pushing, and pulling objects safely.</li>
          <li>✅ <strong>AI-Powered Simulations:</strong> Experience real-world scenarios through AI-driven simulations to reinforce safe practices.</li>
          <li>✅ <strong>Legal and Regulatory Compliance:</strong> Stay up-to-date with manual handling regulations and employer responsibilities.</li>
        </ul>

        {/* Who Should Take This Course */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Who Should Take This Course?
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ Employees involved in physical labor or material handling</li>
          <li>✅ Supervisors and managers overseeing manual handling tasks</li>
          <li>✅ Health and Safety Officers aiming to improve workplace practices</li>
          <li>✅ Anyone seeking to enhance their manual handling safety skills</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Key Benefits
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Reduce Workplace Injuries:</strong> Minimize risks and enhance safety for employees engaged in manual tasks.</li>
          <li>✅ <strong>Boost Productivity:</strong> Efficient handling techniques lead to fewer accidents and downtime.</li>
          <li>✅ <strong>Compliance Assurance:</strong> Meet legal standards with comprehensive training and certification.</li>
          <li>✅ <strong>Hands-On Learning:</strong> Interactive sessions to build confidence in applying safe manual handling practices.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          SEI.TECH International leverages advanced AI tools and experienced trainers to create engaging and impactful learning experiences.
          Our Manual Handling Course ensures your team is equipped with the skills and knowledge to handle workplace challenges safely and efficiently.
        </p>

        {/* Certification */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Certification
        </h2>
        <p className="text-gray-300 text-center">
          Participants will receive a recognized certification upon successful completion, detailing the skills and knowledge gained during the course.
        </p>
      </div>
    </div>
  );
};

export default ManualHandlingTraining;
