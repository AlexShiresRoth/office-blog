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
    <div className="border-[1px] p-4 flex flex-col rounded grow flex-1">
      {coverImage && coverImage?.url && (
        <div className="w-full relative min-h-[200px] max-h-[400px] flex grow h-full mb-3">
          <Image
            src={coverImage.url}
            alt={title}
            loader={contentfulLoader}
            width={500}
            height={300}
            className="rounded object-center object-cover max-h-[400px] w-full"
          />
        </div>
      )}
      <div className="max-w-lg flex flex-col">
        <h3 className="text-2xl mb-3 leading-snug ">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline font-bold text-slate-500"
          >
            {title}
          </Link>
        </h3>

        <div className="my-2 flex items-center justify-start flex-wrap">
          {author && <Avatar name={author.name} picture={author.headshot} />}
          <span className="mx-2 text-slate-400">|</span>
          <DateComponent
            dateString={publishedAt}
            classNames="text-slate-400 italic text-sm"
          />
        </div>

        <p className="text-base leading-relaxed mb-4 text-slate-500">
          {!expanded ? excerpt.substring(0, 200) + "..." : excerpt}
        </p>

        <div className="flex mb-4 gap-2">
          {categories &&
            categories.map((category, index) => (
              <Link
                href={`/posts?search=${category}`}
                key={index}
                className="hover:bg-orange-300 hover:border-orange-500 hover:text-white transition-all px-4 py-2 bg-slate-100 border-[1px] rounded border-slate-200 text-slate-600 text-xs"
              >
                {category}
              </Link>
            ))}
        </div>
        <Link href={`/posts/${slug}`}>
          <button className=" font-bold underline rounded  text-orange-500 transition-all hover:text-orange-400 ">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
