"use client";
import React, { useEffect, useRef, useState } from "react";
import { CommentDataProps } from "./GlobalContainer";
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
  const isReplyActive = activeCommentReplyId === comment.id
  const inputRef = useRef<HTMLInputElement|null>(null);

  useEffect(() => {
    if (isReplyActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isReplyActive]);

  return (
    <div className="border-l-2 pl-4 my-2">
      <p className="text-lg">
        <strong>{comment.id}:</strong> {comment.text}
      </p>
      {comment.replies.length > 0 && (
        <div className="ml-4">
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
      {isReplyActive ? (
        <InputContainer
          commentData={commentData}
          setCommentData={setCommentData}
          parentId={comment.id}
          setActiveCommentReplyId={setActiveCommentReplyId}
          inputRef={inputRef}
        />
      ) : (
        <div className="pt-4">
          <Button size="sm" onPress={() => setActiveCommentReplyId(comment.id)}>
            Reply
          </Button>
        </div>
      )}
    </div>
  );
};

export default Comment;
