"use client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import { CommentDataProps } from "./GlobalContainer";

interface InputContainerProps {
  commentData: CommentDataProps[];
  setCommentData: React.Dispatch<React.SetStateAction<CommentDataProps[]>>;
  parentId?: string;
  setActiveCommentReplyId?: React.Dispatch<React.SetStateAction<string | null>>;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

const InputContainer: React.FC<InputContainerProps> = ({
  commentData,
  setCommentData,
  parentId,
  setActiveCommentReplyId,
  inputRef,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log(commentData, parentId);
    if (!text.trim()) return;
    const formattedId = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 24-hour format
    }).format(new Date());

    const newComment: CommentDataProps = {
      id: formattedId,
      text,
      replies: [],
    };
    setCommentData((prev) => {
      const temp = [...prev];
      if (!parentId) {
        return [...temp, newComment];
      } else {
        const addReply = (comments: CommentDataProps[]): CommentDataProps[] => {
          return comments.map((comment) => {
            if (comment.id === parentId) {
              return { ...comment, replies: [...comment.replies, newComment] };
            } else {
              return { ...comment, replies: addReply(comment.replies) };
            }
          });
        };

        return addReply(prev);
      }
    });
    setActiveCommentReplyId?.(null);
    setText("");
  };

  return (
    <div className="flex gap-4">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        placeholder="Enter Comment"
        className="bg-white text-black p-2 rounded-xl w-80"
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </div>
  );
};

export default InputContainer;
