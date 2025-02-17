import React from "react";

const LadderInspectionTraining = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🏋️ Ladder Inspection Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Ensure safety and compliance with our comprehensive Ladder Inspection Training. This course equips you with the essential 
          knowledge and practical skills to assess, maintain, and use ladders safely in the workplace.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Understanding Ladder Types:</strong> Gain insights into different ladder types, their uses, and limitations.</li>
          <li>✅ <strong>Inspection Procedures:</strong> Learn step-by-step techniques for identifying damage, wear, and potential hazards.</li>
          <li>✅ <strong>Maintenance Best Practices:</strong> Master the dos and don’ts of ladder care to extend their lifespan and ensure safety.</li>
          <li>✅ <strong>Regulatory Compliance:</strong> Familiarize yourself with OSHA and industry standards for ladder safety.</li>
          <li>✅ <strong>AI-Enhanced Simulations:</strong> Interactive scenarios using AI to simulate real-world inspection challenges.</li>
        </ul>

        {/* Who Should Take This Course? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Who Should Take This Course?
        </h2>
        <p className="text-gray-300 mb-3 text-center">
          This training is essential for employees, leaders, and teams striving to integrate safety into their workplace practices. Ideal for:
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>✅ Health and Safety Officers</li>
          <li>✅ Maintenance Staff</li>
          <li>✅ Construction Workers</li>
          <li>✅ Supervisors and Managers overseeing ladder use</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Key Benefits
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Enhanced Safety:</strong> Reduce workplace accidents with thorough ladder inspections.</li>
          <li>✅ <strong>Practical Skills:</strong> Hands-on training to confidently inspect and maintain ladders.</li>
          <li>✅ <strong>Compliance Assurance:</strong> Meet legal and industry requirements with certified knowledge.</li>
          <li>✅ <strong>Certification:</strong> Receive an accredited certificate upon successful completion.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          At SEI.TECH International, we combine expert-led instruction with innovative AI tools to create a dynamic and effective 
          training experience. Our Ladder Inspection Course ensures your team is equipped with the knowledge and skills to maintain 
          safety and compliance.
        </p>
      </div>
    </div>
  );
};

export default LadderInspectionTraining;
