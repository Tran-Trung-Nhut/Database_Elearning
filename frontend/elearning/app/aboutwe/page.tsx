import Aboutme from '@/components/Aboutme';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b flex flex-col">
      <header className="text-center py-4 bg-cover bg-center text-white bg-blue-500" >
        <h1 className="text-3xl font-bold">Về chúng tôi</h1>

      </header>

      <main className="flex flex-col items-center space-y-8 mt-8">
        {[1, 2, 3].map((item) => (
        //   <div
        //     key={item}
        //     className="flex flex-col md:flex-row items-center justify-between bg-white border-black border-2 text-black w-4/5 max-w-4xl rounded-lg shadow-lg p-6 space-y-4 md:space-y-0"
        //   >
        //     <div className="flex-1">
        //       <h2 className="text-xl font-bold">Nguyễn Minh Triết</h2>
        //       <p className="mt-2">MSSV: 123123123123123</p>
        //       <p className="mt-2">Sinh viên ngành: Khoa học và kỹ thuật máy tính</p>
        //       <p className="mt-2">Tình trạng: FA</p>
        //     </div>
        //     <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
        //   </div>
        <Aboutme key={item} />
        ))}
      </main>
    </div>
  );
};

export default AboutPage;