
"use client"
import BKNavbar2 from "@/components/BKNavbar2";
import CourseDropdown from "@/components/CourseDrop";
import Footer from "@/components/Footer";
import { CourseWithTeacherNameDto } from "../dtos/course.dto";
import { useSearchParams } from "next/navigation";
import { SectionDto } from "../dtos/section.dto";
import { useEffect, useState } from "react";
import request from "../axios/axios";

const Studentdb = () =>{  
  const [sections, setSections] = useState<SectionDto[]>([])
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");

  const course: CourseWithTeacherNameDto | null = courseParam
    ? JSON.parse(courseParam)
    : null;

  const fetchSection = async () => {
    try {
      const response = await request.get(`/section/course/${course?.courseId}`);
      setSections(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSection()
  }, [searchParams])

  return (
    <>
      <BKNavbar2 />
      <div className="bg-white flex flex-col items-center h-full grow">
        <h2 className="font-bold text-5xl my-4 text-black">{course?.courseName}</h2>
        <div className="w-full flex flex-col items-center text-black">
          <CourseDropdown title="Chung" description={course?.description} sectionId=""/>
          {sections.map((section, index)=> (
            <CourseDropdown key={index+1} title={`Chương ${index + 1}: ${section.name}`} sectionId={section.id}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Studentdb;