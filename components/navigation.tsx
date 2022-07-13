import React from "react";
import Link from "../node_modules/next/link";
import { NavigationType } from "../types/navigation.types";
import Container from "./container";

const Navigation = ({ navigation }: NavigationType) => {
  return (
    <nav className="w-full py-4 flex flex-row items-center fixed top-0 bg-white z-50">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <a className="w-32">
              <img src={`${navigation.logo.url}`} alt="title" />
            </a>
          </Link>
          <div className="flex flex-row gap-4">
            {navigation?.navItemsCollection?.items?.map((item) => (
              <div key={item.slug}>
                <Link href={`/${item.slug}`}>
                  <a className="text-slate-500 font-regular  hover:text-orange-500 transition-all">
                    {item.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
