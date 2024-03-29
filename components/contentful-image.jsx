import Image from "next/image";

export const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 80} `;
};

const ContentfulImage = (props) => {
  return (
    <Image
      loader={contentfulLoader}
      {...props}
      width={500}
      height={500}
      className="object-cover object-center"
      layout="responsive"
    />
  );
};

export default ContentfulImage;
