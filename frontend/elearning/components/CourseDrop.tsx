"use client";
import React, { useState } from "react";

function CourseDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full my-5 ">
      {/* Main Dropdown Toggle */}
      <div
        className="flex items-center justify-between bg-gray-100 p-4 border border-black rounded-3xl cursor-pointer mx-8"
        onClick={toggleDropdown}
      >
        <span className="text-lg font-medium">{props.title}</span>
        <span className="transform transition-transform duration-200">
          {isOpen ? "▼" : "▶"}
        </span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className=" bg-gray-50 border border-gray-300 rounded-3xl mx-8">
          
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-100 cursor-pointer"><a href="#">URL/Content</a></div>
            <div className="p-4 hover:bg-gray-100 cursor-pointer"><a href="#">URL/Content</a></div>
            <div className="p-4 hover:bg-gray-100 cursor-pointer"><a href="#">URL/Content</a></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;