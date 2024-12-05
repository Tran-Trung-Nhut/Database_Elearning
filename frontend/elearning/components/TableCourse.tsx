"use client"
import React, { useState } from "react";
function TableCourse() {
    return (
        <div className="relative overflow-x-auto">
            <div className="p-4">
            <form className="max-w-md mx-auto">   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên hoặc mã môn học..." required />
                </div>
            </form>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Mã môn học
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tên môn học
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Giảng viên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Giá tiền
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày đăng kí
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Trạng thái
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #0000
                        </th>
                        <td className="px-6 py-4">
                            Cấu trúc dữ liệu và giải thuật
                        </td>
                        <td className="px-6 py-4">
                            A
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            20/11/2024
                        </td>
                        <td className="px-6 py-4">
                            ????
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #0001
                        </th>
                        <td className="px-6 py-4">
                            Mạng máy tính
                        </td>
                        <td className="px-6 py-4">
                            B
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            20/11/2024
                        </td>
                        <td className="px-6 py-4">
                            ????
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #0002
                        </th>
                        <td className="px-6 py-4">
                            Cơ sở dữ liệu
                        </td>
                        <td className="px-6 py-4">
                            C
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            20/11/2024
                        </td>
                        <td className="px-6 py-4">
                            ????
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default TableCourse;