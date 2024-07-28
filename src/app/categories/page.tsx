// import { Input } from "@/shared/components/ui/input";
import Link from "next/link";
// import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col min-h-dvh mt-5">
      <section className="w-full bg-primary py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Explore Our Course Categories
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Find the perfect course to expand your knowledge and skills.
            </p>
            {/* <div className="relative max-w-xl mx-auto">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-12 pr-4 py-3 rounded-md text-primary-foreground bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categoriesData.map((data) => (
              <div
                className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
                key={data.id}
              >
                <Link
                  href={`/categories/${data.title.toLowerCase()}`}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src="/placeholder.svg"
                  alt="Cover image"
                  width={300}
                  height={400}
                  className="[grid-area:stack] object-cover w-full aspect-[3/4]"
                />
                <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                  <h3 className="font-semibold text-lg tracking-tight">
                    {data.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center mt-8">
            <Button variant="outline">View More</Button>
          </div> */}
        </div>
      </section>
    </main>
  );
}

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

const categoriesData = [
  {
    id: 1,
    title: "Development",
    description: "Expand your coding skills and build web applications.",
    src: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Design",
    description: "Unlock your creative potential and master design principles.",
    src: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Business",
    description: "Gain essential skills for the modern business landscape.",
    src: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Marketing",
    description: "Master the art of digital marketing and grow your business.",
    src: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Philosophy",
    description: "Capture stunning images and master the art of photography.",
    src: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Personal Development",
    description: "Unlock your full potential and achieve personal growth.",
    src: "/placeholder.svg",
  },
];
