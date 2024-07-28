import React from "react";
// import { AppliedCardProps } from "@/shared/types";
// import AppliedCourseCard from "@/shared/components/cards/appliedCourseCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/shared/components/ui/pagination";
// import Link from "next/link";
// import { convertToSlug } from "@/shared/utils/converToSlug";

const page = () => {
  return (
    <>
      <p>Hello</p>
      {/* <main className="space-y-7 w-[90%] mx-auto mt-8">
        <h3 className="text-gray-900 text-lg font-medium">
          Courses <span className="text-sm">({appliedCourseData.length})</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-7">
          {appliedCourseData.map((data: AppliedCardProps) => (
            <Link href={`/learning/${convertToSlug(data.title)}`} key={data.id}>
              <AppliedCourseCard {...data} />
            </Link>
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
      </main> */}
    </>
  );
};

export default page;

// export const appliedCourseData: AppliedCardProps[] = [
//   {
//     id: 1,
//     src: "/images/design.png",
//     title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
//     instructor: "Andrei Neagoie, Daniel Schifano",
//     rating: 4.5,
//     progress: 60,
//   },
//   {
//     id: 2,
//     src: "/images/design.png",
//     title: "SQL and PostgreSQL: The Complete Developer's Guide",
//     instructor: "Stephen Grider",
//     rating: 4.7,
//     progress: 60,
//   },
//   {
//     id: 3,
//     src: "/images/design.png",
//     title: "100 Days of Code: The Complete Python Pro Bootcamp",
//     instructor: "Dr. Angela Yu, John Patmore",
//     rating: 4.7,
//     progress: 60,
//   },
//   {
//     id: 4,
//     src: "/images/design.png",
//     title: "Fundamentals of Backend Engineering",
//     instructor: "Hussein Nasser",
//     rating: 4.7,
//     progress: 60,
//   },
//   {
//     id: 5,
//     src: "/images/design.png",
//     title: "Understanding Node.js: Core Concepts",
//     instructor: "Joseph Heidari",
//     rating: 4.7,
//     progress: 60,
//   },
//   {
//     id: 6,
//     src: "/images/design.png",
//     title: "Understanding Node.js: Core Concepts",
//     instructor: "Joseph Heidari",
//     rating: 4.7,
//     progress: 60,
//   },
//   {
//     id: 7,
//     src: "/images/design.png",
//     title: "Understanding Node.js: Core Concepts",
//     instructor: "Joseph Heidari",
//     rating: 4.7,
//     progress: 60,
//   },
// ];
