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
    <div className="flex flex-col my-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 relative max-h-[500px]">
            {about?.image && about?.image?.url && (
              <Image
                src={about.image.url}
                width={600}
                height={400}
                alt="About image"
                loader={contentfulLoader}
                className="object-cover object-center h-screen md:min-h-full w-full max-h-[500px] rounded"
              />
            )}
          </div>
          <div className="py-10 w-full md:w-1/2">
            <h6 className="text-sm text-orange-300">{about?.preHeading} </h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700">
              {about.title}
            </h2>
            <RichTextRender content={about.content} />
            <Link
              href={`/${about.slug}`}
              className=" rounded text-orange-300 border-orange-300 border-2 px-4 py-2 hover:bg-orange-300 hover:text-slate-50 font-semibold transition-all"
            >
              {about?.cta}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
