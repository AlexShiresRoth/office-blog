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
  };

  return (
    <div className="p-2  rounded  border-2 border-slate-400  transition-width transition-all flex items-center overflow-hidden">
      <AiOutlineSearch size={20} className="text-slate-500" />
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          className="bg-transparent focus:outline-none text-slate-500 text-sm font-serif mx-2"
          placeholder="Search by category or title"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue !== "" && (
          <button
            onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="p-2 rounded-full bg-slate-100 flex items-center hover:bg-slate-800 text-slate-500 hover:text-slate-50 transition-all"
          >
            <AiOutlineArrowRight size={16} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
