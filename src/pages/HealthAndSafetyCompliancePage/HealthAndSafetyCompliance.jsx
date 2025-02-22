import React from "react";

const HealthAndSafetyCompliance = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            🏥 Health & Safety Compliance Services
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Ensuring workplace safety isn’t just a **legal obligation**—it’s 
            essential for protecting employees and maintaining operational success. 
            At **SEI.TECH International**, we provide expert guidance to help 
            organizations **stay compliant and safe**.
          </p>

          {/* Legal Requirements */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">⚖️ Legal Requirements</h2>
          <p className="text-gray-300 mb-2">In the UK, all organizations must have a **health and safety policy**:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>👥 **5+ Employees**: A written policy is **legally required**.</li>
            <li>👤 **Fewer than 5 Employees**: Not mandatory but **highly recommended**.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Employees must understand their roles and responsibilities, ensuring safety policies are:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>✅ Communicated during **employee induction**.</li>
            <li>✅ Reinforced through **toolbox talks & refresher training**.</li>
            <li>✅ Updated and shared whenever **policy changes occur**.</li>
          </ul>

          {/* Crafting an Effective Policy */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">📝 Crafting an Effective Policy</h2>
          <p className="text-gray-300 mb-2">
            A well-crafted **Health & Safety Policy** protects individuals and ensures compliance. 
            Under **Section 2(3) of the Health and Safety at Work Act**, the policy must:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>📜 Outline the **employer’s general policy** on health and safety.</li>
            <li>🏛️ Describe the **organization & arrangements** for implementing the policy.</li>
            <li>🔄 Be **regularly reviewed** and updated.</li>
          </ul>
          <p className="text-gray-300 mb-4">A strong policy should be:</p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>📌 **Concise** and written in **clear** language.</li>
            <li>🏭 **Tailored** to specific business operations.</li>
            <li>📢 **Displayed** prominently in the workplace.</li>
            <li>🖊️ **Signed** by the highest-ranking executive.</li>
          </ul>

          {/* Why It Matters */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🚨 Why It Matters</h2>
          <p className="text-gray-300 mb-4">
            If a **workplace accident** occurs, the first document examined is the **Health & Safety Policy**. 
            Keeping it **up-to-date and comprehensive** is crucial to demonstrate compliance and **reduce liabilities**.
          </p>

          {/* Our Health & Safety Advisor Service */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🛡️ Our Health & Safety Advisor Service</h2>
          <p className="text-gray-300 mb-2">
            In compliance with **Regulation 7** of **The Management of Health and Safety at Work Regulations 1999**, 
            **SEI.TECH International** provides:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>👨‍⚖️ **Retained Health & Safety Adviser** – Monthly access to expert guidance.</li>
            <li>📜 **Certification & Personnel CVs** – Added credibility for audits & compliance.</li>
            <li>📞 **Tailored Support** – A **dedicated point of contact** to understand your business needs.</li>
          </ul>

          {/* Call to Action */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">✅ Let’s Build a Safer Workplace Together</h2>
          <p className="text-gray-300 mb-4">
            Protect your employees and ensure compliance with **SEI.TECH International’s** expert services. 
            From **policy creation** to **ongoing advisory support**, we’re here to help **you succeed**.
          </p>
          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition">
              📅 Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAndSafetyCompliance;
