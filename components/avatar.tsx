import AvatarImage from "./avatar-image";
import ContentfulImage from "./contentful-image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 ">
        {picture && picture?.url && (
          <AvatarImage src={picture?.url} alt={name} />
        )}
      </div>
      <div className="text-sm font-semibold text-slate-500">{name}</div>
    </div>
  );
}
