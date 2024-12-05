'use client';

import Image from 'next/image';
import aba from "../../public/aba.jpg";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-xl col-start-1 col-end-3 row-span-10 flex flex-col mb-4">
      {/* Profile Section */}
      <div className="bg-gray-200 text-center py-6 rounded-t-xl">
        <Image src={aba} alt="Profile Picture" className="w-20 h-20 mx-auto rounded-full" />
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Thay Ba</h2>
        <p className="text-sm text-gray-500">master CS</p>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center px-6 py-3 hover:bg-gray-300 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">🌐</div>
          <span className="ml-4 text-gray-700 font-medium">My course</span>
        </div>
        <div className="flex items-center px-6 py-3 hover:bg-gray-300 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">💲</div>
          <span className="ml-4 text-gray-700 font-medium">My revenue</span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-200 text-center py-3 rounded-b-xl">
        <span className="text-sm text-gray-600">Team information</span>
      </div>
    </div>
  );
};

export default Sidebar;
