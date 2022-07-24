import Image from "next/image";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 80} `;
};

const AvatarImage = (props) => {
  return (
    <Image
      loader={contentfulLoader}
      {...props}
      className="object-cover object-center rounded-full"
    />
  );
};

export default AvatarImage;
