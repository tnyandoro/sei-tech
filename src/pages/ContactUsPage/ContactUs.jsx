import React, { useState } from "react";

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white font-poppins">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?business,technology')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500">
            CONNECT WITH SEI TECH
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Innovative solutions at your fingertips. Reach out today!
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">
              CHAT ON WHATSAPP
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
              SEND A MESSAGE
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-green-400">Contact Us</h2>
        <p className="text-gray-300 mt-2">
          Reach out to us through any of the following channels.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">WhatsApp</h3>
            <p className="text-gray-400 mt-2">+447413552549</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Phone</h3>
            <p className="text-gray-400 mt-2">+447413552549</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-2">info@seitechinternational.com</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Facebook</h3>
            <p className="text-gray-400 mt-2">facebook.com</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-400 mt-2">linkedin.com</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-green-400">Our Location</h2>
        <p className="text-gray-300 mt-2">
          Find us at SEI TECH International. Click below to explore directions.
        </p>
        <div className="mt-6 max-w-lg mx-auto">
          <div className="w-full h-60 bg-gray-700 rounded-md">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=San+Francisco,CA"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md w-full">
            OPEN IN GOOGLE MAPS
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-green-400">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 mt-2">
          Find answers to some of the most common questions about SEI TECH and
          our services.
        </p>
        <div className="mt-6 max-w-lg mx-auto space-y-4">
          {[
            "How can I reach SEI TECH?",
            "What services do you offer?",
            "Do you provide international support?",
            "How can I enroll in a course?",
            "What payment methods do you accept?",
          ].map((question, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-md">
              <button
                className="w-full text-left text-green-500 font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {question}
                <span className="text-white">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-300 mt-2">
                  This is a placeholder answer. You can customize it as needed.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400">
          © 2025 SEI TECH International. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
