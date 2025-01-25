import React from "react";

const RightSide = () => {
  return (
    <div>
      <div className="hidden lg:block w-80 bg-white shadow-lg h-screen p-4 fixed right-0">
        <div className="flex items-center mb-4">
          <div className="bg-gray-300 h-16 w-16 rounded-full"></div>
          <div className="ml-4">
            <h4 className="font-bold text-black">Username</h4>
            <p className="text-sm text-gray-500">View Profile</p>
          </div>
        </div>
        <h4 className="font-bold mb-2">Suggestions for you</h4>
        <ul>
          <li className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
              <div className="ml-3">
                <h5 className="font-semibold text-black">user123</h5>
                <p className="text-xs text-gray-500">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm">Follow</button>
          </li>
          {/* Add more suggestions as needed */}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
