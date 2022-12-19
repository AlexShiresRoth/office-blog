import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";
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
  return (
    <div className="flex flex-col w-full my-4">
      <div className=" relative flex flex-col justify-center mt-28 md:mt-[10px] ">
        <div className="w-full h-full md:block">
          {imageURL && (
            <div className="w-full max-w-[1500px] min-h-[300px] md:min-h-[330px] overflow-hidden rounded relative">
              <Image
                src={imageURL}
                loader={contentfulLoader}
                alt="featured post image"
                fill={true}
                className="object-cover object-center rounded w-full max-h-[500px]"
              />
            </div>
          )}
        </div>

        <Container>
          <div className="flex flex-col absolute top-0 z-20  justify-center  h-full  gap-2">
            <Link
              href={`/posts/${slug}`}
              className="text-2xl md:text-6xl md:leading-none max-w-sm md:max-w-2xl md:mb-4 text-white font-bold hover:underline"
            >
              {title}
            </Link>
            <div className="flex items-center flex-wrap">
              <div className="w-[35px]">
                {contributor?.headshot && (
                  <div className="block relative w-8 h-8 rounded-full">
                    <Image
                      src={contributor.headshot.url}
                      alt={contributor.name}
                      fill={true}
                      className="object-cover object-center rounded-full w-full h-full"
                      loader={contentfulLoader}
                    />
                  </div>
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

            <div className="mt-4 ">
              <Link
                href={`/posts/${slug}`}
                className="px-2 py-2 text-xs md:text-sm border-[1px] border-slate-50 text-slate-50 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all"
              >
                View Post
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute h-full w-full z-10 bg-slate-700/70 rounded"></div>
      </div>
    </div>
  );
};
