'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from '@/components/ui/button';
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
import * as request from '@/app/axios/axios';
import Header from "../../../teacher_components/header";
import Sidebar from "../../../teacher_components/sidebar";

const LectureSection = ({ params }: { params: Promise<{ sectionId: string }> }) => {
  const [rtnParams, setRtnParams] = useState<{ sectionId: string }>({ sectionId: "" });
  const [userLogin, setUserLogin] = useRecoilState(userLoginState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState<any | null>(null);

  useEffect(() => {
    const loadParams = async () => {
      const unwrappedParams = await params;
      return { sectionId: unwrappedParams.sectionId };
    };

    loadParams().then((res) => setRtnParams(res));
    const userFromSessionRaw = sessionStorage.getItem('userLogin');
    if (userFromSessionRaw) {
      setUserLogin(JSON.parse(userFromSessionRaw));
    }
  }, []);
  const [lectures, setLectures] = useState<any[]>([]); // Khởi tạo là mảng rỗng

  useEffect(() => {
    if (!rtnParams.sectionId) return;

    const fetchLectures = async () => {
      try {
        let response = await request.get(`lecture/section/${rtnParams.sectionId}`);
        // Kiểm tra nếu response là mảng
        if (Array.isArray(response)) {
          setLectures(response);
        } else {
          console.log("Dữ liệu không phải là mảng:", response);
          setLectures([]); // Đặt lại thành mảng rỗng nếu dữ liệu không đúng
        }
      } catch (error) {
        console.log("Failed to fetch lectures");
        setLectures([]); // Đặt lại thành mảng rỗng nếu lỗi
      }
    };

    fetchLectures();
  }, [rtnParams]);


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const newLecture = {
      id: lectures.length + 1,
      name: formData.get("lectureName") as string,
      state: formData.get("lectureState") as string,
      material: formData.get("lectureMaterial") as File | null, // Ensure correct type handling
      reference: formData.get("lectureReference") as string,
    };
  
    console.log("New Lecture Added:", newLecture);
    if (newLecture.material) {
      console.log("File: ", newLecture.material);
      console.log("File Name:", newLecture.material.name);
    }
  
    // Update state and close modal
    setLectures((prev) => [...prev, newLecture]);
    setIsModalOpen(false);
  };
  
  
  
  

  const handleEditClick = (lectureId: number) => {
    const lectureToEdit = lectures.find((l) => l.id === lectureId);
    if (lectureToEdit) {
      setSelectedLecture(lectureToEdit);
      setIsEditModalOpen(true);
    }
  };

  const handleEditFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLecture) return;

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const updatedLecture = {
      id: selectedLecture.id,
      name: formData.get("lectureName") as string,
      state: formData.get("lectureState") as string,
      material: formData.get("lectureMaterial") as File | null,
      reference: formData.get("lectureReference") as string,
    };

    // Update lecture in the state
    setLectures((prev) =>
      prev.map((l) => (l.id === updatedLecture.id ? updatedLecture : l))
    );

    console.log("Updated Lecture:", updatedLecture);
    setIsEditModalOpen(false);
  };

  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black">
      {Header(userLogin.lastName + ' ' + userLogin.firstName)}
      {Sidebar(userLogin.firstName, userLogin.lastName)}
      <div className="bg-white col-start-3 col-span-10 row-span-11 mb-4 rounded-xl overflow-hidden">
        <h1 className="bg-pink-600 rounded-t-xl text-center p-2 text-2xl text-white font-semibold uppercase">
          Lectures
        </h1>
        <div className="grid grid-rows-8 p-4">
          <div className="row-start-1 self-center flex justify-center mb-4">
            <Button onClick={() => setIsModalOpen(true)} className="bg-pink-600">
              Add Lecture
            </Button>
          </div>
          <table className="table-auto w-full border-collapse border border-gray-200 text-sm text-left">
            <thead>
              <tr className="bg-pink-100">
                <th className="border border-gray-300 px-4 py-2">Lecture ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">State</th>
                <th className="border border-gray-300 px-4 py-2">Material</th>
                <th className="border border-gray-300 px-4 py-2">Reference</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(lectures) && lectures.length > 0 ? (
              lectures.map((l, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-2">{l.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{l.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{l.state || "Pending"}</td>
                  <td className="border border-gray-300 px-4 py-2">{l.material ? l.material.name : "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">{l.reference || "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Button onClick={() => handleEditClick(l.id)} className="bg-yellow-500 text-white">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">No lectures available</td>
              </tr>
            )}

            </tbody>
          </table>
        </div>

        {/* Modal for editing lecture */}
        {isEditModalOpen && selectedLecture && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">Edit Lecture</h2>
              <form onSubmit={handleEditFormSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="lectureName"
                    className="w-full border px-2 py-1 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">State</label>
                  <input
                    type="text"
                    name="lectureState"
                    className="w-full border px-2 py-1 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Material</label>
                  <input
                    type="file"
                    name="lectureMaterial"
                    className="w-full border px-2 py-1 rounded"
                    required = {selectedLecture.material ? false : true}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Reference</label>
                  <input
                    type="text"
                    name="lectureReference"
                    className="w-full border px-2 py-1 rounded"
                    required = {false}
                  />
                </div>
                <div className="flex justify-between">
                  <Button type="submit" className="bg-pink-600">
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="bg-gray-500"
                  >
                    Cancel
                  </Button>
                </div>
              </form>

            </div>
          </div>
        )}
      </div>

      {/* Modal for adding new lecture */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Lecture</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="lectureName"
                  className="w-full border px-2 py-1 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  name="lectureState"
                  className="w-full border px-2 py-1 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Material</label>
                <input
                  type="file"
                  name="lectureMaterial"
                  className="w-full border px-2 py-1 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Reference</label>
                <input
                  type="text"
                  name="lectureReference"
                  className="w-full border px-2 py-1 rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <Button type="submit" className="bg-pink-600">
                  Add Quiz
                </Button>
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500"
                >
                  Cancel
                </Button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LectureSection;
