import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "../node_modules/next/link";
import { NavigationType } from "../types/navigation.types";
import Container from "./container";

const Navigation = ({ navigation }: NavigationType) => {
  const router = useRouter();

  const [isAtTopOfScreen, setIsAtTopOfScreen] = useState<boolean>(true);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTopOfScreen(true);
      } else {
        setIsAtTopOfScreen(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router?.asPath]);

  return (
    <>
      <nav
        className={`w-full transition-all hidden md:flex flex-row items-center md:top-0 bg-white z-40 ${
          isAtTopOfScreen
            ? "relative py-4"
            : "relative md:fixed py-2 shadow-md "
        }`}
      >
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Link href="/" className="w-24 md:w-32">
              <img src={`${navigation.logo.url}`} alt="title" />
            </Link>
            <div className="hidden md:flex flex-row gap-4">
              {navigation?.navItemsCollection?.items?.map((item) => (
                <div key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-slate-500 font-regular  hover:text-orange-500 transition-all"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </nav>
      {/* MOBILE NAV */}
      <nav
        className={`w-full transition-all flex md:hidden flex-row items-center justify-center bottom-0 md:top-0 z-50 fixed `}
      >
        <Container>
          <div className="w-full shadow-lg rounded bg-white my-4 p-4">
            <div
              className={`${
                isMenuOpen
                  ? "flex flex-col max-h-96 opacity-100 mb-2"
                  : " max-h-0 -z-50 opacity-0 mb-0"
              } transition-all w-full relative`}
            >
              <div
                key={"/"}
                className="w-full border-b-2 border-slate-100 py-2"
              >
                <Link
                  href={`/`}
                  className="text-slate-500 font-regular w-full hover:text-orange-500 transition-all "
                >
                  Home
                </Link>
              </div>
              {navigation?.navItemsCollection?.items?.map((item) => (
                <div
                  key={item.slug}
                  className="w-full border-b-2 border-slate-100 py-2"
                >
                  <Link
                    href={`/${item.slug}`}
                    className="text-slate-500 font-regular w-full hover:text-orange-500 transition-all "
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 flex items-center"
            >
              {isMenuOpen ? (
                <>
                  <AiOutlineClose className="font-sm mr-2" /> {"Close"}
                </>
              ) : (
                <>
                  <AiOutlineMenu className="font-sm mr-2" /> {"Menu"}
                </>
              )}{" "}
            </button>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
