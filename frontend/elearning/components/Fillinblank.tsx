"use client";
import React, { useState } from "react";

type FillInTheBlankProps = {
  id: number,
  answer: string,
  question: string;
  currentPage: number;
  totalPages: number;
};

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({
  id,
  answer,
  question,
  currentPage,
  totalPages,
}) => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds timer

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="px-4 py-2 border rounded-lg border-red-500 text-red-500">
            Câu trả lời:{" "}
            <span className="font-semibold">{userAnswer || "Chưa nhập"}</span>
          </div>
          <div className="px-4 py-2 border rounded-lg border-red-500 text-red-500">
            Thời gian còn lại: {timeLeft}s
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-100 p-4 rounded-lg text-gray-700 mb-6">
          <p className="text-lg font-medium">{question}</p>
        </div>

        {/* Input Answer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nhập câu trả lời:
          </label>
          <input
            type="text"
            value={userAnswer}
            onChange={handleAnswerChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập câu trả lời của bạn..."
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            disabled={currentPage === 1}
          >
            Trang trước
          </button>
          <div className="text-gray-600 font-medium">
            Trang {currentPage}/{totalPages}
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            disabled={currentPage === totalPages}
          >
            Trang tiếp
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillInTheBlank;
