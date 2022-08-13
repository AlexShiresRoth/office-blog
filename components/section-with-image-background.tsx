import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";

type Props = {
  content: {
    bgImage: {
      url: string;
    };
    title: string;
    subTitle: string;
    slug: string;
    cta: string;
  };
  action: any;
};

const SectionWithImageBackground = ({ content }: Props) => {
  return (
    <div className="flex flex-col w-full relative mb-30 md:mb-10 items-center justify-center">
      {/* MOBILE VIEW */}
      <div className="md:hidden absolute h-full top-0">
        <Image
          src={content?.bgImage?.url}
          width={2000}
          height={820}
          loader={contentfulLoader}
          className="object-cover object-center w-full h-full"
        />

        <div className="absolute h-full w-full z-10 bg-slate-700/70 top-0 left-0"></div>
      </div>
      {/* MOBILE VIEW */}

      {/* DESKTOP VIEW */}
      <Container>
        <div className="w-full flex flex-col items-center justify-center relative m-2">
          <div className="md:w-full md:h-full hidden md:block overflow-hidden">
            <Image
              src={content?.bgImage?.url}
              width={2000}
              height={500}
              loader={contentfulLoader}
              className="object-cover object-center"
            />
          </div>
          <div className="relative py-4 md:p-0 md:absolute flex flex-col items-center z-20">
            <h2 className="text-sm text-orange-400 font-regular relative ">
              {content?.title}
            </h2>
            <h1 className="text-xl md:text-2xl xl:text-4xl text-slate-50 w-2/3 text-center font-semibold font-serif">
              {content?.subTitle}
            </h1>
            <Link href={content?.slug ?? "/contact"}>
              <a>
                <button className="bg-orange-500 text-slate-50 p-2 mt-2 md:mt-6 border-4 border-orange-200/20 shadow-lg">
                  {content?.cta}
                </button>
              </a>
            </Link>
          </div>

          <div className="absolute h-full w-full z-10 bg-slate-700/50 left-0 hidden md:block"></div>
        </div>
      </Container>
      {/* DESKTOP VIEW */}
    </div>
  );
};

export default SectionWithImageBackground;
