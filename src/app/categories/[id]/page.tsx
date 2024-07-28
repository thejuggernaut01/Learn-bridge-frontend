// import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col min-h-dvh mt-10">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <h3 className="text-2xl font-bold">Web Development</h3>
          {/* <div className="relative flex-1 max-w-md ml-4 md:ml-6">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 rounded-md bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:bg-primary-foreground/20"
            />
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Button variant="ghost" size="icon" className="rounded-full">
              <FilterIcon className="w-5 h-5" />
              <span className="sr-only">Filters</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ListOrderedIcon className="w-5 h-5" />
              <span className="sr-only">Sort</span>
            </Button>
          </div> */}
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <Link href="#" className="block" prefetch={false}>
                <Image
                  src="/placeholder.svg"
                  alt={course.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">
                      ${course.price.toFixed(2)}
                    </span>
                    <Button size="sm">Enroll</Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </main>
  );
}

// function FilterIcon(props: { className: string }) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//     </svg>
//   );
// }

// function ListOrderedIcon(props: { className: string }) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="10" x2="21" y1="6" y2="6" />
//       <line x1="10" x2="21" y1="12" y2="12" />
//       <line x1="10" x2="21" y1="18" y2="18" />
//       <path d="M4 6h1v4" />
//       <path d="M4 10h2" />
//       <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
//     </svg>
//   );
// }

// function SearchIcon(props: { className: string }) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

function StarIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const courses = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "The Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    rating: 4.8,
    reviews: 10,
    price: 129.99,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Python for Everybody: The Complete Python Course",
    instructor: "Colt Steele",
    rating: 4.6,
    reviews: 10,
    price: 99.99,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 10,
    price: 149.99,
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "The Complete SQL Bootcamp 2023: Go from Zero to Hero",
    instructor: "Jose Portilla",
    rating: 4.5,
    reviews: 10,
    price: 79.99,
  },
  {
    id: 5,
    image: "/placeholder.svg",
    title: "The Complete Flutter Development Bootcamp with Dart",
    instructor: "Angela Yu",
    rating: 4.8,
    reviews: 10,
    price: 159.99,
  },
  {
    id: 6,
    image: "/placeholder.svg",
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    instructor: "Andrew Mead",
    rating: 4.7,
    reviews: 10,
    price: 129.99,
  },
];
