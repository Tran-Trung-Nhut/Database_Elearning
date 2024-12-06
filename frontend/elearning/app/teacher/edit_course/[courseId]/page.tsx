'use client';
import { useEffect, useState } from "react";
import Header from "../../teacher_components/header"
import Sidebar from "../../teacher_components/sidebar"
import { Button } from '@/components/ui/button';
import { userLoginState } from "@/state";
import { useRecoilState } from "recoil";
import { useSearchParams } from "next/navigation";
import * as request from '@/app/axios/axios'
interface Section {
    id: string;
    name: string;
    numOfLecture: number;
    quiz: number;
    creTime: string;
    timeToComplete: string;
}


const SectionTable = ({ sections, onEdit }: { sections: Section[], onEdit: (index: number, id: string) => void }) => {
    return (
        <div className="p-4">
            {/* Table */}
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Section ID
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Section Name
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Number of Lectures
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Number of Quiz
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Created At
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Time to Complete
                        </th>
                        <th className="px-6 py-3 text-left uppercase text-sm font-medium">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sections.map((section, index) => (
                        <tr
                            key={section.id}
                            className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                        >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {index+1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{section.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.numOfLecture}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{section.quiz ? section.quiz : 0}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.creTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.timeToComplete} minutues
                            </td>
                            
                            <td className="px-6 py-4 text-sm">
                                <Button
                                    className="bg-hcmutLightBlue text-white px-4 py-2 rounded-md"
                                    onClick={() => onEdit(index+1, section.id)}
                                >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const editCoursePage = ({ params }: { params: Promise<{ courseId: string }> }) => {
    const searchParams = useSearchParams();
    const [rtnParams, setRtnParams] = useState<{ courseId: string }>({ courseId: "" });
    const loadParams = async () => {
        const unwrappedParams = await params;
        return { courseId: unwrappedParams.courseId };
    }
    const [sections, setSections] = useState([]);

    const fetchSections = async () => {
        // Fetch sections from API
        if (!rtnParams.courseId) return;
        
        try {
            let response = await request.get(`/section/course/${rtnParams.courseId}`);
            if (response.status === 200){
                console.log(response.data)
                setSections(response.data);
            }
            
        } catch (error) {
            
            console.log("Failed to fetch sections");
        }
    }
    useEffect(() => {
        loadParams().then((res) => setRtnParams(res));
    },[])
    useEffect(() => {
        fetchSections();
    }, [rtnParams]);

    const handleEdit = (index: number, id: string) => {
        alert(`Edit section with ID: ${index}`);
        console.log(id);
    };

    const handleAddSection = async () => {
        if (confirm("Are you sure you want to add a new section?") === false) return;
        const newSection = {
            name: `New Section ${sections.length + 1}`,
            numOfLecture: 0,
            timeToComplete: 0,
            courseId: parseInt(rtnParams.courseId),
            teacherId: parseInt(userLogin.id)
        };

        try {
            let res = await request.post(`/section/create`, newSection);
            if (res.status === 200){
                console.log("Successfully added section");
                fetchSections();
            }
        } catch (error) {
            console.log("Failed to add section");
        }

        console.log(newSection);
    };

    const [userLogin, setUserLogin] = useRecoilState(userLoginState)
    
    useEffect(() => {
            const userFromSessionRaw = sessionStorage.getItem('userLogin')
            if(!userFromSessionRaw) return
            setUserLogin(JSON.parse(userFromSessionRaw))  
        }, [])

    return (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black">
            {Header(userLogin.lastName + ' ' + userLogin.firstName)}
            {Sidebar(userLogin.firstName, userLogin.lastName)}
            {/* content */}
            <div className="bg-white col-start-3 col-span-10 row-span-10 mb-4 rounded-xl">
                {/* Header */}
                <div className="bg-hcmutLightBlue rounded-t-xl text-center text-3xl text-white font-semibold uppercase items-center p-5">
                    <h1>Course title</h1>
                    <Button className="bg-hcmutDarkBlue mt-3" onClick={handleAddSection}>Thêm học phần</Button>
                </div>
                
                <div className="">
                    <SectionTable sections={sections} onEdit={handleEdit}/>
                </div>
            </div>
        </div>
    )
}
export default editCoursePage