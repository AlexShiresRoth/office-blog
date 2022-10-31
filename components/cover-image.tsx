import ContentfulImage from "./contentful-image";
import Link from "next/link";

export default function CoverImage({
  title,
  url,
  slug,
  height = 500,
  width = 2000,
}) {
  if (!url && !slug) return null;

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
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
