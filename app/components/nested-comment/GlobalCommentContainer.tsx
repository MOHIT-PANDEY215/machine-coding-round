"use client";
import React, { useState } from "react";
import InputContainer from "./InputContainer";
import CommentContainer from "./CommentContainer";

export interface CommentDataProps {
  text: string;
  replies: CommentDataProps[];
  id: string;
  parentId?: string;
}

const GlobalCommentContainer: React.FC = () => {
  const [commentData, setCommentData] = useState<CommentDataProps[]>([]);

  return (
    <div className="flex flex-col items-center gap-8 w-full mx-auto px-4 sm:px-8 py-6">
      <InputContainer commentData={commentData} setCommentData={setCommentData} />
      <CommentContainer commentData={commentData} setCommentData={setCommentData} />
    </div>
  );
};

export default GlobalCommentContainer;
