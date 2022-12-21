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
        <div className="flex-col md:items-center flex w-full">
          <h6 className="text-sm text-yellow-500">{services?.preHeading}</h6>
          <div className="flex items-center w-full mb-4 gap-2">
            <span className="border-b-2 border-slate-800 hidden md:block md:w-2/3"></span>
            <h2 className="font-bold font-serif text-xl md:text-2xl text-slate-700  w-full md:w-1/3 md:text-center">
              {services.title}
            </h2>
            <span className="border-b-2 border-slate-800 w-1/2 md:w-2/3"></span>
          </div>
        </div>
        <div className="flex flex-col md:grid  justify-items-stretch	grid-cols-4 gap-8 ">
          {services.contentItemsCollection.items.map((item) => {
            return (
              <div
                key={item.title}
                className="flex bg-white flex-col items-center relative justify-center   "
              >
                <div className="relative z-10 bg-white p-4 border-4 border-slate-800">
                  <div className="relative w-full min-h-[200px] flex flex-auto bg-slate-500">
                    <Image
                      src={item.image.url}
                      alt={item.image.title}
                      loader={contentfulLoader}
                      fill={true}
                      className="object-cover object-center opacity-[.5]"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-start gap-4">
                    <h4 className=" z-10  bg-slate-800 p-4 -mt-10 font-semibold text-slate-100  text-lg border-b-4 border-yellow-300 py-2">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base fond-semibold text-slate-700">
                      {item.text.substring(0, 100) + "..."}
                    </p>
                    <Link
                      href={`/${item.slug}`}
                      className="text-sm text-yellow-500 font-semibold  hover:text-yellow-400  transition-all"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
                <span className="h-full w-full bg-slate-800 translate-x-3 translate-y-3 absolute block z-0"></span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
