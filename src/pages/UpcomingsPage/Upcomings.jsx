import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const trainingData = [
  { date: "2025-01-09", course: "Fire Awareness", seats: 7, price: 450 },
  { date: "2025-01-10", course: "Emergency Procedure", seats: 2, price: 350 },
  { date: "2025-01-14", course: "Asbestos Awareness", seats: 10, price: 450 },
  { date: "2025-01-15", course: "Emergency Procedure", seats: 2, price: 350 },
  { date: "2025-01-22", course: "Risk Assessment", seats: 11, price: 400 },
];

const formatDate = (date) => moment(date).format("YYYY-MM-DD");

const Upcomings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateStr = formatDate(selectedDate);

  const filteredTrainings = trainingData.filter(
    (t) => t.date === selectedDateStr
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-5">
      <h2 className="text-2xl font-bold text-center text-green-400">
        📆 Upcoming Training Events
      </h2>

      {/* Calendar */}
      <div className="flex justify-center mt-5">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-2/5">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) =>
              formatDate(date) === formatDate(new Date())
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-full"
                : "text-white"
            }
            className="rounded-lg bg-gray-700 p-3 text-white w-full"
          />
        </div>
      </div>

      {/* Training List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-center text-blue-400">
          🗓️ Trainings on {moment(selectedDate).format("dddd, MMM D, YYYY")}
        </h3>
        {filteredTrainings.length > 0 ? (
          <div className="mt-4 mx-auto w-full max-w-4xl">
            <table className="w-full border-collapse text-center bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700 text-green-300">
                <tr>
                  <th className="p-3">Course</th>
                  <th className="p-3">Seats</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrainings.map((t, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="p-3">{t.course}</td>
                    <td className="p-3">{t.seats}</td>
                    <td className="p-3">${t.price}</td>
                    <td className="p-3">
                      <button className="bg-green-500 px-3 py-2 rounded text-black font-semibold hover:bg-green-600">
                        ✅ BOOK NOW
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mt-4 text-gray-400">❌ No sessions for this date.</p>
        )}
      </div>
    </div>
  );
};

export default Upcomings;
