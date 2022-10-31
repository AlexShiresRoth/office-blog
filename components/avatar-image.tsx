import Image from "next/image";

const contentfulLoader = ({ src, width, height, quality }) => {
  return `${src}?w=${width}&q=${quality || 80}`;
};

const AvatarImage = (props) => {
  return (
    <div className="overflow-hidden rounded-full relative block w-8 h-8">
      <Image
        loader={contentfulLoader}
        {...props}
        fill={true}
        className="object-cover object-center "
      />
    </div>
  );
};

export default AvatarImage;
