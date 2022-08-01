import React, { useEffect, useState } from "react";
import Link from "../node_modules/next/link";
import { NavigationType } from "../types/navigation.types";
import Container from "./container";

const Navigation = ({ navigation }: NavigationType) => {
  const [isAtTopOfScreen, setIsAtTopOfScreen] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTopOfScreen(true);
      } else {
        setIsAtTopOfScreen(false);
        console.log("hello");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <nav
        className={`w-full transition-all hidden md:flex flex-row items-center top-0 bg-white z-50 ${
          isAtTopOfScreen ? "relative py-4" : "fixed py-2 shadow-md"
        }`}
      >
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
      {/* MOBILE NAV */}
      <nav
        className={`w-full transition-all flex md:hidden flex-row items-center justify-between top-0 bg-white z-50 ${
          isAtTopOfScreen ? "relative py-4" : "fixed py-2 shadow-md"
        }`}
      >
        <Container>
          <Link href="/">
            <a className="w-28">
              <img
                src={`${navigation.logo.url}`}
                alt="title"
                className="w-28"
              />
            </a>
          </Link>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
