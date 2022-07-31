import Link from "next/link";
import React from "react";
import { AboutType } from "../types/about.types";
import Container from "./container";
import ContentfulImage from "./contentful-image";
import RichTextRender from "./richTextRender";

type Props = {
  about: AboutType;
};

const AboutSection = ({ about }: Props) => {
  return (
    <div className="flex flex-col my-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <ContentfulImage src={about.image.url} width={600} height={400} />
          </div>
          <div className="py-10 w-1/2">
            <h6 className="text-sm text-orange-400">{about?.preHeading} </h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700">
              {about.title}
            </h2>
            <RichTextRender content={about.content} />
            <Link href={`/${about.slug}`}>
              <a>
                <button className="text-orange-400 border-orange-400 border-2 px-4 py-2 hover:bg-orange-400 hover:text-slate-50 transition-all">
                  {about?.cta}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
