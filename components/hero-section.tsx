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
  logo: string;
};

const HeroSection = ({
  backgroundImage,
  cta,
  tagline,
  title,
  services,
  logo,
}: Props) => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <section className=" flex items-center justify-center relative py-16">
      <div
        className={`w-11/12 p-4 md:p-0 mt-24   md:mt-0 flex flex-col items-center ${
          rendered ? "opacity-100" : "opacity-10 p-20"
        }`}
      >
        <div className=" py-4 md:py-0 md:px-10 w-full md:w-11/12 gap-12 flex  items-center   ">
          {/* Show logo in mobile view */}
          <div className="z-0 relative min-h-[250px]  md:min-h-[450px] w-1/2  flex  ">
            <Image
              loader={contentfulLoader}
              src={backgroundImage.url}
              alt="hero image"
              fill={true}
              className="object-cover object-center opacity-[1] relative z-10"
            />
            <span className="h-full w-full absolute top-5 left-5 bg-slate-800 z-0" />
          </div>
          <div className="hidden md:block w-1/2 flex items-center">
            <h1 className="font-serif text-slate-800  md:text-7xl   font-semibold md:font-bold  ">
              {title}
            </h1>
            <div className="flex flex-row flex-nowrap items-center gap-2">
              {services?.map((service, index) => (
                <div key={service} className="flex items-center flex-nowrap ">
                  <p className="text-slate-500 md:text-slate-500 text-xs sm:text-sm font-medium md:text-xl">
                    {service}
                  </p>
                  {index !== services.length - 1 && (
                    <span className="ml-2 text-slate-200 text-sm md:text-xl">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div>
              <p className="text-slate-400 md:text-slate-500 text-xs text-center md:text-left md:text-xl">
                {tagline}
              </p>
            </div>
            <div className="mt-4 md:mt-6">
              <Link
                href="/contact"
                className="  px-6 py-3 font-semibold bg-yellow-500 text-sm md:text-xl text-slate-100 transition-all hover:bg-orange-500"
              >
                {cta}
              </Link>
            </div>
          </div>
          {/* Show logo in mobile view */}
          <div className="flex flex-col items-center md:hidden w-2/3 h-26">
            <Image
              src={logo}
              width={500}
              height={150}
              loader={contentfulLoader}
              alt="logo"
              className="object-contain object-center"
            />
            <div className="w-1/3 h-[2px] bg-orange-300 my-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
