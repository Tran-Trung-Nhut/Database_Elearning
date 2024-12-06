import BKNavbar2 from "@/components/BKNavbar2";
import Footer from "@/components/Footer";
import TableCourse from "@/components/TableCourse";

const Mycourse = () =>{
    return(
        <>
            <BKNavbar2 />
            <div className="px-8 py-8 flex flex-col items-center justify-center">
                <h2 className="font-bold text-4xl mb-4">Khóa học của tôi</h2>
                <div className="w-full">
                    <TableCourse />
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Mycourse;