import React from "react";
import Link from "../node_modules/next/link";
import { ServicesType } from "../types/services.types";
import Container from "./container";
import ContentfulImage from "./contentful-image";

type Props = {
  services: ServicesType;
};
const ServicesSection = ({ services }: Props) => {
  return (
    <div className="flex flex-col w-full my-10 bg-slate-100 pb-10">
      <Container>
        <div className="flex-col items-center flex w-full mt-4">
          <h6 className="text-sm text-orange-400">{services?.preHeading}</h6>
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
                className="flex flex-col relative justify-center bg-slate-800 "
              >
                <ContentfulImage
                  src={item.image.url}
                  width={350}
                  height={200}
                />
                <div className=" p-4 flex flex-col gap-2">
                  <h4 className="font-semibold text-slate-100 border-b-2 text-xl border-slate-700 py-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {item.text.substring(0, 120) + "..."}
                  </p>
                  <Link href={`/${item.slug}`}>
                    <a className="mt-2">
                      <button className="text-xs text-orange-400 font-semibold p-2 border-2 border-orange-400 hover:bg-orange-400 hover:text-slate-100 transition-all">
                        {item.cta}
                      </button>
                    </a>
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
