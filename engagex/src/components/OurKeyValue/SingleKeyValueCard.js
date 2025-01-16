import React from "react";

const SingleKeyValueCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg max-w-sm mx-auto"
      style={{
        background:
          "linear-gradient(122deg, rgba(5,76,92,1) 0%, rgba(4,58,70,1) 9%, rgba(3,42,51,1) 20%, rgba(0,0,0,1) 54%, rgba(2,23,29,1) 73%, rgba(4,51,66,1) 92%, rgba(5,69,89,1) 100%)",
      }}
    >
      {/* Header */}
      <h2 className="text-2xl font-bold text-white mb-2">
        Earn <span className="text-green-400">Rewards</span>
      </h2>
      <p className="text-gray-400 mb-6">For Users</p>

      {/* Reward Items */}
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex items-center justify-between gap-4 p-4 bg-[#142423] rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
            🛡️
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-white">Safety</h3>
            <p className="text-sm text-gray-400">Projects Verified,</p>
            <p className="text-sm text-gray-400">Rewards Secured</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
            👏
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Task</h3>
            <p className="text-sm text-gray-400">Simple and Fun</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
            🎁
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Winning</h3>
            <p className="text-sm text-gray-400">Fast and Big</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleKeyValueCard;
