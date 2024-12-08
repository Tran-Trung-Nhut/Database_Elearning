"use client"
import React, { useEffect, useState } from "react";
import * as request from "../app/axios/axios"
import { set } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
import { useRouter } from "next/navigation";
import { JoinFullDto } from "@/app/dtos/join.dto";
function TableCourse() {
    const [userLogin, setUserLogin] = useRecoilState(userLoginState)
    const [courses, setCourses] = useState<JoinFullDto[]>([])
    const router = useRouter()
    const fetchCourse = async () => {
        let data = await request.get(`/join/studentId/${userLogin.id}`)
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
                        <th scope="col" className="px-6 py-3 text-center">
                            Mã môn học
                        </th>
                        <th scope="col" className="px-6 py-3 text-center ">
                            Tên môn học
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Giảng viên
                        </th>
                        <th scope="col" className="px-6 py-3 text-center ">
                            GPA
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Ngày đăng ký
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Tiến độ
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Tùy chọn 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {course.courseId}
                                </th>
                                <td className="px-6 py-4 text-center">
                                    {course.courseName}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {course.teacherFirstName + " " + course.teacherLastName}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {course.progress === 100? `${course.GPA}`: `Chưa có kết quả`}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {course.creationTime.toString()}
                                </td>
                                <td className={`px-6 py-4 text-center ${course.progress === 100? "text-green-500": `text-yellow-500`}`}>
                                    {course.progress === 100? "Đã hoàn thành": `Hoàn thành ${course.progress}%`}
                                </td>
                                <button
                                    type="button"
                                    className="text-blue-500 px-6 py-4 text-center"
                                    onClick={() =>
                                        router.push(`/studentdb?course=${encodeURIComponent(JSON.stringify(course))}`)
                                    }
                                    >
                                    Xem khóa học
                                </button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
export default TableCourse;