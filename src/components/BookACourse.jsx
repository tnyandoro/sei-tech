import React from "react";

const BookACourse = () => {
  return (
    <div className="bg-black text-white py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-500 mb-4">
            It's now easier to book a course with us
          </h2>
          <p className="text-gray-300 mb-6">
            We have an online booking and payment portal for you to instantly
            book your health and safety courses. Our built-in learning
            management system records all booked and attended training, making
            them easily accessible for future reference.
          </p>
          <p className="text-gray-300 mb-6">
            You'll also get reminders when qualifications like SMSTS are about
            to expire, helping you stay ahead by booking a refresher course.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
            Book a Demo
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-96">
            <div className="absolute bg-gray-700 rounded-xl w-full h-full"></div>
            {/* Placeholder for phone image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookACourse;
