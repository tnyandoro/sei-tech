import React, { useState } from "react";
import { DateTime, Info, Interval } from "luxon";
import classnames from "classnames";
import * as XLSX from "xlsx";

// Helper function to randomly assign mode
const getRandomMode = () => (Math.random() > 0.5 ? "Online" : "Onsite");

// Fallback dummy training data
const dummyTrainings = [
  { course: "Fire Awareness", seats: 20, price: "£50", mode: getRandomMode(), days: 1 },
  { course: "Emergency Procedure", seats: 15, price: "£60", mode: getRandomMode(), days: 2 },
  { course: "Asbestos Awareness", seats: 25, price: "£70", mode: getRandomMode(), days: 1 },
  { course: "Risk Assessment", seats: 30, price: "£80", mode: getRandomMode(), days: 2 },
];

const UpcomingTraining = () => {
  const [activeDay, setActiveDay] = useState(DateTime.local());
  const firstDayOfActiveMonth = activeDay.startOf("month");
  const weekDays = Info.weekdays("short");
  const daysInMonth = firstDayOfActiveMonth.daysInMonth;

  // Example training data structure with Mode and Number of Days
  const trainingData = {
    "2024-02-05": [
      { course: "Fire Awareness", seats: 20, price: "£50", mode: getRandomMode(), days: 1 },
      { course: "Emergency Procedure", seats: 15, price: "£60", mode: getRandomMode(), days: 2 },
    ],
    "2024-02-10": [{ course: "Asbestos Awareness", seats: 25, price: "£70", mode: getRandomMode(), days: 1 }],
    "2024-02-15": [{ course: "Risk Assessment", seats: 30, price: "£80", mode: getRandomMode(), days: 2 }],
    "2024-02-20": [{ course: "Fire Safety Training", seats: 40, price: "£90", mode: getRandomMode(), days: 3 }],

    "2024-03-05": [{ course: "First Aid Course", seats: 20, price: "£100", mode: getRandomMode(), days: 2 }],
    "2024-03-15": [{ course: "CPR Training", seats: 30, price: "£120", mode: getRandomMode(), days: 1 }],
    "2024-03-20": [{ course: "Health & Safety", seats: 25, price: "£130", mode: getRandomMode(), days: 3 }],

    "2024-04-01": [{ course: "Manual Handling", seats: 25, price: "£110", mode: getRandomMode(), days: 2 }],
    "2024-04-10": [{ course: "Diversity & Inclusion", seats: 35, price: "£140", mode: getRandomMode(), days: 1 }],
    "2024-04-15": [{ course: "Leadership Skills", seats: 30, price: "£150", mode: getRandomMode(), days: 3 }],

    "2024-05-05": [{ course: "Time Management", seats: 20, price: "£100", mode: getRandomMode(), days: 2 }],
    "2024-05-10": [{ course: "Project Management", seats: 15, price: "£160", mode: getRandomMode(), days: 3 }],
    "2024-05-20": [{ course: "Communication Skills", seats: 30, price: "£170", mode: getRandomMode(), days: 2 }],
  };

  const [bookedCourses, setBookedCourses] = useState({});

  const daysOfMonth = Array.from(
    { length: firstDayOfActiveMonth.plus({ month: 1 }).minus({ day: 1 }).day },
    (_, i) => firstDayOfActiveMonth.startOf("month").plus({ day: i })
  );

  const activeDayTrainings = trainingData[activeDay.toISODate()] || dummyTrainings; // Use dummy data if no trainings exist
  const upcomingTrainingsThisMonth = Object.entries(trainingData)
    .filter(([date]) => DateTime.fromISO(date).month === activeDay.month)
    .map(([date, trainings]) => ({
      date: DateTime.fromISO(date),
      trainings,
    }));

  const goToPreviousMonth = () =>
    setActiveDay(activeDay.minus({ months: 1 }));
  const goToNextMonth = () =>
    setActiveDay(activeDay.plus({ months: 1 }));
  const goToToday = () => setActiveDay(DateTime.local());

  const handleBook = (course) => {
    setBookedCourses((prev) => ({
      ...prev,
      [course]: !prev[course],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-4 md:px-0">
      {/* Calendar Section */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6">
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <h2 className="text-md md:text-lg font-bold text-gray-700">
              {firstDayOfActiveMonth.toFormat("MMM yyyy")}
            </h2>
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={goToPreviousMonth}
                className="px-2 md:px-3 py-1 bg-gray-200 rounded text-sm md:text-base"
              >
                «
              </button>
              <button
                onClick={goToToday}
                className="px-2 md:px-3 py-1 bg-blue-500 text-white rounded text-sm md:text-base"
              >
                Today
              </button>
              <button
                onClick={goToNextMonth}
                className="px-2 md:px-3 py-1 bg-gray-200 rounded text-sm md:text-base"
              >
                »
              </button>
            </div>
          </div>
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 text-center font-semibold mb-2 text-gray-600 text-xs md:text-sm">
            {weekDays.map((day, i) => (
              <div key={i}>{day}</div>
            ))}
          </div>
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {daysOfMonth.map((day, i) => {
              const hasTraining = trainingData[day.toISODate()];
              const isToday = day.toISODate() === DateTime.local().toISODate();

              return (
                <div
                  key={i}
                  className={classnames(
                    "p-1 md:p-2 text-sm md:text-base text-center rounded cursor-pointer transition-colors",
                    day.month !== firstDayOfActiveMonth.month ? "text-gray-400" : "bg-gray-50",
                    isToday && "bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 text-white",
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
      <div className="w-full md:w-2/3 lg:w-3/4 bg-white shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">Upcoming Trainings</h2>

        {/* All Upcoming Trainings This Month */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">All Upcoming Trainings This Month:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr className="text-gray-600 text-left">
                  <th className="p-2 md:p-3 border text-sm md:text-base">Course</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Date</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Mode</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Days</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Seats</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Price</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {upcomingTrainingsThisMonth.length > 0 ? (
                  upcomingTrainingsThisMonth.flatMap(({ date, trainings }) =>
                    trainings.map((training, i) => (
                      <tr key={`${date.toISODate()}-${i}`} className="border-b border-gray-200">
                        <td className="p-2 md:p-3 text-gray-700 text-sm md:text-base">{training.course}</td>
                        <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">
                          {date.toFormat("EEE MMM dd yyyy")}
                        </td>
                        <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.mode}</td>
                        <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.days}</td>
                        <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.seats}</td>
                        <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.price}</td>
                        <td className="p-2 md:p-3">
                          <button
                            onClick={() => handleBook(training.course)}
                            className={classnames(
                              "px-3 py-1 md:px-4 md:py-2 rounded text-white font-semibold text-sm md:text-base",
                              bookedCourses[training.course] ? "bg-red-500" : "bg-green-500"
                            )}
                          >
                            {bookedCourses[training.course] ? "BOOKED" : "BOOK NOW"}
                          </button>
                        </td>
                      </tr>
                    ))
                  )
                ) : (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                      No upcoming trainings this month.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Day Trainings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Trainings on {activeDay.toFormat("EEE MMM dd yyyy")}:{" "}
            {activeDayTrainings.length > 0 ? null : "(No Trainings)"}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr className="text-gray-600 text-left">
                  <th className="p-2 md:p-3 border text-sm md:text-base">Course</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Mode</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Days</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Seats</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Price</th>
                  <th className="p-2 md:p-3 border text-sm md:text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeDayTrainings.length > 0 ? (
                  activeDayTrainings.map((training, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="p-2 md:p-3 text-gray-700 text-sm md:text-base">{training.course}</td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.mode}</td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.days}</td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.seats}</td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-base">{training.price}</td>
                      <td className="p-2 md:p-3">
                        <button
                          onClick={() => handleBook(training.course)}
                          className={classnames(
                            "px-3 py-1 md:px-4 md:py-2 rounded text-white font-semibold text-sm md:text-base",
                            bookedCourses[training.course] ? "bg-red-500" : "bg-green-500"
                          )}
                        >
                          {bookedCourses[training.course] ? "BOOKED" : "BOOK NOW"}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      No trainings available for this date.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTraining;