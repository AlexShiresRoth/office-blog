import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <div className="p-4 border-[1px] border-slate-200">
      <div className="mb-5 rounded">
        <img
          src={coverImage.url}
          alt={title}
          className="rounded object-center object-cover w-full max-h-56"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline font-bold text-slate-800">{title}</a>
        </Link>
      </h3>

      <p className="text-lg leading-relaxed mb-4 text-slate-500">
        {excerpt.substring(0, 120) + "..."}
      </p>

      {author && <Avatar name={author.name} picture={author.headshot} />}
      <div className="text-lg mb-4 mt-2">
        <DateComponent
          dateString={date}
          classNames="text-slate-400 italic text-sm"
        />
      </div>
      <div className="flex mb-4">
        {categories &&
          categories.map((category, index) => (
            <span
              className="p-2 bg-slate-100 rounded text-slate-800 font-bold italic text-xs mr-2"
              key={index}
            >
              {category}
            </span>
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
