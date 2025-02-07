import React from "react";

const UpcomingTraining = () => {
  // Mock data for training sessions
  const trainingData = {
    "2025-01-08": [
      {
        course: "Fire Awareness",
        description: "Online",
        time: "10:00 AM",
        location: "Virtual",
        seats: "7",
        price: "$450.00",
        mode: "Online",
      },
    ],
    "2025-01-09": [
      {
        course: "Emergency Procedure",
        description: "Online",
        time: "2:00 PM",
        location: "Virtual",
        seats: "2",
        price: "$350.00",
        mode: "Online",
      },
    ],
    "2025-01-14": [
      {
        course: "Asbestos Awareness",
        description: "Online",
        time: "9:00 AM",
        location: "Virtual",
        seats: "10",
        price: "$450.00",
        mode: "Online",
      },
    ],
    "2025-01-23": [
      {
        course: "Risk Assessment",
        description: "Online",
        time: "11:00 AM",
        location: "Virtual",
        seats: "11",
        price: "$400.00",
        mode: "Online",
      },
    ],
  };

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
  const currentDay = currentDate.getDate();

  // Check if a date is the current date
  const isCurrentDate = (year, month, day) => {
    return (
      year === currentYear &&
      month === currentMonth &&
      day === currentDay
    );
  };

  return (
    <div className="bg-black text-white py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-500">
            Upcoming Training Events
          </h2>
        </div>

        {/* Calendar Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
            {/* Calendar Header */}
            <div className="flex items-center justify-between text-green-500 mb-4">
              <button>&lt;</button>
              <h3 className="text-xl font-semibold">January 2025</h3>
              <button>&gt;</button>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div key={day} className="text-gray-400 text-sm font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 30 }).map((_, index) => {
                const day = index + 1;
                const date = `2025-01-${String(day).padStart(2, "0")}`;
                const trainings = trainingData[date] || [];
                const isToday = isCurrentDate(2025, 1, day); // Check if this date is today

                return (
                  <div
                    key={index}
                    className={`${
                      isToday
                        ? "bg-[#2CBCC2] text-white" // Highlight current date
                        : trainings.length > 0
                        ? "bg-green-500 text-white"
                        : "bg-gray-700 text-gray-400"
                    } p-2 rounded-lg min-h-[100px] flex flex-col`}
                  >
                    <div className="font-bold mb-2">{day}</div>
                    <div className="flex-1 overflow-y-auto">
                      {trainings.map((training, idx) => (
                        <div key={idx} className="text-xs mb-1">
                          <div>{training.course}</div>
                          <div>{training.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Trainings */}
        <div>
          <h3 className="text-green-500 text-2xl font-semibold text-center mb-4">
            Upcoming Trainings
          </h3>
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg overflow-x-auto">
            <table className="w-full text-gray-300 text-sm">
              <thead>
                <tr>
                  {["Course", "Date", "Description", "Seats", "Price", "Mode", "Action"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="py-2 px-4 border-b border-gray-700 text-left"
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    course: "Fire Awareness",
                    date: "Thu Jan 09 2025",
                    description: "Online",
                    seats: "7",
                    price: "$450.00",
                    mode: "Online",
                  },
                  {
                    course: "Emergency Procedure",
                    date: "Fri Jan 10 2025",
                    description: "Online",
                    seats: "2",
                    price: "$350.00",
                    mode: "Online",
                  },
                  {
                    course: "Asbestos Awareness",
                    date: "Tue Jan 14 2025",
                    description: "Online",
                    seats: "10",
                    price: "$450.00",
                    mode: "Online",
                  },
                  {
                    course: "Emergency Procedure",
                    date: "Wed Jan 15 2025",
                    description: "Online",
                    seats: "2",
                    price: "$350.00",
                    mode: "Online",
                  },
                  {
                    course: "Risk Assessment",
                    date: "Wed Jan 22 2025",
                    description: "Online",
                    seats: "11",
                    price: "$400.00",
                    mode: "Online",
                  },
                ].map((training, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 px-4 whitespace-nowrap">{training.course}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{training.date}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{training.description}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{training.seats}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{training.price}</td>
                    <td className="py-2 px-4 whitespace-nowrap">{training.mode}</td>
                    <td className="py-2 px-4 whitespace-nowrap">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg">
                        BOOK NOW
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTraining;