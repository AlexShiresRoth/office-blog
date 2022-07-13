import Link from "next/link";
import React from "react";
import Container from "./container";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import PostPreview from "./post-preview";

export const FeaturedPost = ({
  title,
  excerpt,
  slug,
  contributor,
  featured = true,
  category,
  date,
  imageURL,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col justify-center">
        <Container>
          <div className="flex flex-col absolute z-20 justify-center h-full py-8 gap-2">
            <Link href={`/posts/${slug}`}>
              <a>
                <h1 className="text-7xl text-white font-bold hover:underline">
                  {title}
                </h1>
              </a>
            </Link>
            <DateComponent
              dateString={date}
              classNames="text-slate-100 italic text-2xl"
            />
            <p className="text-slate-300 max-w-2xl my-2">{excerpt}</p>
            <Link href={`/posts/${slug}`}>
              <a>
                <button className="px-4 py-2 bg-orange-500 text-slate-50 rounded">
                  Read More
                </button>
              </a>
            </Link>
          </div>
        </Container>

        <div className="absolute h-full w-full z-10 bg-slate-700/60"></div>
        <CoverImage title={title} slug={slug} url={imageURL} />
      </div>
    </div>
  );
};
