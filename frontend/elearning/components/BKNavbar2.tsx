import React from "react";
import AvatarDropdown from "./AvatarDropdown";

const BKNavbar2 = () => {
  return (
    <nav className="bg-blue-500 flex items-center justify-between px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/logo/1725955904/logoBK.png"
          alt="Logo"
          className="w-10 h-10 m-2"
        />
        
      </div>

      {/* Menu */}
      <div className="flex flex-row gap-x-4 justify-between items-center h-full ">
        <div className="h-full py-4 border-gray-500 hover:bg-blue-700">
        <a
          href="#"
          className="text-white text-sm h-full mx-2"
        >
          Trang chủ
        </a>
        </div>

        <div className="h-full py-4  border-gray-500 hover:bg-blue-700">
        <a
          href="#"
          className="text-white text-sm h-full mx-2"
        >
          Khóa học của tôi
        </a>
        </div>

      </div>

      {/* User Avatar */}
      {/* <div className="relative">
        <div className="bg-black h-8 w-8 rounded-full cursor-pointer"></div> */}
        <div className="relative"> <AvatarDropdown avatar="https://plus.unsplash.com/premium_photo-1663933533712-eef7095f782b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODR8fHxlbnwwfHx8fHw%3D" name="Nguyễn Minh Triết" email="triet.nguyenhuongnoi@hcmut.edu.vn"/> </div>
      {/* </div> */}
      
      
    </nav>
  );
};

export default BKNavbar2;