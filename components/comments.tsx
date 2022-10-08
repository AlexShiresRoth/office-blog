import React from "react";
import { Comment_Type } from "../types/comment.types";
import Comment from "./comment";

type Props = {
  comments: Array<Comment_Type>;
};

const Comments = ({ comments }: Props) => {
  return (
    <div className="flex flex-col my-4 gap-2">
      <div>
        <h2 className="font-semibold text-slate-500">Comments {comments.filter(c => c.approved).length}</h2>
      </div>
      {comments.map((comment) => {
        return <Comment key={comment?.sys?.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
