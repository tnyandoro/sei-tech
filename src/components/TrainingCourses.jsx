import React from "react";

const TrainingCourses = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Training Courses Section */}
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-2">Training Courses</h1>
        <p className="text-center text-gray-400 mb-6">
          Explore our courses, including manual handling, first aid, NEBOSH, and NVQ in Health & Safety.
        </p>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type a course name"
            className="px-4 py-2 bg-gray-800 text-white rounded-md w-72 focus:outline-none"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Search
          </button>
        </div>
      </div>

      {/* Sidebar and Image Section */}
      <div className="flex justify-center items-start md:justify-end md:px-10">
        <div className="text-center md:text-left bg-gray-800 rounded-lg p-5 max-w-sm">
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Training Courses"
              className="rounded-md"
            />
          </div>
          <h2 className="text-xl font-bold">About Our Courses</h2>
          <a
            href="#"
            className="block text-green-500 hover:underline mb-2 mt-1"
          >
            Download PDF &gt;
          </a>
          <p>Tel: <span className="font-bold">01634 260 631</span></p>
        </div>
      </div>

      {/* What's New Section */}
      <div className="bg-gray-900 text-center py-10">
        <h2 className="text-3xl font-bold text-green-500 mb-4">What's New</h2>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            &lt; Previous
          </button>
          <span className="text-white">1</span>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourses;
