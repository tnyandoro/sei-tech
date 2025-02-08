import React from "react";
import { Link } from "react-router-dom";

const ELearning = () => {
  return (
    <div className="bg-black text-white font-poppins">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business,education')" }}>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-green-500">Elevate Your OHSE Expertise</span> with SEI TECH E-Learning
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Flexible learning, professional certifications, and unmatched expertise – all at your fingertips.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">
            Explore Courses
          </button>
          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      {/* Why Choose Our Courses */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-green-400">Why Choose Our Courses?</h2>
        <p className="text-gray-300 mt-2">
          Learn from industry leaders with flexible, comprehensive, and certified courses.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Interactive Lessons</h3>
            <p className="text-gray-400 mt-2">Engaging video tutorials and hands-on exercises.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Flexible Scheduling</h3>
            <p className="text-gray-400 mt-2">Learn at your own pace, anytime and anywhere.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md w-80 text-center">
            <h3 className="text-green-500 text-xl font-semibold">Certified Courses</h3>
            <p className="text-gray-400 mt-2">Receive industry-recognized certifications upon completion.</p>
          </div>
        </div>
      </section>

      {/* Course Features & Pricing */}
      <section className="py-16 bg-gray-900 flex flex-wrap justify-center gap-12">
        <div className="w-96 bg-gray-800 p-6 rounded-md">
          <h3 className="text-green-400 text-xl font-semibold mb-4">Course Features</h3>
          <ul className="text-gray-300">
            <li>✅ Interactive video lessons</li>
            <li>✅ Quizzes to test knowledge</li>
            <li>✅ Downloadable resources</li>
            <li>✅ 24/7 access to materials</li>
          </ul>
        </div>
        <div className="w-96 bg-gray-800 p-6 rounded-md">
          <h3 className="text-green-400 text-xl font-semibold mb-4">Course Pricing</h3>
          <p className="text-3xl font-bold text-white">£99.99</p>
          <p className="text-gray-400">One-time payment for full course access.</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md w-full">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?desk,work')" }}>
        </div>
        <div className="relative max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-green-400 text-xl font-semibold text-center mb-4">Have Questions?</h3>
          <p className="text-gray-300 text-center mb-6">
            Reach out to our support team to learn more about the courses we offer.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            <input type="email" placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            <select className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none">
              <option>Select a course</option>
              <option>CDM Awareness</option>
              <option>Manual Handling</option>
              <option>Fire Warden Course</option>
            </select>
            <textarea placeholder="Your Message" rows="4"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"></textarea>
            <button type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md w-full">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400">© 2025 SEI TECH E-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ELearning;
