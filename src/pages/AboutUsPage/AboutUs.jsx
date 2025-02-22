import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('/images/aboutus-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-green-500">About Us</h1>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-green-400 mb-4">Our Company</h2>
        <p className="text-gray-300 leading-relaxed">
          SEI-TECH International is dedicated to reshaping the industry by ensuring safety, compliance, and advanced AI-driven risk management.
          We aim to transform the way organizations prioritize health and safety, making workplaces safer and more efficient.
        </p>
      </div>

      {/* Corporate Governance */}
      <div className="bg-gray-900 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">Corporate Governance</h2>
          <p className="text-gray-300 leading-relaxed">
            Our commitment to high corporate governance standards ensures transparency, financial responsibility, sustainability, and compliance.
          </p>
        </div>
      </div>

      {/* Leadership & CSR */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-green-400 mb-4">Leadership</h2>
        <p className="text-gray-300 leading-relaxed">
          Our leadership team drives innovation, fosters integrity, and is committed to transforming ideas into reality.
        </p>
      </div>

      <div className="bg-gray-900 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">Corporate Social Responsibility</h2>
          <p className="text-gray-300 leading-relaxed">
            We recognize that businesses have far-reaching effects on society, and we prioritize sustainability and ethical practices in all our operations.
          </p>
        </div>
      </div>

      {/* Meet Our Executives */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-green-400 text-center mb-8">Meet Our Executives</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Executive 1 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <img src="/images/executive1.jpg" alt="Trey Chikwanda" className="w-24 h-24 mx-auto rounded-full mb-4"/>
            <h3 className="text-xl font-semibold text-green-400">Trey Chikwanda</h3>
            <p className="text-gray-300 text-sm">Chief Executive Officer</p>
          </div>
          {/* Executive 2 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <img src="/images/executive2.jpg" alt="Rudy George" className="w-24 h-24 mx-auto rounded-full mb-4"/>
            <h3 className="text-xl font-semibold text-green-400">Rudy George</h3>
            <p className="text-gray-300 text-sm">Senior Safety Officer</p>
          </div>
          {/* Executive 3 */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <img src="/images/executive3.jpg" alt="Robert Johnson" className="w-24 h-24 mx-auto rounded-full mb-4"/>
            <h3 className="text-xl font-semibold text-green-400">Robert Johnson</h3>
            <p className="text-gray-300 text-sm">Chief Technology Officer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>© 2025 SEI-TECH International | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;
