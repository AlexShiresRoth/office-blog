import ContentfulImage from "./contentful-image";
import Link from "next/link";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={2000}
      height={500}
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
