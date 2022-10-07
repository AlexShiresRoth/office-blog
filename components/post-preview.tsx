import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

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
    <div className="p-4 border-[1px] border-slate-200 flex-1">
      <div className="mb-5 rounded">
        {coverImage && coverImage?.url && (
          <img
            src={coverImage.url}
            alt={title}
            className="rounded object-center object-cover w-full max-h-56"
          />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline font-bold text-slate-800">{title}</a>
        </Link>
      </h3>

      <p className="text-lg leading-relaxed mb-4 text-slate-500">
        {!expanded ? excerpt.substring(0, 150) + "..." : excerpt}
      </p>

      {author && <Avatar name={author.name} picture={author.headshot} />}
      <div className="text-lg mb-4 mt-2">
        <DateComponent
          dateString={publishedAt}
          classNames="text-slate-400 italic text-sm"
        />
      </div>
      <div className="flex mb-4 gap-2">
        {categories &&
          categories.map((category, index) => (
            <Link href={`/posts?search=${category}`} key={index}>
              <a className="hover:bg-orange-300 hover:border-orange-500 hover:text-white transition-all px-4 py-2 bg-slate-100 border-[1px] rounded border-slate-200 text-slate-600 text-xs">
                {category}
              </a>
            </Link>
          ))}
      </div>
      <Link href={`/posts/${slug}`}>
        <a>
          <button className=" font-bold underline rounded  text-orange-500 transition-all hover:text-orange-400 ">
            Read more
          </button>
        </a>
      </Link>
    </div>
  );
}
