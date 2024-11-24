import BKNavbar from "@/components/BKNavbar";
import BKNavbar2 from "@/components/BKNavbar2";
import CCard from "@/components/CCard";
import ContributorCard from "@/components/ContributorCard";
import CourseCard from "@/components/CourseCard";
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <BKNavbar />

      <div className="w-full flex flex-1 flex-col grow h-screen">
        <div className="bg-blue-600 w-full h-2/4 flex flex-row justify-between">
          <div className="w-2/4 flex flex-col my-5 ml-8">
            <div className="flex flex-col grow">
              <span className="text-white px-2 text-5xl">Giới thiệu trang</span>
              <span className="text-white px-2">Mô tả trang:
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, mollitia! Laudantium perferendis aut quidem rem vitae fuga, esse repellat quos amet? Reiciendis, recusandae deleniti. Eaque animi vero harum sed aliquid voluptates accusamus qui itaque esse? Eius ut modi unde aspernatur.
              </span>
            </div>

            <button type="button" class="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Hãy tham gia cùng chúng tôi</button>
          </div>
          <div className="w-2/4 justify-end content-center my-5 flex mr-8">
            <Image className="w-2/3 h-full " src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D" width={2048} height={1080} />
          </div>
        </div>
        <div className="w-full flex-col content-center justify-center mt-4">
      <h2 className="text-center font-bold text-4xl justify-center items-center">Các khóa học bán chạy</h2>
      <div className="flex gap-x-8 mx-auto my-12 w-full justify-center">
      <CourseCard image="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" namecourse="Cấu trúc dữ liệu và giải thuật" teacher="Teacher Three?" price="₫1.099.000"/>
      <CourseCard image="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" namecourse="Mạng máy tính" teacher="Nguyễn Minh Triết" price="₫1.999.000"/>
      <CourseCard image="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA=" namecourse="Học máy" teacher="Nguyễn Quang Đức" price="₫2.999.000"/>
      </div>
      </div>
      <ContributorCard />
      </div>



    </>
  );
}
