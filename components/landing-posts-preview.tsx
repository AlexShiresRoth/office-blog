import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostType } from "../types/post.types";
import { contentfulLoader } from "./contentful-image";
import DateComponent from "./date";

type Props = {
  post: PostType;
};

const LandingPostPreview = ({ post }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="my-2">
        {post?.mainImage ? (
          <Image
            src={post?.mainImage?.url}
            height={500}
            width={1000}
            alt="post image"
            loader={contentfulLoader}
            className="object-cover object-center h-screen md:min-h-full w-full max-h-[300px] "
          />
        ) : null}
      </div>
      <DateComponent
        dateString={post?.sys?.publishedAt}
        classNames="text-slate-400 italic text-xs"
      />
      <Link
        href={`/posts/${post?.slug}`}
        className="text-slate-700 font-bold text-xl hover:underline hover:text-slate-500 transition-all"
      >
        {post?.title}
      </Link>
      <p className="text-slate-500 leading-relaxed my-2">{post?.blurb}</p>
      <Link
        href={`/posts/${post?.slug}`}
        className="text-sm text-yellow-500 underline hover:text-yellow-700 transition-all"
      >
        Read More
      </Link>
    </div>
  );
};

export default LandingPostPreview;
