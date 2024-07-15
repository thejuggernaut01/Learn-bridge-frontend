import { cn } from "@/lib/utils";
import React from "react";
import { CiSearch } from "react-icons/ci";

type SearchInputProps = {
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className={cn(
            "w-full h-10 rounded-full pl-8 text-sm border border-gray-900 outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500/20",
            className
          )}
        />
        <CiSearch size={22} className="absolute top-[23%] left-2" />
      </div>
    </>
  );
};

export default SearchInput;
