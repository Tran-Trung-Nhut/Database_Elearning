"use client"
import React, { useState } from "react";

type QuizProps = {
  question: string;
  options: string[];
  currentPage: number;
  totalPages: number;
};

const Quiz: React.FC<QuizProps> = ({
  question,
  options,
  currentPage,
  totalPages,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds timer as an example

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="px-4 py-2 border rounded-lg border-red-500 text-red-500">
            Đáp án đã chọn:{" "}
            <span className="font-semibold">
              {selectedAnswer || "Chưa chọn"}
            </span>
          </div>
          <div className="px-4 py-2 border rounded-lg border-red-500 text-red-500">
            Thời gian còn lại: {timeLeft}s
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-100 p-4 rounded-lg text-gray-700 mb-6">
          <p className="text-lg font-medium">{question}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={`px-4 py-2 rounded-lg shadow-md text-white font-semibold ${
                selectedAnswer === option
                  ? "bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } focus:outline-none`}
            >
              {option}
            </button>
          ))}
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

export default Quiz;