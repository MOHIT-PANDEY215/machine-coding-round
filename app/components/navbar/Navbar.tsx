import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 px-6 py-3 shadow-md z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-lg sm:text-xl font-semibold text-blue-300">
          Machine Coding Round
        </h1>

        <nav className="flex gap-4">
          <Link
            href="/"
            className="text-white text-sm sm:text-base hover:text-blue-400 transition duration-200"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
