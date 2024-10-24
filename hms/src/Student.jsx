import React from "react";
import { Link } from "react-router-dom";

function Student() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-black text-white w-64 h-screen p-5">
        <div className="text-2xl font-bold mb-10">
          <span className="inline-block mr-2">🎓</span>
          Dashboard
        </div>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span className="inline-block">🏠</span>
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block">✏️</span>
            <span>Mess</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block">📝</span>
            <Link to="/allocation"><span>Hostel Allocation</span></Link>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block">💵</span>
            <span>Invoices</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block">😕</span>
            <Link to="/complaint"><span>Complaints</span></Link>
          </li>
          <li className="flex items-center space-x-3">
            <span className="inline-block">💡</span>
            <span>Suggestions</span>
          </li>
        </ul>
        <button className="mt-20 bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center w-full">
          <span className="inline-block mr-2">🔓</span>
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Top Bar */}
        <div className="bg-black text-white flex justify-between items-center px-8 py-4">
          <div className="text-xl">1:22:51 am</div>
          <div className="text-lg">XYZ</div>
          <div className="flex space-x-4">
            <span className="text-2xl">⚙️</span>
            <span className="text-2xl">🔔</span>
            <span className="text-2xl">👤</span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="flex flex-col bg-gray-900 h-full p-8 space-y-8 text-white">
          <h1 className="text-4xl font-bold">
            Welcome <span className="text-blue-500">XYZ!</span>
          </h1>

          <div className="grid grid-cols-2 gap-8">
            {/* Unpaid Invoices Section */}
            <div className="bg-black p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Unpaid Invoices</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">⏰</span>
                    <div>
                      <div>Mess Fee</div>
                      <div className="text-sm text-gray-400">May 21, 2023</div>
                    </div>
                  </div>
                  <div className="text-xl">Rs. 9000</div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">⏰</span>
                    <div>
                      <div>Mess Fee</div>
                      <div className="text-sm text-gray-400">October 3, 2024</div>
                    </div>
                  </div>
                  <div className="text-xl">Rs. 9000</div>
                </li>
              </ul>
            </div>

            {/* Attendance Section */}
            <div className="bg-black p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
              <div className="flex justify-center">
                {/* Donut Chart Placeholder */}
                <div className="w-40 h-40 rounded-full bg-blue-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around mt-4">
                <div className="text-sm text-orange-500">Days off</div>
                <div className="text-sm text-blue-500">Days present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
