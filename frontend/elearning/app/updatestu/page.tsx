import React from "react";

const UpdateInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-center text-3xl  text-blue-600 mb-6">
          Cập nhật thông tin sinh viên
        </h1>
        <form className="space-y-6">
          {/* Họ và Tên */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Họ
              </label>
              <input
                type="text"
                defaultValue="Nguyễn"
                className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Tên
              </label>
              <input
                type="text"
                defaultValue="Minh Triết"
                className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Địa chỉ email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Địa chỉ email
            </label>
            <input
              type="email"
              defaultValue="triet.nguyenhuongnoi@hcmut.edu.vn"
              className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Mật khẩu
            </label>
            <input
              type="password"
              defaultValue="***********************"
              className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Tên ngân hàng và Số tài khoản */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Tên ngân hàng
              </label>
              <input
                type="text"
                defaultValue="VCB"
                className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Số tài khoản
              </label>
              <input
                type="text"
                defaultValue="ABC12345678"
                className="mt-2 block w-full rounded-lg shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-6 mt-8">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Xác nhận thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
