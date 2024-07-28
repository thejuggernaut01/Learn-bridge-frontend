"use client";
import { courseData } from "@/shared/data";
import CourseCard from "@/shared/components/cards/courseCard";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import ArrowNarrowRight from "/public/icons/arrow-narrow-right.svg";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import HomeReview from "@/shared/components/HomeReview";

export default function Home() {
  return (
    <>
      <main>
        <section className="mt-20 space-y-5 md:mt-0 md:flex items-center md:gap-x-5 md:w-[90%] mx-auto">
          <aside className="w-[90%] mx-auto space-y-6 flex-1">
            <h1 className="text-gray-900 text-4xl font-semibold">
              Unlock Your Potential with Learn Bridge
            </h1>
            <p className="text-gray-700">
              {`Welcome to Learn Bridge, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.`}
            </p>

            <Button
              variant={"default"}
              className="bg-[#3B82F6] hover:bg-[#3B82F6]"
            >
              Start your instructor journey
            </Button>
          </aside>

          <aside className="md:flex justify-center flex-1 hidden">
            <div className="relative w-[90%] h-[600px]">
              <Image
                src={"/images/hero.svg"}
                fill={true}
                alt="About us"
                className="absolute object-contain md:object-fill rounded-3xl  pointer-events-none"
              />
            </div>
          </aside>
        </section>

        <section className="w-[90%] mx-auto mt-7 space-y-3">
          <h3 className="font-semibold text-2xl">Top Courses</h3>

          <Swiper
            spaceBetween={20}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {courseData.map((course) => (
              <SwiperSlide key={course.id}>
                <Link href={`/course/${course.id}`}>
                  <CourseCard {...course} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="bg-muted my-14 ">
          <div className="w-[90%] mx-auto py-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
              <p className="text-muted-foreground">
                Explore courses across a wide range of categories.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <CodeIcon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  Development
                </span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <BookIcon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  Business
                </span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <CameraIcon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  Photography
                </span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <Music2Icon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  Music
                </span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <BrushIcon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  Design
                </span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center"
                prefetch={false}
              >
                <LaptopIcon className="h-12 w-12 text-primary mb-2" />
                <span className="text-muted-foreground text-sm hover:underline">
                  IT & Software
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-14 space-y-8">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold mb-2">What Our Students Say</h2>
            <p className="text-muted-foreground">
              Hear from real students about their experiences with our courses.
            </p>
          </div>
          <HomeReview />
        </section>

        <section className="w-[90%] mx-auto space-y-5">
          <article className="md:flex items-center justify-between xl:gap-16">
            <aside className="flex justify-center flex-1">
              <div className="relative w-[90%] h-[400px]">
                <Image
                  src={"/images/instructor.svg"}
                  fill={true}
                  alt="Instructor"
                  className="absolute object-contain md:object-fill rounded-3xl  pointer-events-none"
                />
              </div>
            </aside>

            <aside className="space-y-3 flex-1">
              <h2 className="text-gray-900 text-3xl font-semibold">
                Become an instructor
              </h2>
              <p>
                Instructors from around the world teach millions of students on
                Byway. We provide the tools and skills to teach what you love.
              </p>
              <Button type="button" className="bg-[#020617]">
                <div className="flex items-center gap-x-1">
                  <p>Start Your Instructor Journey</p>
                  <ArrowNarrowRight />
                </div>
              </Button>
            </aside>
          </article>

          <article className="md:flex flex-row-reverse items-center justify-between xl:gap-16">
            <aside className="flex justify-center flex-1">
              <div className="relative w-[90%] h-[400px]">
                <Image
                  src={"/images/student.svg"}
                  fill={true}
                  alt="Student"
                  className="absolute object-contain md:object-fill rounded-3xl  pointer-events-none"
                />
              </div>
            </aside>

            <aside className="space-y-3 flex-1">
              <h2 className="text-gray-900 text-3xl font-semibold">
                Transform your life through education
              </h2>
              <p>
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives.
              </p>
              <Button type="button" className="bg-[#020617]">
                <div className="flex items-center gap-x-1">
                  <p>Checkout Courses</p>
                  <ArrowNarrowRight />
                </div>
              </Button>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
}

type IconProps = {
  className: string;
};

function BookIcon(props: IconProps) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BrushIcon(props: IconProps) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CameraIcon(props: IconProps) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function CodeIcon(props: IconProps) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LaptopIcon(props: IconProps) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function Music2Icon(props: IconProps) {
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
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}
