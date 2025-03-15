'use client'
import React, { useState } from "react";
import InputContainer from "./InputContainer";
import CommentContainer from "./CommentContainer";

export interface CommentDataProps{
    text:string,
    replies:CommentDataProps[],
    id:string,
    parentId?:string
}

const GlobalContainer:React.FC=()=>{

    const [commentData,setCommentData] = useState<CommentDataProps[]>([])

    return (
        <div className="flex flex-col gap-8 w-full px-8">
            <InputContainer commentData={commentData} setCommentData={setCommentData} />
            <CommentContainer commentData={commentData} setCommentData={setCommentData}/>
        </div>
    )
}

export default GlobalContainer