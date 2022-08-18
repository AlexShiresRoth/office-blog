import ContentfulImage from "./contentful-image";
import Link from "next/link";

export default function CoverImage({
  title,
  url,
  slug,
  height = 500,
  width = 2000,
}) {
  const image = (
    <ContentfulImage
      width={width}
      height={height}
      alt={`Cover Image for ${title}`}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
