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
};

const SectionWithImageBackground = ({ content }: Props) => {
  return (
    <>
      <WideScreenSection content={content} />
      <SmallScreenSection content={content} />
    </>
  );
};

const WideScreenSection = ({ content }: Props) => {
  return (
    <div className="hidden md:flex flex-col w-full relative mb-10 items-center justify-center">
      <Container>
        <div className="w-full hidden md:flex flex-col items-center justify-center relative  rounded">
          <div className="md:w-full md:h-full hidden md:block overflow-hidden min-h-[350px]">
            <Image
              src={content?.bgImage?.url}
              loader={contentfulLoader}
              alt="background image"
              width={2000}
              height={300}
              className="object-cover object-center  w-full max-h-[350px]"
            />
          </div>
          <div className="relative py-4 md:p-0 md:absolute flex flex-col items-center z-20 w-full">
            <h2 className="text-sm md:text-lg text-yellow-500 font-semibold relative ">
              {content?.title}
            </h2>
            <h1 className="text-xl md:text-2xl xl:text-4xl text-slate-50 w-full max-w-lg my-2 md:my-4 md:w-2/3 text-center font-semibold font-serif">
              {content?.subTitle}
            </h1>
            <Link
              href={content?.slug ?? "/contact"}
              className="bg-yellow-500 text-slate-50 p-2 px-4 mt-2 md:mt-6  hover:bg-yellow-400 transition-all"
            >
              {content?.cta}
            </Link>
          </div>

          <div className="absolute h-full w-full z-10 bg-slate-800/50 left-0 hidden md:block "></div>
        </div>
      </Container>
    </div>
  );
};

const SmallScreenSection = ({ content }: Props) => {
  return (
    <div className="flex md:hidden flex-col w-full relative mb-30 md:mb-4 items-center justify-center">
      <div className="flex flex-col md:hidden relative  top-0 w-full z-0">
        <div className="absolute h-full w-full z-10 bg-slate-700/70 top-0 left-0" />
        <div className="absolute md:w-full h-full md:hidden block overflow-hidden">
          <Image
            src={content?.bgImage?.url}
            width={2300}
            height={1500}
            loader={contentfulLoader}
            alt="background image"
            className="object-cover object-center "
          />
        </div>
        <Container>
          <div className="w-full flex absolute top-0 md:flex flex-col items-center justify-center relative my-4">
            <div className="relative py-4 md:p-0 md:absolute flex flex-col items-center z-20 w-full">
              <h2 className="text-sm md:text-lg text-yellow-500 font-regular relative ">
                {content?.title}
              </h2>
              <h1 className="text-xl md:text-2xl xl:text-4xl text-slate-50 w-full my-2 md:my-4 md:w-2/3 text-center font-semibold font-serif">
                {content?.subTitle}
              </h1>
              <Link
                href={content?.slug ?? "/contact"}
                className=" bg-yellow-500 text-slate-50 p-2 mt-2 md:mt-6  shadow-lg"
              >
                {content?.cta}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default SectionWithImageBackground;
