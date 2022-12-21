import PostPreview from "./post-preview";
import { PostType } from "../types/post.types";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import cn from "classnames";

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
    <section className="mt-6 mb-6 flex flex-col">
      <div className="py-2 flex justify-between items-center border-b-[1px] border-slate-800 mb-6">
        <div className="flex items-center">
          <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-800 font-serif">
            {title}
          </h2>
        </div>
        <div className="flex items-center mr-8">
          {link && (
            <Link
              href={link}
              className="text-slate-400 hover:underline flex items-center"
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
