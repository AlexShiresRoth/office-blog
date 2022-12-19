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
    <section className="min-h-[360px] md:min-h-[550px] flex items-center justify-center md:overflow-hidden relative">
      <div className="absolute w-full md:min-h-[550px] top-0">
        <div className="z-0 relative min-h-[250px] h-full md:min-h-[550px]  flex md:w-full bg-slate-800">
          <Image
            loader={contentfulLoader}
            src={backgroundImage.url}
            alt="hero image"
            fill={true}
            className="object-cover object-center h-screen md:min-h-full rounded opacity-[.2]"
          />
        </div>
      </div>

      <div
        className={`z-10 rounded shadow-lg md:shadow-none bg-white md:bg-transparent w-11/12 p-4 md:p-0 mt-24   md:mt-0 flex flex-col items-center ${
          rendered ? "opacity-100" : "opacity-10 p-20"
        }`}
      >
        <div className=" py-4 md:py-0 md:px-10 w-full md:w-11/12 gap-2 flex flex-col items-center md:items-stretch  ">
          {/* Show logo in mobile view */}
          <div className="hidden md:block w-2/3 max-w-xl">
            <h1 className="font-serif text-slate-100  md:text-7xl   font-semibold md:font-normal  border-b-4 border-orange-300">
              {title}
            </h1>
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
          <div className="flex flex-row flex-nowrap items-center gap-2">
            {services?.map((service, index) => (
              <div key={service} className="flex items-center flex-nowrap ">
                <p className="text-slate-500 md:text-slate-100 text-xs sm:text-sm font-medium md:text-xl">
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
            <p className="text-slate-400 md:text-slate-200 text-xs text-center md:text-left md:text-xl">
              {tagline}
            </p>
          </div>
          <div className="mt-4 md:mt-6">
            <Link
              href="/contact"
              className=" rounded px-6 py-3 font-semibold bg-orange-300 text-sm md:text-xl text-slate-100 transition-all hover:bg-orange-500"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
