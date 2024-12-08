import React from "react";
type Course = {
    name: string;
    instructor: string;
    date: string;
    completed: boolean; // Trạng thái hoàn thành
  };
  
  const courses: Course[] = [
    { name: "Tên khóa học 1", instructor: "Giảng viên 1", date: "Date 1", completed: false },
    { name: "Tên khóa học 2", instructor: "Giảng viên 2", date: "Date 2", completed: true },
    { name: "Tên khóa học 3", instructor: "Giảng viên 3", date: "Date 3", completed: false },
    { name: "Tên khóa học 4", instructor: "Giảng viên 4", date: "Date 4", completed: true },
    { name: "Tên khóa học 5", instructor: "Giảng viên 5", date: "Date 5", completed: true },
    { name: "Tên khóa học 6", instructor: "Giảng viên 6", date: "Date 6", completed: true },
    { name: "Tên khóa học 6", instructor: "Giảng viên 6", date: "Date 6", completed: true },
    { name: "Tên khóa học 6", instructor: "Giảng viên 6", date: "Date 6", completed: true },
    { name: "Tên khóa học 6", instructor: "Giảng viên 6", date: "Date 6", completed: true },
    { name: "Tên khóa học 6", instructor: "Giảng viên 6", date: "Date 6", completed: true },
  ];
const Roadmap = () => {
  return (
    <div className=" p-4 h-full">
    
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
    {courses.map((course, index) => (index % 2 === 0  ? (
        <div key={index} className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 text-gray-800 bg-white border-blue-500 border rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">{course.name}</h3>
                <p className="mt-2 leading-6">{course.instructor}</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">{course.date}</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-blue-500 rounded-t-full bg-gradient-to-b ">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-red-500 border-4 border-blue-500 rounded-full top-1/2"></div> {/*Chỗ này kiểm tra xem khóa học đã hoàn thành chưa*/}
            </div>
        </div>) :  (<div key={index} className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-blue-500"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-green-500 border-4 border-blue-500 rounded-full top-1/2"></div> {/*Chỗ này kiểm tra xem khóa học đã hoàn thành chưa*/}
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white border-blue-500 border rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">{course.name}</h3>
                <p className="mt-2 leading-6">{course.instructor}</p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">{course.date}</span>
            </div>
        </div>)
    ))}
        
        
        
        
    </div>
</div>
  );
};

export default Roadmap;
