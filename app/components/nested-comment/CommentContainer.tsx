"use client";
import React, { useState } from "react";
import { CommentDataProps } from "./GlobalContainer";
import Comment from "./Comment";

interface CommentContainerProps {
  commentData: CommentDataProps[];
  setCommentData: React.Dispatch<React.SetStateAction<CommentDataProps[]>>;
}

const CommentContainer: React.FC<CommentContainerProps> = ({
  commentData,
  setCommentData,
}) => {
  const [activeCommentReplyId, setActiveCommentReplyId] =
    useState<string|null>(null);

  return (
    <div>
      {commentData.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            commentData={commentData}
            setCommentData={setCommentData}
            activeCommentReplyId={activeCommentReplyId}
            setActiveCommentReplyId={setActiveCommentReplyId}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;
