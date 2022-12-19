import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import Image from "next/image";
import { contentfulLoader } from "./contentful-image";

export default function PostPreview({
  title,
  coverImage,
  publishedAt,
  excerpt,
  author,
  slug,
  categories,
  expanded = false,
}) {
  return (
    <div className=" gap-4 md:gap-12  flex flex-col md:flex-row  md:items-center">
      {coverImage && coverImage?.url && (
        <div className="w-full md:w-1/4 min-h-[150px] md:min-h-[200px] relative  ">
          <Image
            src={coverImage.url}
            alt={title}
            loader={contentfulLoader}
            fill={true}
            className="rounded object-center object-cover"
          />
        </div>
      )}
      <div className=" flex flex-col justify-center gap-2">
        <h3 className="text-2xl leading-snug ">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline font-bold text-slate-700"
          >
            {title}
          </Link>
        </h3>

        <div className=" flex items-center justify-start flex-wrap">
          {author && <Avatar name={author.name} picture={author.headshot} />}
          <span className="mx-2 text-slate-400">|</span>
          <DateComponent
            dateString={publishedAt}
            classNames="text-slate-400 italic text-xs"
          />
        </div>

        <p className="text-base leading-relaxed  text-slate-500 max-w-lg">
          {!expanded ? excerpt.substring(0, 240) + "..." : excerpt}
        </p>

        <div className="flex gap-2 flex-wrap">
          {categories &&
            categories.map((category, index) => (
              <Link
                href={`/posts?search=${category}`}
                key={index}
                className="flex p-1 hover:bg-orange-300 hover:border-orange-500 hover:text-white transition-all  bg-slate-50 border-2 rounded border-slate-200 text-slate-400 text-xs"
              >
                {category}
              </Link>
            ))}
        </div>
        <Link
          href={`/posts/${slug}`}
          className="text-sm font-bold underline rounded  text-orange-300 transition-all hover:text-orange-400 "
        >
          Read Post
        </Link>
      </div>
    </div>
  );
}
