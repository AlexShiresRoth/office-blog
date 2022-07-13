import PostPreview from "./post-preview";
import { PostType } from "../types/post.types";
import Link from "next/link";

export default function MoreStories({ posts }: { posts: Array<PostType> }) {
  return (
    <section className="my-4">
      <div className="flex justify-between items-center">
        <h2 className="my-4 text-2xl italic md:text-2xl font-bold tracking-tighter leading-tight text-slate-400 font-serif">
          Recent Posts
        </h2>
        <Link href={`/posts/`}>
          <a className="text-slate-50 border-2 rounded bg-blue-700 p-2 px-4">
            More Articles
          </a>
        </Link>
      </div>
      <div className="flex gap-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.mainImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.blurb}
          />
        ))}
      </div>
    </section>
  );
}
