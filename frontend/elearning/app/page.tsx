"use client"
import BKNavbar from "@/components/BKNavbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import BKNavbar2 from "@/components/BKNavbar2";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
import { useEffect } from "react";

export default function Home() {

  const [userLogin, setUserLogin] = useRecoilState(userLoginState)
  const isLoggedIn : boolean = userLogin.id !== "" ? true : false;
  const router = useRouter()

  useEffect(() => {
    if(userLogin.id !== "") return
    
    const userFromSessionRaw = sessionStorage.getItem('userLogin')

    if(!userFromSessionRaw) return

    setUserLogin(JSON.parse(userFromSessionRaw))  
  })

  return (
    <>
      {isLoggedIn ? (
        <BKNavbar2 />
      ) : (
        <BKNavbar />
      )}

      <div className="w-full flex flex-col min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 flex flex-row items-center justify-between px-8 py-12">
          <div className="flex-1 pr-8">
            {isLoggedIn ? (
              <>
                <h1 className="text-white text-5xl font-extrabold mb-4">
                  Chào mừng, <span className="underline">{userLogin.lastName}</span>!
                </h1>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Cảm ơn bạn đã tin tưởng đồng hành cùng chúng tôi. Tiếp tục
                  khám phá và nâng cao kỹ năng của bạn với các khóa học đặc sắc
                  dưới đây!
                </p>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="bg-white text-blue-600 font-medium text-sm px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                    onClick={() => router.push('/mycourse')}
                  >
                    Xem khóa học của tôi
                  </button>
                  <button
                    type="button"
                    className="bg-transparent border border-white text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
                  >
                    Cập nhật hồ sơ
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-white text-5xl font-bold mb-4">
                  Giới thiệu trang
                </h1>
                <p className="text-white text-lg leading-relaxed mb-6">
                  Đây là một nền tảng học tập dành cho tất cả mọi người, nơi bạn
                  có thể tham gia các khóa học chất lượng cao. Hãy cùng chúng tôi
                  khám phá và nâng cao kỹ năng của bạn ngay hôm nay!
                </p>
                <button
                  type="button"
                  className="bg-white text-blue-600 font-medium text-sm px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                >
                  Tham gia cùng chúng tôi
                </button>
              </>
            )}
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D"
              alt="Học tập"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-gray-50 py-16">
          <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
            Các khóa học bán chạy
          </h2>
          <div className="flex flex-wrap justify-center gap-8 px-8">
            <CourseCard
              image="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
              namecourse="Cấu trúc dữ liệu và giải thuật"
              teacher="Nguyễn Văn A"
              price="₫1.099.000"
            />
            <CourseCard
              image="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
              namecourse="Mạng máy tính"
              teacher="Nguyễn Minh Triết"
              price="₫1.999.000"
            />
            <CourseCard
              image="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyP4c-s5cSZy1nv1K0xn1ynC-Xuc1sY4Y29ZQqcrztA="
              namecourse="Học máy"
              teacher="Nguyễn Quang Đức"
              price="₫2.999.000"
            />
          </div>
        </section>

        {/* Footer */}
        <section className="bg-white">
          <Footer />
        </section>
      </div>
    </>
  );
}
