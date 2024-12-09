'use client';
import { useEffect, useState } from "react";
import Header from "../teacher_components/header";
import Sidebar from "../teacher_components/sidebar";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
import * as request from '@/app/axios/axios';
interface Course {
  courseId: number;
  courseName: string;
  language: string;
  description: string;
  price: string;
  averageQuizScore: string;
  topics: string[];
  creationTime: string;
}
const RoadMapPage = () => {
  const [userLogin, setUserLogin] = useRecoilState(userLoginState)
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  
  const handleCheckboxChange = (course: Course, isChecked: boolean) => {
        setSelectedCourses((prev) => {
            if (isChecked) {
                // Add the course if checked
                return [...prev, course];
            } else {
                // Remove the course if unchecked
                return prev.filter((c) => c.courseId !== course.courseId);
            }
        });
    };
  const fetchCourses = async () => {
    if (userLogin.token === '') return;
    const data = await request.get(`/course/teacherId/${userLogin.id}`);
    if (data.status === 200) {
      console.log(data.data);
      setCourses(data.data);
    } else {
      console.log(data.message);
    }
  }
  useEffect(() => {
    const userFromSessionRaw = sessionStorage.getItem('userLogin')
    if(!userFromSessionRaw) return
    setUserLogin(JSON.parse(userFromSessionRaw))  
  }, [])

  useEffect(() => {
    if (!userLogin) return
    fetchCourses();
  }, [userLogin]);

    useEffect(() => {
        const userFromSessionRaw = sessionStorage.getItem('userLogin')
        if(!userFromSessionRaw) return
        setUserLogin(JSON.parse(userFromSessionRaw))  
    }, [])
    
  return (
    <div className="bg-black">
      <div className="grid grid-cols-12 grid-rows-12 min-h-screen gap-4">
        {Header(userLogin.lastName + ' ' + userLogin.firstName)}
        {Sidebar(userLogin.firstName, userLogin.lastName)}
        <div className="bg-white col-span-10 row-span-10 mb-4 rounded-xl">
            <h1 className="bg-yellow-600 h-20 rounded-t-xl text-center text-3xl text-white font-semibold uppercase p-2 flex items-center justify-center">CREATE ROADMAP</h1>
            <div className="flex flex-col items-center p-4">
                <label htmlFor="" className="text-xl font-semibold">Roadmap Name</label>
                <input type="text" name="" id="" className="border-2 rounded-lg border-black p-1"/>
                <label htmlFor="" className="text-xl font-semibold">Roadmap description</label>
                <textarea id="description" name="description" className="border-2 rounded-lg border-black p-1" rows={4} cols={50}>
                </textarea>
                <label htmlFor="" className="text-xl font-semibold">Learing tip</label>
                <textarea id="description" name="description" className="border-2 rounded-lg border-black p-1" rows={4} cols={50}>
                </textarea>
                {/* COURSE CONTAINER */}
                <div className="flex justify-evenly w-full mt-10">
                  <div>
                    <label htmlFor="" className="text-xl font-semibold mb-4 block">
                      Choose Your Current Courses
                    </label>
                    <div className="space-y-2">
                        {courses.map((course) => (
                            <div
                                key={course.courseId}
                                className="gap-2 p-2 border rounded-md hover:bg-gray-50"
                            >
                                <input
                                    type="checkbox"
                                    name="course"
                                    id={`course-${course.courseId}`}
                                    className="h-5 w-5 text-blue-500 focus:ring focus:ring-blue-300"
                                    onChange={(e) => handleCheckboxChange(course, e.target.checked)}
                                />
                                <label
                                    htmlFor={`course-${course.courseId}`}
                                    className="text-gray-700 text-sm font-medium cursor-pointer"
                                >
                                    {course.courseName}
                                </label>
                            </div>
                        ))}
                    </div>
                  </div>
                  
                  {/* Selected courses */}
                  <div className="">
                      <label htmlFor="" className="text-xl font-semibold mb-4 block">
                      Selected Courses
                    </label>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          {selectedCourses.map((course, index) => (
                              <li key={course.courseId}>
                                  <span className="font-semibold">{index + 1}.</span> {course.courseName}
                              </li>
                          ))}
                      </ul>
                  </div>
                </div>

                <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg mt-4">
                    Create Roadmap
                </button>

            </div>
        </div>
      </div>
    </div>
  );
}
export default RoadMapPage;