import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./container";
import ContentfulImage, { contentfulLoader } from "./contentful-image";

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
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <section className="">
      {/* background image */}
      <div className="block md:hidden ">
        <Image
          loader={contentfulLoader}
          src={backgroundImage.url}
          height={1200}
          width={2300}
          layout="responsive"
          className="object-cover object-center h-screen md:min-h-full"
        />
      </div>
      {/* background image */}
      <Container>
        <div
          className={`relative -mt-36 md:mt-0 flex flex-col md:items-left justify-start object-center object-cover ${
            rendered ? "opacity-100" : "opacity-10 p-20"
          } transition-all duration-700  bg-white shadow-lg md:shadow-none rounded-sm min-h-full`}
        >
          {/* background image */}
          <div className="hidden md:block ">
            <Image
              loader={contentfulLoader}
              src={backgroundImage.url}
              height={1000}
              width={2300}
              layout="responsive"
              className="object-cover object-center h-screen md:min-h-full"
            />
          </div>
          {/* background image */}

          <div className="md:bg-white w-full md:w-2/4 gap-2 flex flex-col items-center md:items-stretch justify-center relative md:absolute p-4 h-full">
            <div className="w-2/3 md:w-full">
              <h1 className=" font-serif text-slate-600 text-2xl lg:text-4xl xl:text-7xl xl:leading-normal font-semibold md:font-normal text-center md:text-left">
                {title}
              </h1>
            </div>
            <div className=" w-1/4 md:w-3/4 h-0.5 bg-orange-500/50 md:bg-slate-500 mb-4" />
            <div className="flex flex-row items-center gap-2">
              {services?.map((service, index) => (
                <p key={service} className="text-slate-500 text-sm md:text-xl">
                  {service} {index !== services.length - 1 && "|"}
                </p>
              ))}
            </div>
            <div>
              <p className="text-slate-500 text-sm md:text-xl">{tagline}</p>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <a>
                  <button className="px-6 py-2 bg-orange-400 text-xl text-slate-100 transition-all hover:bg-orange-500">
                    {cta}
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
