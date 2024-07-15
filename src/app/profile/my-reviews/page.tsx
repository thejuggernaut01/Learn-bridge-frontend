import ReviewCard from "@/shared/components/cards/reviewCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
import React from "react";

const page = () => {
  return (
    <>
      <main className="space-y-4 w-[90%] mx-auto mt-8 lg:mt-0">
        <h3 className="text-gray-900 text-lg font-medium">
          Reviews <span className="text-sm">(12)</span>
        </h3>

        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ReviewCard key={i} />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="space-x-2 w-24 flex items-center justify-between">
              <PaginationLink className="flex-1" href="#">
                1
              </PaginationLink>
              <PaginationLink className="flex-1" href="#" isActive>
                2
              </PaginationLink>
              <PaginationLink className="flex-1" href="#">
                3
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </>
  );
};

export default page;
