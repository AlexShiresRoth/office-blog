import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";
import Image from "next/image";
import { contentfulLoader } from "./contentful-image";

export default function PostHeader({
  title,
  coverImage,
  publishedAt,
  author,
  categories = [],
}) {
  return (
    <div className="border-b-[1px] border-slate-100">
      <div className="mb-4 md:mb-16 sm:mx-0 mt-10 w-full h-full hidden md:block rounded">
        {coverImage && (
          <div className="block relative w-full rounded min-h-[300px] max-h-[500px]">
            <Image
              title={title}
              src={coverImage?.url}
              loader={contentfulLoader}
              fill={true}
              alt={title}
              className="rounded object-cover object-center"
            />
          </div>
        )}
      </div>
      <div className="mb-4 md:mb-16 sm:mx-0 mt-10 w-full h-full md:hidden block rounded">
        <CoverImage
          title={title}
          slug={""}
          url={coverImage?.url}
          height={1000}
          width={2000}
        />
      </div>

      <PostTitle>{title}</PostTitle>
      <div className="">
        {author && <Avatar name={author.name} picture={author.headshot} />}
      </div>
      <div className="mb-6 text-lg">
        <DateComponent
          dateString={publishedAt}
          classNames="italic text-slate-400 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {categories &&
          categories?.length > 0 &&
          categories.map((category, index) => (
            <Link
              key={index}
              href={`/posts?search=${category}`}
              className="hover:bg-orange-300 hover:border-orange-500 hover:text-white transition-all p-2 bg-slate-100 border-[1px] rounded border-slate-200 text-slate-600 text-xs"
            >
              {category}
            </Link>
          ))}
      </div>
    </div>
  );
}
