'use client'
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactMarkdown from "react-markdown";
import {Button} from '@heroui/button';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!\nType here...");
  const [preview, setPreview] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-4  w-full">
      <div className="flex gap-2">
        <Button onClick={() => setPreview(false)} >
          Edit
        </Button>
        <Button onClick={() => setPreview(true)} >
          Preview
        </Button>
      </div>

      <div className="w-full border rounded-lg p-4 bg-gray-100 dark:bg-gray-800">
        {preview ? (
          <ReactMarkdown >{markdown}</ReactMarkdown>
        ) : (
          <TextareaAutosize
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full p-2 bg-transparent resize-none outline-none max-h-[400px] overflow-scroll"
            minRows={6}
          />
        )}
      </div>
    </div>
  );
}
