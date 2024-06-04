"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import SideMenu from "./SideMenu";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SearchInput from "../custom/searchInput";

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <main className="w-[90%] mx-auto text-gray-700 my-2">
        <div className="flex justify-between items-center">
          <button onClick={() => setOpenSideMenu(true)} className="lg:hidden">
            <FcMenu size={25} />
          </button>

          <div className="flex items-center">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="Welcome to learn bridge"
            />
            <p className="text-sm">Learn Bridge</p>
          </div>

          <div className="hidden lg:block w-[50%]">
            <SearchInput />
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-5">
            <button className="lg:hidden">
              <CiSearch size={20} />
            </button>

            <button className="hidden lg:block">Teach</button>

            <Link href="/cart">
              <IoCartOutline size={20} />
            </Link>

            <Link
              href="/login"
              className="p-2 border border-gray-700 hidden lg:block text-sm"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="p-2 border bg-gray-700 hidden lg:block text-white text-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </main>

      {openSideMenu && (
        <SideMenu
          setOpenSideMenu={(state: boolean) => setOpenSideMenu(state)}
        />
      )}
    </>
  );
};

export default Navbar;
