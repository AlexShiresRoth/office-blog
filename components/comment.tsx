import React from "react";
import { Comment_Type } from "../types/comment.types";

type Props = {
  comment: Comment_Type;
};

const Comment = ({ comment }: Props) => {
    if (!comment?.approved) return null;

  return (
    <div className="my-2 bg-gray-100  p-2 px-4 rounded  flex flex-col">
      <h2 className="font-semibold text-lg text-slate-500">{comment?.title}</h2>
      <h3 className="italic text-gray-500 text-sm">{comment?.author}</h3>
      <p className="italic text-gray-400 text-xs">{comment?.commentDate}</p>
      <p className="my-2 text-gray-400">{comment?.body}</p>
    </div>
  );
};

export default Comment;
