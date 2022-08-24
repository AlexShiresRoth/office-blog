import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories = [],
}) {
  return (
    <div className="border-b-[1px] border-slate-100">
      <div className="mb-4 md:mb-16 sm:mx-0 mt-10 w-full h-full hidden md:block">
        <CoverImage title={title} url={coverImage?.url} height={600} slug="" />
      </div>
      <div className="mb-4 md:mb-16 sm:mx-0 mt-10 w-full h-full md:hidden block ">
        <CoverImage
          title={title}
          slug={""}
          url={coverImage?.url}
          height={1000}
        />
      </div>

      <PostTitle>{title}</PostTitle>
      <div className="">
        {author && <Avatar name={author.name} picture={author.headshot} />}
      </div>
      <div className="mb-6 text-lg">
        <DateComponent
          dateString={date}
          classNames="italic text-slate-400 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 mb-4">
        {categories.map((category, index) => (
          <Link key={index} href={`/posts?=search${category}`}>
            <a className="hover:bg-orange-300 hover:border-orange-500 hover:text-white transition-all px-4 py-2 bg-slate-100 border-[1px] rounded border-slate-200 text-slate-600 text-xs">
              {category}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
