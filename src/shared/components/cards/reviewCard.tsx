import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <>
      <div className="text-gray-900 border border-[#E2E8F0] p-4 rounded-xl space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <p>
            Course Name:{" "}
            <span className="font-medium">{`Beginner's Guide to Design`}</span>
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Image
                  src="/icons/horizontal-dots.svg"
                  width={20}
                  height={20}
                  alt="More"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-24">
              <DropdownMenuItem className="h-8">
                <button className="rounded w-full text-left py-1 px-2 whitespace-nowrap text-sm block">
                  Edit
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem className="h-8 focus:bg-red-400 focus:text-white">
                <button className="rounded w-full text-left py-1 px-2 whitespace-nowrap text-sm block">
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p>
          Rating: <span className="text-[#612012] font-semibold">4.6</span>
        </p>
        <div className="flex gap-x-2">
          <p>Review:</p>
          <p className="text-gray-700 mt-[2px] line-clamp-4 md:line-clamp-none">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
