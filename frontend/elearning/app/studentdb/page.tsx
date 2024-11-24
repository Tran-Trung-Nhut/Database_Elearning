
import AvatarDropdown from "@/components/AvatarDropdown";
import BKNavbar2 from "@/components/BKNavbar2";
import ContributorCard from "@/components/ContributorCard";
import CourseDropdown from "@/components/CourseDrop";

const Studentdb = () =>{
  return (
    <>
    <BKNavbar2 />
    <div className="bg-white flex flex-col items-center h-full grow">
      <h2 className="font-bold text-5xl my-4">Tên khóa học</h2>
      <div className="w-full flex flex-col items-center">
      <CourseDropdown title="Chung"/>
      <CourseDropdown title="Chương 1"/>
      <CourseDropdown title="Chương 2"/>
      <CourseDropdown title="Chương 3"/>
      </div>
    </div>
    <ContributorCard />
    </>
  );
}
export default Studentdb;