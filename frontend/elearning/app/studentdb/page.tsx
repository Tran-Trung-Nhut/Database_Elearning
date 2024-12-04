
import BKNavbar2 from "@/components/BKNavbar2";
import CourseDropdown from "@/components/CourseDrop";
import Footer from "@/components/Footer";

const Studentdb = () =>{
  return (
    <>
      <BKNavbar2 />
      <div className="bg-white flex flex-col items-center h-full grow">
        <h2 className="font-bold text-5xl my-4 text-black">Tên khóa học</h2>
        <div className="w-full flex flex-col items-center text-black">
          <CourseDropdown title="Chung"/>
          <CourseDropdown title="Chương 1"/>
          <CourseDropdown title="Chương 2"/>
          <CourseDropdown title="Chương 3"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Studentdb;