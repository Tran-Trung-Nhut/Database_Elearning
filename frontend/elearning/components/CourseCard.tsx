'use client'; // Add this line at the top to mark this component as a client component
import React, { useState } from 'react';

function CourseCard(props: any) {
  const [modal, setModal] = useState(false);
  
  // Toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white" onClick={toggleModal}>
        <img
          className="w-full h-48 object-cover"
          src={props.image || "https://vnn-imgs-f.vgcloud.vn/2022/03/07/08/7-khoa-hoc-truc-tuyen-ve-khoa-hoc-du-lieu-tot-nhat-cho-sinh-vien.jpg"} // Replace with your image URL
          alt="Course preview"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">{props.courseName}</h2>
          <p className="text-gray-600 text-sm">
            {props.teacher} 
            </p>
          <p className="font-semibold text-xl text-gray-800">
            {props.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </p>
        </div>
      </div>

      {modal && (
        <>
          {/* Modal Backdrop */}
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setModal(false)}></div>

          {/* Modal Content */}
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen"
          >
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-800">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {props.namecourse}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                  onClick={() => setModal(false)}
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 space-y-4">
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Nội dung khóa học 1
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Nội dung khóa học 2
                </p>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-center p-5 border-t border-gray-200 dark:border-gray-600 space-x-4">
              <button
                  type="button"
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-4 transition transform hover:scale-105"
                  onClick={() => setModal(false)}
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition transform hover:scale-105"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseCard;
