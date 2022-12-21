import React from "react";
import RichTextRender from "./richTextRender";

type Props = {
  blogDescription: {
    sectionTitle: string;
    blurb: string;
  };
};

const BlogDescription = ({ blogDescription }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="border-b-[1px] pl-6 pb-2 border-slate-800 text-sm md:text-xl font-bold text-slate-800">
        {blogDescription.sectionTitle}
      </h2>

      <div className="px-6  rounded  ">
        <RichTextRender content={blogDescription?.blurb} />
      </div>
    </div>
  );
};

export default BlogDescription;
