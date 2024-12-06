"use client"
import React, { useEffect, useState } from "react";
import * as request from "../app/axios/axios"
import { set } from "react-hook-form";
import { CourseWithTeacherNameDto } from "@/app/dtos/course.dto";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
function TableCourse() {
    const [userLogin, setUserLogin] = useRecoilState(userLoginState)
    const [courses, setCourses] = useState<CourseWithTeacherNameDto[]>([])
    const fetchCourse = async () => {
        let data = await request.get(`/join/studentId/3`)
        console.log(data.data);
        console.log(userLogin);
        if (data.status === 200) {
            setCourses(data.data)
            console.log(courses);
        }
        else {
            console.log(data.message);
        }
    }

    useEffect(() => {
        const userFromSessionRaw = sessionStorage.getItem('userLogin')
        if(!userFromSessionRaw) return
        setUserLogin(JSON.parse(userFromSessionRaw))  
    }, [])

    useEffect(() => {
        fetchCourse()

    }, [userLogin])

    return (
        <div className="relative overflow-x-auto">
            <div className="p-4">
            <form className="max-w-md mx-auto">   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
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
                    {
                        courses.map((course, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {course.courseId}
                                </th>
                                <td className="px-6 py-4">
                                    {course.courseName}
                                </td>
                                <td className="px-6 py-4">
                                    {course.teacherFirstName + " " + course.teacherLastName}
                                </td>
                                <td className="px-6 py-4">
                                    {course.price}
                                </td>
                                <td className="px-6 py-4">
                                    {course.creationTime.toString()}
                                </td>
                                <td className="px-6 py-4">
                                    {course.description}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
export default TableCourse;