import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md animate-pulse">
      <div className="h-32 sm:h-48 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      <div className="mt-3 w-2/3 h-5 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      <div className="mt-2 w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
    </div>
  );
};

export default Skeleton;
