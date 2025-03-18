"use client";
import React, { useEffect, useRef } from "react";
import { CommentDataProps } from "./GlobalCommentContainer";
import { Button } from "@heroui/react";
import InputContainer from "./InputContainer";

interface CommentProps {
  comment: CommentDataProps;
  commentData: CommentDataProps[];
  setCommentData: React.Dispatch<React.SetStateAction<CommentDataProps[]>>;
  activeCommentReplyId: string | null;
  setActiveCommentReplyId: React.Dispatch<React.SetStateAction<string | null>>;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  commentData,
  setCommentData,
  activeCommentReplyId,
  setActiveCommentReplyId,
}) => {
  const isReplyActive = activeCommentReplyId === comment.id;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isReplyActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReplyActive]);

  return (
    <div className="min-w-[300px] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mx-2">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 break-words">
          <strong className="text-blue-500">{comment.id}</strong>:{" "}
          {comment.text}
        </p>
      </div>
      {comment.replies.length > 0 && (
        <div className="flex w-max mt-2">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              commentData={commentData}
              setCommentData={setCommentData}
              activeCommentReplyId={activeCommentReplyId}
              setActiveCommentReplyId={setActiveCommentReplyId}
            />
          ))}
        </div>
      )}
      <div className="mt-3">
        {isReplyActive ? (
          <div>
            <InputContainer
              commentData={commentData}
              setCommentData={setCommentData}
              parentId={comment.id}
              setActiveCommentReplyId={setActiveCommentReplyId}
              inputRef={inputRef}
            />
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                className="bg-red-500 text-white hover:bg-red-600 transition"
                onPress={() => setActiveCommentReplyId(null)}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            size="sm"
            className="mt-2 bg-blue-500 text-white hover:bg-blue-600 transition"
            onPress={() => setActiveCommentReplyId(comment.id)}
          >
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export default Comment;
