import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AboutType } from "../types/about.types";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";
import RichTextRender from "./richTextRender";

type Props = {
  about: AboutType;
};

const AboutSection = ({ about }: Props) => {
  return (
    <div className="flex flex-col my-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 relative">
            {about?.image && about?.image?.url && (
              <Image
                src={about.image.url}
                width={500}
                height={400}
                alt="About image"
                loader={contentfulLoader}
                className="object-cover object-center h-screen md:min-h-full w-full md:max-h-[500px]"
              />
            )}
          </div>
          <div className="py-10 w-full md:w-1/2 flex flex-col md:border-l-4 md:border-slate-800 md:pl-8">
            <h6 className="text-sm text-yellow-500 font-semibold">
              {about?.preHeading}{" "}
            </h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700 max-w-xl">
              {about.title}
            </h2>
            <div className="max-w-xl">
              <RichTextRender content={about.content} />
            </div>
            <div className="mt-2">
              <Link
                href={`/${about.slug}`}
                className="text-yellow-500 border-yellow-500 border-2 px-4 py-2 hover:bg-yellow-500 hover:text-slate-50 font-semibold transition-all"
              >
                {about?.cta}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
