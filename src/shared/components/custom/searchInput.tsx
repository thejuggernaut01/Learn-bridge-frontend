import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 rounded-full pl-8 text-sm border border-gray-900 outline-none"
        />
        <CiSearch size={22} className="absolute top-[23%] left-2" />
      </div>
    </>
  );
};

export default SearchInput;
