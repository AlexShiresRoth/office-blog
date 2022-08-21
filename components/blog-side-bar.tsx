import React, { useEffect } from "react";
import Container from "./container";
import { flattenArrayNested } from "../utility-funtions/flatten-array";
import Link from "next/link";
import ArticlePreview from "./article-preview";

export const BlogSideBar = ({
  categories: arrayOfCategoryObjects,
  suggestedArticles,
}) => {
  const [categories, setCategories] = React.useState<Array<string>>([]);

  const [categoryMatrix, setCategoryMatrix] = React.useState<
    Array<{ key: string; value: number }>
  >([]);

  const handleDuplicateCategories = (array) => {
    //set base object
    const categoryObject = {};
    //loop through array and increment count for each category
    categories.forEach((category) => {
      const tally = array.filter((item: string) => item === category).length;
      //dynamically set key and value
      categoryObject[category] = tally;
    });

    //convert object to array of objects
    const arrayOfCategories = [];

    for (let key in categoryObject) {
      arrayOfCategories.push({ key, value: categoryObject[key] });
    }
    //sort by most articles in that category
    const sortedCategories = arrayOfCategories.sort(
      (a, b) => b.value - a.value
    );
    //set in state, each key value category pair
    setCategoryMatrix(sortedCategories);
  };

  useEffect(() => {
    if (arrayOfCategoryObjects.length === 0) return;
    //categories provided is an array of objects, need to flatten to array of strings
    setCategories(flattenArrayNested(arrayOfCategoryObjects, "categories"));
  }, [arrayOfCategoryObjects]);

  useEffect(() => {
    if (categories) {
      handleDuplicateCategories(categories);
    }
  }, [categories]);

  //TODO set element to stop once reaching bottom of container. must use js

  return (
    <div className="w-1/4 hidden md:flex flex-col border-l-[1px]  border-accent-2  mb-8 py-4 relative">
      <div className="absolute h-[1000px] top-8">
        <div className=" overflow-hidden  fixed">
          <div className="border-b-[1px] border-slate-100 flex pb-2 mb-2">
            <h2 className="font-bold text-slate-500 ml-6">Top Categories</h2>
          </div>
          <div className="pl-6 pb-2 flex flex-col gap-2 w-full ">
            {categoryMatrix.slice(0, 3).map((category) => (
              <div key={category.key}>
                <Link href={`/posts?search=${category.key}`}>
                  <a>
                    <p className="italic text-slate-400 font-serif relative">
                      {category.key}
                      <span className="ml-2 font-bold font-sans bg-slate-200 rounded-full text-slate-800 normal py-[2px] px-[6px] text-[10px]">
                        {category?.value}
                      </span>
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="border-b-[1px] border-t-[1px] border-slate-100 flex py-4 mt-4 mb-2">
            <h2 className="font-bold text-slate-500 ml-6">
              Suggested Articles
            </h2>
          </div>
          <div className="pl-6 pb-2 flex flex-col gap-2 w-11/12 ">
            {suggestedArticles.slice(0, 3).map((article) => (
              <ArticlePreview content={article} key={article?.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
