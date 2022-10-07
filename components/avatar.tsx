import AvatarImage from "./avatar-image";
import ContentfulImage from "./contentful-image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4 rounded">
        {picture && picture?.url && (
          <AvatarImage src={picture?.url} layout="fill" alt={name} />
        )}
      </div>
      <div className="text-sm font-semibold text-slate-500">{name}</div>
    </div>
  );
}
