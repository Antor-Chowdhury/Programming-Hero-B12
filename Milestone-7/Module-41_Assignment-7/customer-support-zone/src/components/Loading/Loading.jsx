import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-gray-300 border-t-purple-500 animate-spin"></div>
          <div className="absolute inset-0 h-16 w-16 rounded-full animate-ping border-4 border-purple-200"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-700 text-xl font-semibold tracking-wider animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
