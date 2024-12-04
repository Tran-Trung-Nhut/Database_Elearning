"use client";
import React,{ useState } from 'react';

function AvatarDropdown(props: any) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
<div>
<img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src={props.avatar} alt="User dropdown" onClick={toggleDropdown} />

{isOpen && (
<div id="userDropdown" className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{props.name}</div>
      <div className="font-medium truncate">{props.email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hồ sơ</a>
      </li>
      {/* <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li> */}
    </ul>
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Đăng xuất</a>
    </div>
</div>
)}
</div>
    );
}

export default AvatarDropdown;