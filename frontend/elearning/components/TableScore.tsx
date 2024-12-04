"use client"
import React, { useState } from "react";
function TableScore() {
    return (
<div class="relative overflow-x-auto">
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
                    Điểm trung bình
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
                    Nguyễn Văn A
                </td>
                <td class="px-6 py-4">
                    5.0
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
                    Cơ sở dữ liệu
                </td>
                <td class="px-6 py-4">
                    Nguyễn Văn B
                </td>
                <td class="px-6 py-4">
                    5.0
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
                    Mạng máy tính
                </td>
                <td class="px-6 py-4">
                    Nguyễn Văn C
                </td>
                <td class="px-6 py-4">
                    5.0
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
export default TableScore;