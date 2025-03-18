"use client";
import React, { useState, useRef, useEffect } from "react";
import { CommentDataProps } from "./GlobalCommentContainer";
import Comment from "./Comment";

interface CommentContainerProps {
  commentData: CommentDataProps[];
  setCommentData: React.Dispatch<React.SetStateAction<CommentDataProps[]>>;
}

const CommentContainer: React.FC<CommentContainerProps> = ({
  commentData,
  setCommentData,
}) => {
  const [activeCommentReplyId, setActiveCommentReplyId] = useState<
    string | null
  >(null);
  const commentContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to right when replies increase
  useEffect(() => {
    if (commentContainerRef.current) {
      commentContainerRef.current.scrollLeft =
        commentContainerRef.current.scrollWidth;
    }
  }, [commentData]);

  return (
    <div
      ref={commentContainerRef}
      className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg flex flex-col"
    >
      <div className="flex flex-col gap-8 w-fit sm:w-full">
        {commentData.length > 0 ? (
          <>
            {commentData.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                commentData={commentData}
                setCommentData={setCommentData}
                activeCommentReplyId={activeCommentReplyId}
                setActiveCommentReplyId={setActiveCommentReplyId}
              />
            ))}
          </>
        ) : (
          <div>No comment available</div>
        )}
      </div>
    </div>
  );
};

export default CommentContainer;
