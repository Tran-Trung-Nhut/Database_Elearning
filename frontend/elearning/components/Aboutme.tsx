import React from "react";
const Aboutme = () => {
return(
    <div
            className="flex flex-col md:flex-row items-center justify-between bg-white border-black border-2 text-black w-4/5 max-w-4xl rounded-lg shadow-lg p-6 space-y-4 md:space-y-0"
          >
            <div className="flex-1">
              <h2 className="text-xl font-bold">Nguyễn Minh Triết</h2>
              <p className="mt-2">MSSV: 123123123123123</p>
              <p className="mt-2">Sinh viên ngành: Khoa học và kỹ thuật máy tính</p>
              <p className="mt-2">Tình trạng: FA</p>
              <p className="mt-2">Mô tả:</p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
          </div>
);
};
export default Aboutme;