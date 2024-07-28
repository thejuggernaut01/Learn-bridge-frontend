import SearchInput from "@/shared/components/custom/searchInput";
import CONSTANTS from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main className="space-y-4 w-[90%] mx-auto mt-8 lg:mt-0">
        <h3 className="text-gray-900 text-lg font-medium">Messages</h3>
        <SearchInput className="rounded-lg md:w-[400px]" />

        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Link
              href={`/${CONSTANTS.ROUTES["profile/messages"]}/8395846`}
              className="text-gray-900 border border-[#E2E8F0] p-4 rounded-xl space-y-2 text-sm cursor-pointer block"
              key={i}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/images/ronald-richard.svg"
                    width={28}
                    height={28}
                    alt="Ronald Richard"
                  />
                  <p className="font-medium">Ronald Richards</p>
                </div>
                <p className="text-gray-700 text-xs">15th June, 2024</p>
              </div>
              <p className="text-gray-900 line-clamp-4 md:line-clamp-none">
                Thank you for asking your doubt, I’ll send you a pdf file which
                cover the problems you are facing. If you have any...
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default page;
