import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    router.push({ pathname: "/posts/", query: { search: searchValue } });

    setSearchValue("");
  };

  return (
    <div className="p-2   border-2 border-b-4 border-slate-800  transition-width transition-all flex items-center overflow-hidden w-full">
      <AiOutlineSearch size={20} className="text-slate-800" />
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          className="bg-transparent focus:outline-none text-slate-500 text-xs md:text-sm font-serif mx-2"
          placeholder="Search by category or title"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue !== "" && (
          <button
            onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="p-2 rounded-full bg-slate-100 flex items-center hover:bg-slate-800 text-slate-800 hover:text-slate-50 transition-all"
          >
            <AiOutlineArrowRight size={16} className="text-slate-800" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
