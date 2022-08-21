import React from "react";
import Container from "./container";

export const BlogSideBar = () => {
  return (
    <div className="w-1/4 hidden md:flex flex-col border-l-[1px] min-h-screen border-accent-2  mb-8 py-4 ">
      <Container>
        <div className="h-full relative">
          <div className="fixed  z-20">
            <p>add categories here and contact form?</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
