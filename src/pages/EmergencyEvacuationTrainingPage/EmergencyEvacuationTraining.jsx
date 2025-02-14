import React from "react";

const EmergencyEvacuationTraining = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🚨 Emergency and Evacuation Procedure Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Be prepared to handle workplace emergencies with confidence and precision. 
          This course provides comprehensive training on emergency and evacuation procedures, 
          ensuring your team knows exactly what to do when faced with critical situations.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3">✅ Course Highlights</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Emergency Preparedness: Learn effective planning and response steps, including raising alarms and evacuation protocols.</li>
          <li>AI-Driven Simulations: Experience real-world scenarios through AI-powered simulations for enhanced response skills.</li>
          <li>Customized Content: Tailored modules for fire safety, workplace-specific evacuation, and high-risk environments.</li>
          <li>Legal Compliance: Stay up to date with the Regulatory Reform (Fire Safety) Order 2005 and compliance requirements.</li>
        </ul>

        {/* Who Should Take This Course */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">
          👷‍♂️ Who Should Take This Course?
        </h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Safety Managers and Coordinators</li>
          <li>Fire Wardens and Marshals</li>
          <li>Facility Managers</li>
          <li>HR and Compliance Officers</li>
          <li>All Employees (as part of a broader safety initiative)</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🎯 Key Benefits</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Enhanced Readiness: Equip your team with the knowledge and confidence to handle emergencies effectively.</li>
          <li>Regulatory Compliance: Ensure your organization meets all legal requirements and industry standards.</li>
          <li>AI-Augmented Training: Leverage advanced AI simulations for realistic, hands-on learning experiences.</li>
          <li>Certification: Receive a certificate of completion, showcasing your team’s commitment to safety and preparedness.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">💡 Why Choose SEI.TECH?</h2>
        <p className="text-gray-300">
          At SEI.TECH International, we combine cutting-edge AI technology with expert instruction to deliver
          impactful and engaging training. Our Emergency and Evacuation Procedure course is a critical investment
          in workplace safety, tailored to your specific needs and challenges.
        </p>
      </div>
    </div>
  );
};

export default EmergencyEvacuationTraining;
