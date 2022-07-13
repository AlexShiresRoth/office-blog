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
}) {
  return (
    <div>
      <div className="mb-5 rounded">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>

      {author && <Avatar name={author.name} picture={author.headshot} />}
      <div className="text-lg mb-4 mt-2">
        <DateComponent dateString={date} classNames="text-slate-400 italic" />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Link href={`/posts/${slug}`}>
        <a>
          <button className=" font-bold border-2 border-orange-500 rounded px-4 py-2 text-slate-500 transition-all hover:bg-orange-500 hover:text-slate-50">
            Read more
          </button>
        </a>
      </Link>
    </div>
  );
}
