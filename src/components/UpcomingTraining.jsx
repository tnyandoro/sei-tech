import React, { useState } from "react";
import { DateTime, Info, Interval } from "luxon";
import classnames from "classnames";

const UpcomingTraining = () => {
  // Training data (simplified from original)
  const trainingData = {
    "2025-01-08": [
      { course: "Fire Awareness", seats: "7", price: "£450.00" },
    ],
    "2025-01-09": [
      { course: "Emergency Procedure", seats: "2", price: "£350.00" },
    ],
    "2025-01-14": [
      { course: "Asbestos Awareness", seats: "10", price: "£450.00" },
    ],
    "2025-01-23": [
      { course: "Risk Assessment", seats: "11", price: "£400.00" },
    ],
  };

  const [activeDay, setActiveDay] = useState(DateTime.local(2025, 1, 8));
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(DateTime.local(2025, 1, 1));
  const [bookedCourses, setBookedCourses] = useState({});

  const activeDayTrainings = trainingData[activeDay.toISODate()] || [];
  const weekDays = Info.weekdays("short");
  
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({ day: 1 }).map((day) => day.start);

  // Navigation functions
  const goToPreviousMonth = () => setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month: 1 }));
  const goToNextMonth = () => setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month: 1 }));
  const goToToday = () => setFirstDayOfActiveMonth(DateTime.local().startOf("month"));

  const handleBook = (courseName) => {
    setBookedCourses(prev => ({ ...prev, [courseName]: !prev[courseName] }));
  };

  return (
    <div className="mt-28 flex justify-center gap-8 font-sans">
      {/* Calendar Section */}
      <div className="w-1/3">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              {firstDayOfActiveMonth.toFormat("MMM yyyy")}
            </h2>
            <div className="flex gap-2">
              <button onClick={goToPreviousMonth} className="px-3 py-1 bg-gray-200 rounded">«</button>
              <button onClick={goToToday} className="px-3 py-1 bg-blue-500 text-white rounded">Today</button>
              <button onClick={goToNextMonth} className="px-3 py-1 bg-gray-200 rounded">»</button>
            </div>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2 text-gray-600">
            {weekDays.map((day, i) => (
              <div key={i}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {daysOfMonth.map((day, i) => {
              const hasTraining = trainingData[day.toISODate()];
              return (
                <div
                  key={i}
                  className={classnames(
                    "p-2 text-center rounded cursor-pointer transition-colors",
                    day.month !== firstDayOfActiveMonth.month ? "text-gray-400" : "bg-gray-50",
                    day.toISODate() === DateTime.local().toISODate() ? "bg-green-500 text-white" : "",
                    activeDay.toISODate() === day.toISODate() ? "border-2 border-blue-500" : "",
                    hasTraining ? "hover:bg-blue-200" : "hover:bg-gray-200"
                  )}
                  onClick={() => setActiveDay(day)}
                >
                  {day.day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Training List */}
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Upcoming Trainings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr className="text-gray-600 text-left">
                <th className="p-3 border">Course</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Seats</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeDayTrainings.map((training, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">{training.course}</td>
                  <td className="p-3 text-gray-600">{activeDay.toFormat("EEE MMM dd yyyy")}</td>
                  <td className="p-3 text-gray-600">{training.seats}</td>
                  <td className="p-3 text-gray-600">{training.price}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleBook(training.course)}
                      className={classnames(
                        "px-4 py-2 rounded text-white font-semibold",
                        bookedCourses[training.course] ? "bg-red-500" : "bg-green-500"
                      )}
                    >
                      {bookedCourses[training.course] ? "BOOKED" : "BOOK NOW"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTraining;