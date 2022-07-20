import { useRouter } from "next/router";
import React from "react";

type Props = {
  categories: Array<string>;
};

//needs to route to articles with a param of the category
const Categories = ({ categories }: Props) => {
  const router = useRouter();
  const handleNavigate = (category: string) =>
    router.push(`/posts/`, {
      query: { category },
    });
  return (
    <div className="flex flex-col w-full mt-4">
      <div className="py-2 flex justify-between items-center border-b-2 border-slate-100 mb-4">
        <h2 className="text-xl italic md:text-xl font-semibold tracking-tighter leading-tight text-slate-400 font-serif">
          Categories
        </h2>
      </div>
      <div className="mt-2 mb-2 flex w-full gap-2">
        {categories.slice(0, 6).map((category) => (
          <button
            onClick={() => handleNavigate(category)}
            key={category}
            className="text-slate-400 font-regular flex items-center justify-center p-2 flex-1 border-slate-300 border-2 rounded hover:bg-slate-300 hover:text-slate-50 transition-all"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
