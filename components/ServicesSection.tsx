import Image from "next/image";
import React from "react";
import Link from "../node_modules/next/link";
import { ServicesType } from "../types/services.types";
import Container from "./container";
import ContentfulImage, { contentfulLoader } from "./contentful-image";

type Props = {
  services: ServicesType;
};
const ServicesSection = ({ services }: Props) => {
  return (
    <div className="flex flex-col w-full mb-2 mt-6 ">
      <Container>
        <div className="flex-col items-center flex w-full">
          <h6 className="text-sm text-orange-300">{services?.preHeading}</h6>
          <div className="flex items-center w-full mb-4 gap-2">
            <span className="border-b-2 border-slate-400 w-1/3 md:w-2/3"></span>
            <h2 className="font-bold font-serif text-xl md:text-2xl text-slate-700  w-full md:w-1/3 text-center">
              {services.title}
            </h2>
            <span className="border-b-2 border-slate-400 w-1/3 md:w-2/3"></span>
          </div>
        </div>
        <div className="flex flex-col md:grid  justify-items-stretch	grid-cols-4 gap-4 overflow-hidden">
          {services.contentItemsCollection.items.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center relative justify-center bg-slate-800 rounded overflow-hidden"
              >
                <div className="relative w-full min-h-[200px] flex flex-auto bg-slate-500">
                  <Image
                    src={item.image.url}
                    alt={item.image.title}
                    loader={contentfulLoader}
                    fill={true}
                    className="object-cover object-center opacity-[.5]"
                  />
                </div>
                <div className="w-11/12 p-4 flex flex-col items-start gap-4">
                  <h4 className=" z-10 rounded-t bg-slate-600 p-4 -mt-10 font-semibold text-slate-100  text-xl border-b-4 border-orange-300 py-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-400">
                    {item.text.substring(0, 100) + "..."}
                  </p>
                  <Link
                    href={`/${item.slug}`}
                    className="text-xs text-orange-300 font-semibold  hover:text-orange-500  transition-all"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
