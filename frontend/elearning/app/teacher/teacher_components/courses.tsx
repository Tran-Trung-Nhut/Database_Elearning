'use client'
import { Button } from '@/components/ui/button';
import { useEffect, useState, useContext } from 'react';
import * as request from '../../axios/axios'

const CoursesContent = (teacherId: string ) => {
  interface Course {
    courseId: string;
    courseName: string;
    description: string;
    creationTime: string;
    price: string;
  }

  const [courses, setCourses] = useState<Course[]>([]);
  
  const fetchCourses = async () => {
    if (!teacherId) return;
    const response = await request.get(`/course/teacherId/${teacherId}`);
    
    if (response.status === 200) {
      setCourses(response.data);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [teacherId]);

  if (!teacherId || !courses) {
    return <div>Teacher not found</div>;
  }

  console.log(courses);
  
  return (
    <div className="bg-white row-span-4 col-start-3 col-end-13 grid grid-cols-12 p-4 rounded-xl items-start shadow-xl">
      <div className="bg-white p-4 col-start-1 col-end-13 rounded-xl">        
        <h1 className="text-2xl font-bold mb-6">Courses</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* COURSE CARDS */}
            {
              courses.map((course: Course) => {
                return (
                  <div
                    key={course.courseId}
                    className="bg-grayBG col-span-4 h-56 rounded-xl flex flex-col justify-between overflow-hidden shadow-xl"
                  >
                    <div className="bg-hcmutLightBlue text-center text-white py-2">
                      <span className="text-2xl font-semibold uppercase">{course.courseName} </span>
                    </div>
                    <div className="p-4 flex-grow">
                      <h2 className="text-lg font-bold mb-2">{course.courseName}</h2>
                      <p className="text-sm text-gray-400">{course.description}</p>
                      <p className="text-sm text-gray-400">{course.creationTime}</p>
                    </div>
                    <div className="px-4 py-2 flex justify-between items-center">
                      <Button className="border-2 bg-hcmutDarkBlue" onClick={() => {
                        window.open(`/teacher/edit_course/${course.courseId}`, '_blank')
                      }}>Edit</Button>
                      <span className="text-sm font-semibold ">{course.price} VND</span>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default CoursesContent;
