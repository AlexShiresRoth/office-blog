import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contentfulLoader } from "./contentful-image";
import DateComponent from "./date";

const ArticlePreview = ({ content }) => {
  return (
    <div className="w-full my-2 flex items-start gap-4">
      <div className="w-2/3 ">
        <div className="flex flex-col w-full">
          <Link href={`/posts/${content?.slug}`}>
            <a>
              <h4 className="font-bold font-serif text-slate-600 text-base hover:underline">
                {content?.title}
              </h4>
            </a>
          </Link>
          <p className="font-semibold text-slate-400 text-sm mb-[2px]">
            {content?.author?.name}
          </p>
          <p className="text-xs mb-2">
            {content?.blurb?.substring(0, 100) + "..."}
          </p>
          <DateComponent
            dateString={content?.date}
            classNames="text-xs italic text-slate-300"
          />
        </div>
      </div>
      <div className="w-[90px] h-full flex flex-col justify-start">
        <Image
          src={content?.mainImage?.url}
          layout="responsive"
          width={300}
          height={300}
          loader={contentfulLoader}
          className="object-cover rounded"
        />
      </div>
    </div>
  );
};

export default ArticlePreview;
