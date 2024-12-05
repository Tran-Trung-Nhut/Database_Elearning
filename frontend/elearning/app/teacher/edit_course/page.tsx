'use client';
import { useState } from "react";
import Header from "../teacher_components/header"
import Sidebar from "../teacher_components/sidebar"
import { Button } from '@/components/ui/button';
interface Section {
    id: string;
    name: string;
    lectures: number;
    quiz: number;
    timestamp: string;
    timeToComplete: string;
}


const SectionTable = ({ sections, onEdit }: { sections: Section[], onEdit: (id: string) => void }) => {
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
                                {section.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{section.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.lectures}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{section.quiz}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.timestamp}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                                {section.timeToComplete}
                            </td>
                            
                            <td className="px-6 py-4 text-sm">
                                <Button
                                    className="bg-hcmutLightBlue text-white px-4 py-2 rounded-md"
                                    onClick={() => onEdit(section.id)}
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

const editCoursePage = () => {
    const [sections, setSections] = useState([
        {
            id: "1",
            name: "Introduction",
            lectures: 5,
            timestamp: "2024-12-01 12:00",
            timeToComplete: "15 mins",
            quiz: 2,
        },
        {
            id: "2",
            name: "Chapter 1",
            lectures: 8,
            timestamp: "2024-12-02 14:30",
            timeToComplete: "30 mins",
            quiz: 3,
        },
    ]);
    const handleEdit = (id: string) => {
        alert(`Edit section with ID: ${id}`);
    };

    const handleAddSection = () => {
        const newSection = {
            id: (sections.length + 1).toString(),
            name: `New Section ${sections.length + 1}`,
            lectures: 0,
            timestamp: new Date().toISOString().split("T")[0],
            timeToComplete: "0 mins",
            quiz: 0,
        };
        setSections([...sections, newSection]);
    };


    return (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black">
            <Header></Header>
            <Sidebar></Sidebar>
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