import React from "react";

const BookingForm = ({ course, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${course}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center mt-28"
      onClick={onClose} // Close when clicking outside the form
    >
      <div
        className="bg-gray-800 p-8 rounded-lg w-96 max-h-[80vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          ✖️
        </button>

        <h2 className="text-green-400 text-xl font-semibold mb-4 text-center">
          Booking for {course}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 bg-gray-700 rounded text-white"
            required
          />

          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 bg-gray-700 rounded text-white"
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 bg-gray-700 rounded text-white"
          />

          {/* Preferred Training Date */}
          <input
            type="date"
            className="w-full p-2 bg-gray-700 rounded text-white"
          />

          {/* Number of Attendees */}
          <input
            type="number"
            placeholder="Number of Attendees"
            className="w-full p-2 bg-gray-700 rounded text-white"
            min="1"
          />

          {/* Additional Comments */}
          <textarea
            placeholder="Additional Comments"
            className="w-full p-2 bg-gray-700 rounded text-white"
            rows="4"
          />

          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 p-2 rounded hover:bg-green-600"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gray-600 p-2 rounded hover:bg-red-500"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;
