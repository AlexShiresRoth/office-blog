import React from "react";
import Link from "../node_modules/next/link";
import { FooterParams } from "../types/footer.types";
import Container from "./container";

type Props = {
  footer: FooterParams;
};

const footer = ({ footer }: Props) => {
  console.log("footer", footer);

  const parseText = (text: string) => {
    if (!text) return;
    return text.split("\n").map((sentence, index) => (
      <p key={index} className="my-2 text-slate-600">
        {sentence}
      </p>
    ));
  };

  return (
    <footer className="bg-slate-900 w-full py-10">
      <Container>
        <div className="border-b-2 border-slate-700 py-2">
          <h3 className="text-slate-500 font-bold">{footer.heading}</h3>
        </div>
        <div className="flex flex-row justify-between gap-4 mt-6">
          {footer.columnsCollection?.items?.map((item) => {
            return (
              <div key={item.title} className="w-1/4">
                <h4 className="font-semibold text-slate-500">{item.title} </h4>
                <div>{parseText(item.text)}</div>
                {item?.linksCollection?.items.map((link) => (
                  <div className="w-full my-2" key={link.title}>
                    <Link href={`/${link.slug}`}>
                      <a className="text-slate-600 hover:underline hover:text-slate-400 transition-all">
                        {link.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export default footer;
