import React from "react";


const RiskAssessmentServices = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6 pt-24 md:pt-28">


      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            🛡️ Risk Assessment Services
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Ensuring the safety and well-being of your employees and others is not just good practice—it's a legal obligation. Let us help you identify, evaluate, and manage risks effectively to create a safer workplace.
          </p>

          {/* What Is a Risk Assessment? */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📋 What Is a Risk Assessment?</h2>
          <p className="text-gray-300 mb-4">
            A risk assessment is a structured process that identifies potential hazards in your workplace, evaluates their risks, and establishes control measures to protect everyone from harm. It is a legal requirement for employers, especially those with five or more employees, and is critical to maintaining a safe and compliant working environment.
          </p>

          {/* Steps of Risk Assessment */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🔍 Steps of Risk Assessment</h2>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li>Identify Hazards.</li>
            <li>Determine Who Might Be Harmed and How.</li>
            <li>Evaluate the Risks and Decide on Precautions.</li>
            <li>Record Your Findings.</li>
            <li>Implement and Maintain Control Measures.</li>
            <li>Review and Update the Risk Assessment Regularly.</li>
          </ul>

          {/* Your Legal Duty */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">⚖️ Your Legal Duty</h2>
          <p className="text-gray-300 mb-4">
            Under the **Health and Safety at Work Act 1974** and the **Management of Health and Safety at Work Regulations 1999**, employers must:
          </p>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li>Identify hazards that could cause injury or illness.</li>
            <li>Assess the likelihood and severity of harm.</li>
            <li>Take action to eliminate or control risks.</li>
          </ul>

          {/* Our Expertise */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🎯 Our Expertise</h2>
          <p className="text-gray-300 mb-4">
            We bring extensive experience in conducting risk assessments across various industries, providing clear and actionable recommendations to ensure compliance and workplace safety.
          </p>

          {/* Types of Risk Assessments We Offer */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📌 Types of Risk Assessments We Offer</h2>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li>COSHH Assessments (Control of Substances Hazardous to Health).</li>
            <li>Office and DSE Assessments (Display Screen Equipment).</li>
            <li>Working at Height & Confined Space Assessments.</li>
            <li>Manual Handling & Shift Working Assessments.</li>
            <li>DSEAR Assessments (Dangerous Substances and Explosive Atmospheres).</li>
          </ul>

          {/* DSEAR Risk Assessments */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">⚠️ DSEAR Risk Assessments</h2>
          <p className="text-gray-300 mb-4">
            These assessments are crucial for workplaces handling dangerous substances, ensuring compliance and workplace safety by identifying and controlling explosion and chemical risks.
          </p>

          {/* Regular Reviews */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🔄 Regular Reviews</h2>
          <p className="text-gray-300 mb-4">
            Risk assessments should be reviewed regularly, especially after significant changes, incidents, or when the current assessment is no longer valid.
          </p>

          {/* Call to Action */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🤝 Let’s Work Together</h2>
          <p className="text-gray-300 mb-6">
            Partner with us for effective risk assessments tailored to your needs. Ensure compliance, protect your employees, and maintain a safer workplace.
          </p>
          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              📅 Book Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RiskAssessmentServices;
