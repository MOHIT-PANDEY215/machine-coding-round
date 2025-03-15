import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-gray-700 h-[48px] px-4 py-2 flex items-center justify-between shadow-md z-50">
        <div className="text-blue-200">Machine Coding Round</div>

        <div className="flex-grow flex justify-center">
          <Link href={"/"} className="text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
