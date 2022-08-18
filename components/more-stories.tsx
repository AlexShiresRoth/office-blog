import PostPreview from "./post-preview";
import { PostType } from "../types/post.types";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

export default function MoreStories({ posts }: { posts: Array<PostType> }) {
  return (
    <section className="my-2 mb-6 ">
      <div className="py-2 flex justify-between items-center border-b-2 border-slate-100 mb-4">
        <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
          Recent Posts
        </h2>
        <Link href={`/posts/`}>
          <a className="text-blue-300 hover:underline flex items-center">
            More Articles <BiRightArrowAlt size={14} />
          </a>
        </Link>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
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
          />
        ))}
      </div>
    </section>
  );
}
