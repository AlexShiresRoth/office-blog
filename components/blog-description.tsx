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
    <div className="mt-8">
      <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
        {blogDescription.sectionTitle}
      </h2>

      <RichTextRender content={blogDescription?.blurb} />
    </div>
  );
};

export default BlogDescription;
