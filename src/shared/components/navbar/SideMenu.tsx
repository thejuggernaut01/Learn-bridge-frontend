"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Modal from "../ui/modal";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { IoCloseOutline } from "react-icons/io5";

type MenuItem = {
  text: string;
  path: string;
};

type SideMenuProps = {
  setOpenSideMenu: (state: boolean) => void;
};

const menuItems: MenuItem[] = [
  { text: "Home", path: "/" },
  { text: "Categories", path: "/categories" },
  { text: "Teach", path: "/" },
  { text: "Log in", path: "/login" },
  { text: "Create account", path: "/signup" },
];

const SideMenu: React.FC<SideMenuProps> = ({ setOpenSideMenu }) => {
  const pathname = usePathname();
  return (
    <>
      <Modal className="items-start text-gray-500">
        <Modal.Content className=" w-[290px] xs:w-[342px] mt-8">
          <div className="w-[90%] mx-auto pb-7 pt-3">
            <div className="text-end">
              <button onClick={() => setOpenSideMenu(false)}>
                <IoCloseOutline size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-y-2 font-medium items-center">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  className={cn(
                    "",
                    pathname === item.path &&
                      "border-b-2 max-w-fit border-gray-700"
                  )}
                  onClick={() => setOpenSideMenu(false)}
                >
                  <Link href={item.path}>{item.text}</Link>
                </button>
              ))}
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SideMenu;
