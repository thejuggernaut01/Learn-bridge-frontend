import React from "react";
import Image from "next/image";
import SideMenu from "./SideMenu";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SearchInput from "../custom/searchInput";
import CategoryDrowDown from "../CategoryDrowDown";

const Navbar = () => {
  return (
    <>
      <main className="w-[90%] mx-auto text-gray-700 mt-5">
        <div className="flex justify-between items-center gap-x-4">
          <SideMenu />

          <div className="lg:w-[45%] flex items-center gap-x-3 xl:gap-x-7">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="Welcome to learn bridge"
              />
              <p className="text-sm whitespace-nowrap">Learn Bridge</p>
            </Link>

            <CategoryDrowDown />
          </div>

          <div className="hidden lg:block w-full">
            <SearchInput />
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-5 lg:w-[60%] justify-end">
            <button className="lg:hidden">
              <CiSearch size={20} />
            </button>

            <Link
              href="/learning"
              className="hidden lg:block text-sm whitespace-nowrap"
            >
              Learning
            </Link>

            <button className="hidden lg:block">Teach</button>
            {/* <button className="hidden lg:block">My learning</button> */}

            <Link href="/cart">
              <IoCartOutline size={20} />
            </Link>

            <Link
              href="/login"
              className="p-2 border border-gray-700 hidden lg:block text-sm whitespace-nowrap"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="p-2 border bg-gray-700 hidden lg:block text-white text-sm whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
