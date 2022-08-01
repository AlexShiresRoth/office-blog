import React from "react";
import Container from "./container";
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
    <section className="py-4">
      <Container>
        <div
          className="flex flex-col items-left justify-start object-center object-cover "
          style={{
            backgroundImage: `url(${backgroundImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
          }}
        >
          <div className="bg-white w-full md:w-2/4 gap-2 flex flex-col justify-center h-full">
            <h1 className="font-serif text-slate-600 text-7xl font-regular  ">
              {title}
            </h1>
            <div className="w-3/4 h-0.5 bg-slate-500 mb-4 " />
            <div className="flex flex-row items-center gap-2">
              {services?.map((service, index) => (
                <p key={service} className="text-slate-500 text-xl">
                  {service} {index !== services.length - 1 && "|"}
                </p>
              ))}
            </div>
            <div>
              <p className="text-slate-500 text-xl">{tagline}</p>
            </div>
            <div className="mt-4">
              <button className="px-6 py-2 bg-orange-400 text-xl text-slate-100 transition-all hover:bg-orange-500">
                {cta}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
