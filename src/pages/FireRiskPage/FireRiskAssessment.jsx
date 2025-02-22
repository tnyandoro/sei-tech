import React from "react";

const FireRiskAssessment = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-red-400 text-2xl font-bold text-center mb-4">
            🔥 Fire Risk Assessments
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Protect your workplace, employees, and visitors by ensuring compliance with fire safety regulations through 
            our comprehensive **Fire Risk Assessment** services.
          </p>

          {/* What Is a Fire Risk Assessment? */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">📋 What Is a Fire Risk Assessment?</h2>
          <p className="text-gray-300 mb-4">
            A **Fire Risk Assessment** is a legal requirement under fire safety laws across the UK. It involves 
            identifying potential **fire hazards**, assessing risks, and implementing **controls** to ensure a safe 
            environment.
          </p>

          {/* Legal Requirements */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">⚖️ Legal Requirements</h2>
          <p className="text-gray-300 mb-2">Fire safety obligations are governed by the following regulations:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>**England & Wales**: The **Regulatory Reform (Fire Safety) Order 2005** mandates a fire risk assessment.</li>
            <li>**Scotland**: Governed by the **Fire (Scotland) Act 2005** and related regulations.</li>
            <li>**Northern Ireland**: Covered under the **Fire and Rescue Services (Northern Ireland) Order 2006**.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            High-risk workplaces, particularly those involving **dangerous substances**, must follow **DSEAR & HSE guidance L138**.
          </p>

          {/* Who Needs a Fire Risk Assessment? */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">🏢 Who Needs a Fire Risk Assessment?</h2>
          <p className="text-gray-300 mb-2">
            Fire Risk Assessments are required for a wide range of properties and organizations, including:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Business owners, landlords, and tenants.</li>
            <li>Property managers.</li>
            <li>Public spaces: Schools, theatres, cinemas, and construction sites.</li>
            <li>Care homes, pubs, and HMOs (Houses in Multiple Occupation).</li>
          </ul>

          {/* What We Do */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">🔍 What We Do</h2>
          <p className="text-gray-300 mb-2">Our professional Fire Risk Assessment services include:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>🔎 **Identifying Fire Hazards** – Assess sources of fire, ignition, and fuel.</li>
            <li>🛡️ **Implementing Effective Controls** – Reduce and eliminate fire risks.</li>
            <li>📑 **Emergency Plan Development** – Ensure safe evacuation procedures.</li>
            <li>📢 **Compliance Communication** – Educate employees and occupants on fire safety measures.</li>
          </ul>

          {/* Why Compliance Matters */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">⚠️ Why Compliance Matters</h2>
          <p className="text-gray-300 mb-2">Failure to comply with fire safety regulations can lead to:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>🚨 **Legal enforcement actions.**</li>
            <li>💰 **Hefty fines.**</li>
            <li>⚖️ **Prosecution and liability risks.**</li>
          </ul>
          <p className="text-gray-300 mb-4">
            The **Approved Codes of Practice (ACOPs)** for fire safety provide essential guidelines to meet legal obligations.
          </p>

          {/* Call to Action */}
          <h2 className="text-red-400 text-xl font-semibold mt-6 mb-3">✅ Let’s Ensure Your Safety</h2>
          <p className="text-gray-300 mb-4">
            Fire safety is a **critical responsibility**. Partner with us to ensure compliance, effective emergency 
            planning, and a safer environment for everyone.
          </p>
          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition">
              🔥 Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireRiskAssessment;
