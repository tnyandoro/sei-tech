import React from "react";
import citbImage from "../assets/images/citb.jpeg"; // Import CITB image
import ioshImage from "../assets/images/iosh.png"; // Import IOSH image
import neboshImage from "../assets/images/nebosh.png"; // Import NEBOSH image
import ngcImage from "../assets/images/ngc.jpeg"; // Import NGC image

const ExpertServices = () => {
  return (
    <div className="bg-black text-white font-sans py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-4">
            OUR EXPERT SERVICES
          </h1>
          <p className="text-lg text-gray-300">
            We combine advanced AI-driven technology with the expertise of our
            highly qualified training staff to provide industry-leading health
            and safety solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Training Courses Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              TRAINING COURSES
            </h2>
            <p className="text-gray-300 mb-6">
              Our training department offers tailored programs to meet current
              client needs. Courses include NEBOSH General, CITB SMSTS, and
              bespoke programs like Fire Warden training. Stay ahead with our
              expert-led, AI-enhanced courses.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-6">
              VIEW UPCOMING COURSES
            </button>
            {/* Course Images */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <img
                  src={neboshImage}
                  alt="NEBOSH General Certificate"
                  className="h-24 w-full object-cover rounded-lg"
                />
                <p className="text-sm text-gray-300 mt-2">
                  NEBOSH GENERAL CERTIFICATE
                </p>
              </div>
              <div className="text-center">
                <img
                  src={citbImage}
                  alt="CITB SMSTS"
                  className="h-24 w-full object-cover rounded-lg"
                />
                <p className="text-sm text-gray-300 mt-2">CITB SMSTS</p>
              </div>
              <div className="text-center">
                <img
                  src={ioshImage}
                  alt="IOSH Managing Safely"
                  className="h-24 w-full object-cover rounded-lg"
                />
                <p className="text-sm text-gray-300 mt-2">
                  IOSH MANAGING SAFELY
                </p>
              </div>
            </div>
            {/* Featured Image */}
            <div className="mt-6">
              <img
                src={ngcImage}
                alt="CITB Health & Safety Awareness"
                className="h-48 w-full object-cover rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">
                CITB HEALTH & SAFETY AWARENESS
              </p>
            </div>
          </div>

          {/* Compliance Services Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              COMPLIANCE SERVICES
            </h2>
            <p className="text-gray-300 mb-6">
              Our compliance services ensure your organization aligns with all
              regulations. From expert site inspections to AI-driven safety
              solutions, we offer monthly consultations and bespoke plans to
              suit your needs.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
              MORE ABOUT COMPLIANCE
            </button>
            <p className="text-gray-300 mt-6">
              Our qualified experts work closely with you to ensure a safe and
              compliant workplace, leveraging cutting-edge tools and industry
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertServices;