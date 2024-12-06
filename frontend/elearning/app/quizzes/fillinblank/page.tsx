import FillInTheBlank from "@/components/Fillinblank";
import React from "react";
const QuizPage = () => {
    return (
      <FillInTheBlank question="Điền từ còn thiếu vào câu sau: 1 + 1 = ___"
      currentPage={1}
      totalPages={5} />
    );
  };
  
  export default QuizPage;