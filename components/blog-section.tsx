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
  console.log("posts?", posts);
  return (
    <div className="flex flex-col w-full mb-10">
      <Container>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-1/4 mr-2">
            <h6 className="text-sm text-orange-400">{content?.preHeading}</h6>
            <h1 className="font-bold font-serif text-4xl text-slate-700">
              {content?.title}
            </h1>
            <p className="text-slate-500 w-3/4 my-2 text-xl">
              {content?.contentItemsCollection?.items[0]?.text}
            </p>
            <Link href="/blog/">
              <a className="mt-2 text-orange-400 underline">
                {content?.contentItemsCollection?.items[0]?.cta}
              </a>
            </Link>
          </div>
          <div className="w-3/4 flex gap-6">
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
