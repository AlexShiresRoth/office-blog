import React from "react";
import Link from "../node_modules/next/link";
import { NavigationType } from "../types/navigation.types";
import Container from "./container";

const Navigation = ({ navigation }: NavigationType) => {
  console.log("nav in the nav", navigation);
  return (
    <nav className="w-full py-4 flex flex-row items-center border-b-2 ">
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
                  <a>{item.title}</a>
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
