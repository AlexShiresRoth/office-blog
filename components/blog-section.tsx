import Link from "next/link";
import React from "react";
import { PostType } from "../types/post.types";
import Container from "./container";
import LandingPostPreview from "./landing-posts-preview";
import MoreStories from "./more-stories";

type Props = {
  content: {
    title: string;
    preHeading: string;
    contentItemsCollection: {
      items: Array<{
        cta: string;
        slug: string;
        text: string;
        title: string;
      }>;
    };
  };
  posts: Array<PostType>;
};

const BlogSection = ({ content, posts }: Props) => {
  return (
    <div className="flex flex-col w-full mb-10 mt-20 md:mt-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-4 w-full  items-start">
          <div className="flex flex-col w-full md:w-1/4 mr-2 relative">
            <div className="flex flex-col p-4 border-4 border-slate-800 bg-white relative z-10">
              <h6 className="text-sm text-yellow-500 font-semibold">
                {content?.preHeading}
              </h6>
              <h1 className="font-bold font-serif text-4xl text-slate-800">
                {content?.title}
              </h1>
              <p className="text-slate-400 w-3/4 my-2 text-xl">
                {content?.contentItemsCollection?.items[0]?.text}
              </p>
              <Link href="/blog/" className="mt-2 text-yellow-500 underline">
                {content?.contentItemsCollection?.items[0]?.cta}
              </Link>
            </div>
            <span className="h-full w-full absolute z-0 bg-yellow-300 translate-x-2 translate-y-3" />
          </div>
          <div className="w-full md:w-3/4 flex gap-6 flex-col md:flex-row">
            {posts.map((post: PostType) => (
              <LandingPostPreview post={post} key={post?.slug} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
