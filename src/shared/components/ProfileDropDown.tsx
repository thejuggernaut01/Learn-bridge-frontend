import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import CONSTANTS from "../constants";

const ProfileDropDown = () => {
  return (
    <>
      <main className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-[20px] h-[20px] cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-fit mr-10">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={`/${CONSTANTS.ROUTES["profile"]}`}>
                  Profile details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${CONSTANTS.ROUTES["profile/messages"]}`}>
                  Messages
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${CONSTANTS.ROUTES["profile/my-reviews"]}`}>
                  My reviews
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${CONSTANTS.ROUTES["profile/settings"]}`}>
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>
    </>
  );
};

export default ProfileDropDown;
