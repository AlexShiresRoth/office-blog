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
    <div className="flex flex-col w-full my-4">
      <div className="relative flex flex-col justify-center mt-28 md:mt-[10px] ">
        <div className="w-full h-full md:block">
          {imageURL && (
            <div className="w-full max-w-[1500px] h-[300px] md:h-[400px] overflow-hidden rounded relative">
              <Image
                src={imageURL}
                loader={contentfulLoader}
                layout="fill"
                className="object-cover object-center rounded"
              />
            </div>
          )}
        </div>

        <Container>
          <div className="flex flex-col absolute top-0 z-20 mt-8 mb-8 md:mt-0 justify-center md:justify-end h-full py-8 gap-2">
            <Link href={`/posts/${slug}`}>
              <a>
                <h1 className="text-3xl md:text-6xl md:leading-none max-w-sm md:max-w-xl md:mb-4 text-white font-bold hover:underline">
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
              <span className="text-sm text-slate-300 ml-2 font-semibold">
                {contributor?.name}
              </span>
              <span className="text-slate-50 mx-2">|</span>
              <DateComponent
                dateString={publishedAt}
                classNames="text-slate-400 italic text-xs md:text-sm  flex items-center"
              />
            </div>

            <Link href={`/posts/${slug}`}>
              <a>
                <button className="px-2 mt-2 py-2 text-xs md:text-sm border-[1px] border-slate-50 text-slate-50 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all">
                  View Post
                </button>
              </a>
            </Link>
          </div>
        </Container>

        <div className="absolute h-full w-full z-10 bg-slate-700/70 rounded"></div>
      </div>
    </div>
  );
};
