// src/components/MarkdownContent.js
import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownContent = ({ content }) => {
  return (
    <div className="prose lg:prose-xl text-customTextBlack">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
