import React from "react";
import MarkdownContent from "../Markdown";

const Quiz = ({ quizContent }) => {
  console.log(quizContent);
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <MarkdownContent content={quizContent} />
    </div>
  );
};
export default Quiz;
