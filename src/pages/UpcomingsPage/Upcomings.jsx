import { useState, useEffect } from "react";
import { DateTime, Info, Interval } from "luxon";
import classnames from "classnames";

// Generate random training events
const generateTrainingData = () => {
  const trainingTypes = [
    "Fire Awareness",
    "Emergency Procedure",
    "Asbestos Awareness",
    "Risk Assessment",
    "First Aid",
    "Workplace Safety",
    "Hazardous Material Handling",
    "Electrical Safety",
    "Health & Safety Compliance",
    "Incident Investigation",
  ];
  
  let data = {};
  let startDate = DateTime.local(2025, 2, 1);
  let endDate = DateTime.local(2025, 3, 31);
  
  while (startDate <= endDate) {
    if (startDate.weekday < 6) { // Exclude weekends
      data[startDate.toISODate()] = Array.from({ length: 10 }, () => ({
        course: trainingTypes[Math.floor(Math.random() * trainingTypes.length)],
        seats: Math.floor(Math.random() * 15) + 1,
        price: `£${(Math.random() * 500 + 100).toFixed(2)}`,
      }));
    }
    startDate = startDate.plus({ days: 1 });
  }
  return data;
};

const trainingData = generateTrainingData();

const Upcoming = () => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState(null);
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(today.startOf("month"));
  const [bookedCourses, setBookedCourses] = useState({});

  const activeDayMeetings = trainingData[activeDay?.toISODate()] || [];
  const weekDays = Info.weekdays("short");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  )
    .splitBy({ day: 1 })
    .map((day) => day.start);

  const goToPreviousMonth = () => setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month: 1 }));
  const goToNextMonth = () => setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month: 1 }));
  const goToToday = () => setFirstDayOfActiveMonth(today.startOf("month"));

  const handleBook = (courseName) => {
    setBookedCourses((prev) => ({
      ...prev,
      [courseName]: !prev[courseName], // Toggle booked state
    }));
  };

  return (
    <div className="mt-28 flex flex-row justify-center gap-8">
      {/* Calendar */}
      <div className="calendar-container w-1/3">
        <div className="calendar bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              {firstDayOfActiveMonth.monthShort}, {firstDayOfActiveMonth.year}
            </h2>
            <div className="flex gap-2">
              <button onClick={goToPreviousMonth} className="px-3 py-1 bg-gray-300 rounded">«</button>
              <button onClick={goToToday} className="px-3 py-1 bg-blue-500 text-white rounded">Today</button>
              <button onClick={goToNextMonth} className="px-3 py-1 bg-gray-300 rounded">»</button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
            {weekDays.map((weekDay, index) => (
              <div key={index} className="text-gray-700">{weekDay}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {daysOfMonth.map((dayOfMonth, index) => (
              <div
                key={index}
                className={classnames(
                  "p-3 text-center rounded cursor-pointer transition",
                  dayOfMonth.toISODate() === today.toISODate() ? "bg-green-500 text-white" : "",
                  dayOfMonth.month !== firstDayOfActiveMonth.month ? "text-gray-400" : "bg-gray-100 hover:bg-blue-200",
                  activeDay?.toISODate() === dayOfMonth.toISODate() ? "border border-blue-500" : ""
                )}
                onClick={() => setActiveDay(dayOfMonth)}
              >
                {dayOfMonth.day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training List */}
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Upcoming Trainings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-3 border">Course</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Seats</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeDayMeetings.map((training, index) => (
                <tr key={index} className="border text-gray-700">
                  <td className="p-3 border">{training.course}</td>
                  <td className="p-3 border">{activeDay?.toFormat("EEE MMM dd yyyy")}</td>
                  <td className="p-3 border">{training.seats}</td>
                  <td className="p-3 border">{training.price}</td>
                  <td className="p-3 border">
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

export default Upcoming;
