import React from "react";

const TrainingCourses = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Title Section */}
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-green-400 text-2xl font-bold mb-4">📚 Training Courses</h1>
        <p className="text-gray-300 mb-6">
          Explore our courses, including manual handling, first aid, NEBOSH, and NVQ in Health & Safety.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Type a course name"
            className="px-4 py-2 bg-gray-700 text-white rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            🔍 Search
          </button>
        </div>
      </div>

      {/* Sidebar & Image Section */}
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mt-8">
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Training Courses"
            className="rounded-md w-full"
          />
        </div>
        <h2 className="text-green-400 text-xl font-semibold text-center">📖 About Our Courses</h2>
        <a href="#" className="block text-green-500 hover:underline text-center mt-2">
          Download PDF &gt;
        </a>
        <p className="text-center text-gray-300 mt-2">
          📞 Tel: <span className="font-bold">01634 260 631</span>
        </p>
      </div>

      {/* What's New Section */}
      <div className="max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mt-8 text-center">
        <h2 className="text-green-400 text-xl font-semibold mb-4">🌟 What's New</h2>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
            &lt; Previous
          </button>
          <span className="text-white">1</span>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;
