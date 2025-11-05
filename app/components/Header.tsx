"use client";
import React from "react";
import { FiBell, FiUser } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm mb-6">
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 object-contain bg-white rounded-full border border-gray-200 shadow-sm"
        />
        <span className="text-xl font-semibold text-gray-800">Digiwezo</span>
      </div>

      <h1 className="text-2xl font-extrabold text-primary text-center">
        BOOKER ACADEMY
      </h1>

      <div className="flex items-center gap-6">
        <button className="relative">
          <FiBell className="text-yellow-400 text-xl hover:scale-110 transition-transform duration-200" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full h-2 w-2"></span>
        </button>

        <div className="flex items-center gap-2">
          <FiUser className="text-yellow-400 text-xl" />
          <span className="text-gray-700 font-medium">Hi, Peter</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
