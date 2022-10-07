import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "./avatar";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";
import CoverImage from "./cover-image";
import DateComponent from "./date";

export const FeaturedPost = ({
  title,
  excerpt,
  slug,
  contributor,
  featured = true,
  category,
  publishedAt,
  imageURL,
}) => {
  console.log("featured post", publishedAt);
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col justify-center mt-[40px] md:mt-0">
        <div className="w-full h-full hidden md:block">
          {imageURL && (
            <CoverImage title={title} slug={slug} url={imageURL} height={600} />
          )}
        </div>
        <div className="w-full h-full md:hidden block pt-16">
          {imageURL && (
            <CoverImage
              title={title}
              slug={slug}
              url={imageURL}
              height={1300}
            />
          )}
        </div>
        <Container>
          <div className="flex flex-col absolute top-0 z-20 mt-8 md:mt-0 justify-center h-full py-8 gap-2">
            <Link href={`/posts/${slug}`}>
              <a>
                <h1 className="text-5xl md:text-7xl md:leading-none text-white font-bold hover:underline">
                  {title}
                </h1>
              </a>
            </Link>
            <div className="flex items-center">
              <div className="w-[30px]">
                {contributor?.headshot && (
                  <Image
                    src={contributor.headshot.url}
                    alt={contributor.name}
                    layout="responsive"
                    width={40}
                    height={40}
                    className="rounded-full"
                    loader={contentfulLoader}
                  />
                )}
              </div>
              <span className="text-xs text-slate-300 ml-2 font-semibold">
                {contributor?.name}
              </span>
            </div>
            <DateComponent
              dateString={publishedAt}
              classNames="text-slate-400 italic text-xs md:text-2xl mb-2"
            />
            <p className="hidden md:block text-slate-300 max-w-xs md:max-w-2xl my-2 text-sm md:text-base">
              {excerpt}
            </p>
            <Link href={`/posts/${slug}`}>
              <a>
                <button className="px-4 py-2 text-xs md:text-base bg-orange-500 text-slate-50 rounded-sm">
                  View Post
                </button>
              </a>
            </Link>
          </div>
        </Container>

        <div className="absolute h-full w-full z-10 bg-slate-700/70"></div>
      </div>
    </div>
  );
};
