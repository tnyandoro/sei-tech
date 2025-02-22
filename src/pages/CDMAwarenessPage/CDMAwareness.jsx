import React from "react";

const CDMAwareness = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 pt-24 md:pt-28">
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
          🏗️ CDM Awareness
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Enhance your understanding of the Construction (Design and Management) Regulations 2015
          (CDM 2015) with this comprehensive course. This training is meticulously crafted to empower 
          professionals in the construction and design industries to effectively manage health, safety, 
          and regulatory compliance on their projects.
        </p>

        {/* Course Highlights */}
        <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">
          Course Highlights
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Regulatory Mastery:</strong> Gain in-depth knowledge of CDM 2015, including roles, responsibilities, and legal requirements for duty holders.</li>
          <li>✅ <strong>Practical Scenarios:</strong> Experience real-world applications through interactive case studies, AI-simulated challenges, and step-by-step guidance on compliance.</li>
          <li>✅ <strong>AI-Powered Learning:</strong> Leverage state-of-the-art AI tools to simulate pre-qualification questionnaires, risk assessments, and compliance audits.</li>
          <li>✅ <strong>Timelines and Competency:</strong> Understand critical timelines and competency requirements to ensure seamless project delivery and compliance.</li>
        </ul>

        {/* Who Should Take This Course */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Who Should Take This Course?
        </h2>
        <p className="text-gray-300 mb-3 text-center">
          This course is ideal for professionals seeking to deepen their knowledge of CDM 2015 and enhance their role in the construction industry, including:
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>✅ Architects and Designers</li>
          <li>✅ Principal Designers and Principal Contractors</li>
          <li>✅ Construction Managers</li>
          <li>✅ Health and Safety Advisors</li>
          <li>✅ Compliance Officers</li>
          <li>✅ Clients and Domestic Clients</li>
        </ul>

        {/* Key Benefits */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Key Benefits
        </h2>
        <ul className="text-gray-300 space-y-2">
          <li>✅ <strong>Regulatory Confidence:</strong> Achieve compliance with ease through practical advice and AI-driven tools tailored to your role.</li>
          <li>✅ <strong>Enhanced Competency:</strong> Develop the skills to confidently manage health and safety on projects of any scale.</li>
          <li>✅ <strong>Certification:</strong> Receive a certificate of attendance that outlines the comprehensive syllabus covered.</li>
        </ul>

        {/* Why Choose SEI.TECH? */}
        <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">
          Why Choose SEI.TECH?
        </h2>
        <p className="text-gray-300 text-center">
          At SEI.TECH International, we use innovative AI technologies and expert-led training to ensure 
          your learning experience is engaging, impactful, and tailored to modern industry demands. Our 
          CDM Awareness course is a strategic investment in your professional development, designed to 
          build competency, enhance compliance, and boost project success.
        </p>
      </div>
    </div>
  );
};

export default CDMAwareness;
