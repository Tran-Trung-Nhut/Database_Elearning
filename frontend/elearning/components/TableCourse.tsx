"use client"
import React, { useState } from "react";
function TableCourse() {
    return (
        

<div class="relative overflow-x-auto">
<div class="p-4">
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Mã môn học
                </th>
                <th scope="col" class="px-6 py-3">
                    Tên môn học
                </th>
                <th scope="col" class="px-6 py-3">
                    Giảng viên
                </th>
                <th scope="col" class="px-6 py-3">
                    Giá tiền
                </th>
                <th scope="col" class="px-6 py-3">
                    Ngày đăng kí
                </th>
                <th scope="col" class="px-6 py-3">
                    Trạng thái
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #0000
                </th>
                <td class="px-6 py-4">
                    Cấu trúc dữ liệu và giải thuật
                </td>
                <td class="px-6 py-4">
                    A
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    20/11/2024
                </td>
                <td class="px-6 py-4">
                    ????
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #0001
                </th>
                <td class="px-6 py-4">
                    Mạng máy tính
                </td>
                <td class="px-6 py-4">
                    B
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    20/11/2024
                </td>
                <td class="px-6 py-4">
                    ????
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #0002
                </th>
                <td class="px-6 py-4">
                    Cơ sở dữ liệu
                </td>
                <td class="px-6 py-4">
                    C
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    20/11/2024
                </td>
                <td class="px-6 py-4">
                    ????
                </td>
            </tr>
        </tbody>
    </table>
</div>
    );
};
export default TableCourse;