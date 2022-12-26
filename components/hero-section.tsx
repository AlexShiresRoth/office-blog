import Image, { ImageLoaderProps } from "next/image";
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
  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <section className=" flex items-center justify-center relative pt-12 md:py-16">
      <div
        className={`w-full p-2 md:p-0 mt-4   md:mt-0 flex flex-col items-center ${
          rendered ? "opacity-100" : "opacity-10 p-20"
        }`}
      >
        <div className=" py-4 md:py-0 md:px-10 w-full md:w-11/12 gap-4 md:gap-12 flex  flex-col md:flex-row items-center justify-between">
          {/* Show logo in mobile view */}
          <div className="z-0 relative min-h-[140px]  md:min-h-[450px] w-full md:w-1/2  flex max-w-[800px] ">
            <Image
              loader={contentfulLoader}
              src={backgroundImage.url}
              alt="hero image"
              fill={true}
              className="object-cover object-center opacity-[1] relative z-10"
            />
            <span className="h-full w-full absolute top-2 md:top-5 left-2 md:left-5 bg-slate-800 z-0" />
          </div>
          <div className="flex flex-col  md:w-1/2 flex">
            <h1 className="font-serif text-slate-800 text-4xl  md:text-7xl mb-2 leading-snug  font-semibold md:font-bold  ">
              {title}
            </h1>
            <div className="flex flex-row flex-nowrap items-center gap-2">
              {services?.map((service, index) => (
                <div key={service} className="flex items-center flex-nowrap ">
                  <p className="text-slate-500 md:text-slate-500 text-xs sm:text-sm font-semibold md:font-medium md:text-xl">
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
              <p className="text-slate-500 text-xs text-left font-semibold md:text-xl">
                {tagline}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className=" px-6 py-3 font-semibold bg-yellow-500 text-sm md:text-xl text-slate-100 transition-all hover:bg-yellow-600"
              >
                {cta}
              </Link>
            </div>
            <a
              rel="me"
              target="_blank"
              href="https://www.avvo.com/attorneys/11716-ny-bruce-rothenberg-887503.html"
              className="relative w-32 h-8 mt-10"
            >
              <Image
                alt="Avvo - Rate your Lawyer. Get Free Legal Advice."
                id="avvo_badge"
                src="//images.avvo.com/avvo/cms/images/amos_assets/microbadge.png"
                fill={true}
                loader={imageLoader}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
