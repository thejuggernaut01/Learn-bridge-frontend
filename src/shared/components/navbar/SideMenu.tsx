"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

import { cn } from "@/lib/utils";
import { FcMenu } from "react-icons/fc";

type MenuItem = {
  text: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { text: "Home", path: "/" },
  { text: "Categories", path: "/categories" },
  { text: "My learning", path: "/learning" },
  { text: "Teach", path: "/teach" },
  // { text: "Log in", path: "/login" },
  { text: "Create account", path: "/signup" },
];

const SideMenu = () => {
  const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="lg:hidden">
            <FcMenu size={25} />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px]">
          <div className="flex flex-col gap-y-3 font-medium mt-5">
            {menuItems.map((item) => (
              <div key={item.path}>
                <SheetClose
                  asChild
                  className={cn(
                    pathname === item.path &&
                      "border-b-2 max-w-fit border-gray-700"
                  )}
                >
                  <Link href={item.path}>{item.text}</Link>
                </SheetClose>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideMenu;
