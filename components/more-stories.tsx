import PostPreview from "./post-preview";
import { PostType } from "../types/post.types";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { BsLayoutThreeColumns, BsList } from "react-icons/bs";

export default function MoreStories({
  posts,
  title,
  link,
}: {
  posts: Array<PostType>;
  title: string;
  link: string | undefined;
}) {
  return (
    <section className="my-2 mb-6 ">
      <div className="py-2 flex justify-between items-center border-b-[1px] border-slate-100 mb-4">
        <div className="flex items-center">
          <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
            {title}
          </h2>
        </div>
        <div className="flex items-center">
          {link && (
            <Link
              href={link}
              className="text-blue-300 hover:underline flex items-center"
            >
              All Articles <BiRightArrowAlt size={14} />
            </Link>
          )}
        </div>
      </div>
      <div
        className={cn("flex gap-8 flex-col flex-wrap flex-auto transition-all")}
      >
        {posts.length > 0 &&
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.mainImage}
              publishedAt={post?.sys?.publishedAt}
              author={post.author}
              slug={post.slug}
              excerpt={post.blurb}
              categories={post.categories}
              expanded={false}
            />
          ))}
      </div>
    </section>
  );
}
