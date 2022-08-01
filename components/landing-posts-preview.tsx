import Link from "next/link";
import React from "react";
import { PostType } from "../types/post.types";
import ContentfulImage from "./contentful-image";
import DateComponent from "./date";

type Props = {
  post: PostType;
};

const LandingPostPreview = ({ post }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="my-2">
        <ContentfulImage src={post?.mainImage?.url} height={500} width={1000} />
      </div>
      <DateComponent
        dateString={post?.date}
        classNames="text-slate-400 italic text-xs"
      />
      <Link href={`/posts/${post?.slug}`}>
        <a>
          <h3 className="text-slate-700 font-bold text-xl hover:underline hover:text-slate-500 transition-all">
            {post?.title}
          </h3>
        </a>
      </Link>
      <p className="text-slate-500 leading-relaxed my-2">{post?.blurb}</p>
      <Link href={`/posts/${post?.slug}`}>
        <a className="text-sm text-orange-500 underline">Read More</a>
      </Link>
    </div>
  );
};

export default LandingPostPreview;
