import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block ">
        {author && <Avatar name={author.name} picture={author.headshot} />}
      </div>
      <div className="mb-6 text-lg">
        <DateComponent
          dateString={date}
          classNames="italic text-slate-400 text-sm"
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} slug="" />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.headshot} />}
        </div>
      </div>
    </>
  );
}
