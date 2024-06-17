import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const CategoryDrowDown = () => {
  return (
    <>
      <main className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p className="text-sm cursor-pointer">Category</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-5">
            <DropdownMenuGroup>
              <DropdownMenuItem>Development</DropdownMenuItem>
              <DropdownMenuItem>Business</DropdownMenuItem>
              <DropdownMenuItem>Finance & Accounting</DropdownMenuItem>
              <DropdownMenuItem>IT & Software</DropdownMenuItem>
              <DropdownMenuItem>Design</DropdownMenuItem>
              <DropdownMenuItem>Marketing</DropdownMenuItem>
              <DropdownMenuItem>Teaching & Academics</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="ml-1">
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>
    </>
  );
};

export default CategoryDrowDown;
