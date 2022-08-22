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
  const [layoutColumns, setLayoutColumns] = useState<boolean>(true);
  const [showHint, setShowHint] = useState<boolean>(false);

  return (
    <section className="my-2 mb-6 ">
      <div className="py-2 flex justify-between items-center border-b-[1px] border-slate-100 mb-4">
        <div className="flex items-center">
          <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
            {title}
          </h2>
          <div className="relative flex items-center">
            <button
              onClick={() => setLayoutColumns(!layoutColumns)}
              onMouseEnter={() => setShowHint(true)}
              onMouseLeave={() => setShowHint(false)}
              className="ml-4 bg-slate-100 rounded p-2 text-slate-600"
            >
              {layoutColumns ? <BsList /> : <BsLayoutThreeColumns />}
            </button>
            <div
              className={cn(
                "text-xs bottom-[40px] left-5 bg-white shadow-lg absolute p-2 w-[100px] flex justify-center items-center text-slate-500 italic transition-all",
                {
                  "opacity-0 -z-50": !showHint,
                  "opacity-100": showHint,
                }
              )}
            >
              <p>
                {layoutColumns
                  ? "Toggle post layout to list view"
                  : "Toggle post layout to column view"}
              </p>
              <span className="w-0 h-0 border-l-transparent border-r-transparent border-l-[10px] border-r-[10px] border-t-[10px] border-t-white  absolute top-full rounded left-0"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {link && (
            <Link href={link}>
              <a className="text-blue-300 hover:underline flex items-center">
                All Articles <BiRightArrowAlt size={14} />
              </a>
            </Link>
          )}
        </div>
      </div>
      <div
        className={cn("flex gap-4 transition-all", {
          "flex-col": !layoutColumns,
          "flex-col md:flex-row": layoutColumns,
        })}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.mainImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.blurb}
            categories={post.categories}
            expanded={!layoutColumns}
          />
        ))}
      </div>
    </section>
  );
}
