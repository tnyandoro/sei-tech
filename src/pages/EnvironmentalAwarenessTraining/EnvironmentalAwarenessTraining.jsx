import React from "react";

const EnvironmentalAwarenessTraining = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🌍 Environmental Awareness Training
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Build a sustainable future with our comprehensive Environmental Awareness Training. 
          This course empowers employees to make environmentally responsible decisions 
          in the workplace and beyond.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3">✅ Course Highlights</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Understanding Environmental Impact: Explore how workplace activities affect the environment and ways to mitigate harm.</li>
          <li>AI-Enhanced Learning Tools: Interactive AI-powered modules provide personalized learning experiences and eco-friendly best practices.</li>
          <li>Practical Sustainability Practices: Learn actionable steps to reduce waste, conserve energy, and promote sustainability.</li>
          <li>Regulatory Compliance: Gain insights into environmental laws and ensure your organization meets global standards.</li>
        </ul>

        {/* Who Should Take This Course */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">👨‍💼 Who Should Take This Course?</h2>
        <p className="text-gray-300">
          This training is essential for employees, leaders, and teams striving to integrate sustainability 
          into their professional and personal lives. Ideal for:
        </p>
        <ul className="text-gray-300 list-disc list-inside space-y-2 mt-2">
          <li>Operations and Facility Managers</li>
          <li>Team Leaders and Supervisors</li>
          <li>HR and Sustainability Officers</li>
          <li>All employees as part of a green initiative</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🎯 Key Benefits</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Promote a Green Culture: Foster a workplace culture that values environmental responsibility.</li>
          <li>Cost Savings: Learn eco-friendly practices that reduce waste and operational costs.</li>
          <li>AI-Powered Insights: Leverage AI analytics to identify and implement sustainable improvements.</li>
          <li>Certificate of Completion: Showcase your commitment to sustainability with a professional certificate.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">💡 Why Choose SEI.TECH?</h2>
        <p className="text-gray-300">
          At SEI.TECH International, we use advanced AI technology and expert guidance to create impactful training programs. 
          Our Environmental Awareness Training is designed to align with your organization’s sustainability goals while driving real-world change.
        </p>
      </div>
    </div>
  );
};

export default EnvironmentalAwarenessTraining;
