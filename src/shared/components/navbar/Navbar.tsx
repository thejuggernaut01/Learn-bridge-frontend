"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <main className="w-[90%] mx-auto text-gray-700 my-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="Welcome to learn bridge"
            />
            <p className="text-sm">Learn Bridge</p>
          </div>

          <button onClick={() => setOpenSideMenu(true)}>
            <FcMenu size={25} />
          </button>
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
