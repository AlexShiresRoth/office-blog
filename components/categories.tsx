import { useRouter } from "next/router";
import React from "react";

type Props = {
  categories: Array<string>;
};

//needs to route to articles with a param of the category
const Categories = ({ categories }: Props) => {
  const router = useRouter();
  const handleNavigate = (category: string) =>
    router.push({ pathname: "/posts/", query: { search: category } });

  return (
    <div className="flex flex-col w-full mt-4">
      <div className="py-2 flex justify-between items-center border-b-[1px] border-slate-100 mb-4">
        <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
          Categories
        </h2>
      </div>
      <div className="mt-2 mb-2 flex w-full gap-2 flex-wrap md:flex-nowrap ">
        {categories &&
          categories?.length > 0 &&
          categories?.slice(0, 4).map((category) => (
            <button
              onClick={() => handleNavigate(category)}
              key={category}
              className="p-2 bg-slate-50 rounded border-2 border-slate-100 text-sm text-slate-400 hover:bg-slate-400 hover:text-slate-50 transition-all"
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Categories;
