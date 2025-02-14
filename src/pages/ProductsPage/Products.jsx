import React from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/images/product.jpg";

const Product = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-12">
      {/* Hero Section */}
      <div className="text-center md:text-left md:flex md:justify-between md:items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Revolutionize HSE <br /> with Cutting-Edge AI Solutions
          </h1>
          <p className="text-gray-300 mt-4">
            SEI TECH brings you the next generation of health and safety
            management. Our AI-driven application empowers organizations with
            real-time risk mitigation, compliance monitoring, and actionable
            insights.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
              REQUEST A DEMO
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex flex-col items-center md:items-end gap-6">
          <img
            src="https://source.unsplash.com/400x300/?construction,safety"
            alt="Worker Safety"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://source.unsplash.com/400x300/?technology,ai"
            alt="AI Mobile App"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature
          title="AI-Powered Safety"
          description="Identify and mitigate risks instantly with advanced AI technology."
          icon="⚙️"
        />
        <Feature
          title="Compliance Monitoring"
          description="Ensure industry-standard adherence in real-time, effortlessly."
          icon="🛡️"
        />
        <Feature
          title="Seamless Integration"
          description="Works seamlessly across platforms, enhancing connectivity."
          icon="🔗"
        />
        <Feature
          title="Actionable Insights"
          description="Make data-driven decisions for improved health and safety."
          icon="📊"
        />
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg text-center">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default Product;
