import React from "react";
import ContentfulImage from "./contentful-image";

type Props = {
  backgroundImage: {
    url: string;
  };
  cta: string;
  services: string[];
  title: string;
  tagline: string;
};

const HeroSection = ({
  backgroundImage,
  cta,
  tagline,
  title,
  services,
}: Props) => {
  return (
    <section className="py-10">
      <div
        className="flex flex-col items-left justify-end object-center object-cover h-96"
        style={{
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundSize: "cover",
          backgroundPointerEvents: "center",
        }}
      >
        <div className="bg-white p-10 w-1/2">
          <h1 className="text-slate text-4xl font-bold mb-2">{title}</h1>
          <div className="flex flex-row items-center gap-2">
            {services?.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
