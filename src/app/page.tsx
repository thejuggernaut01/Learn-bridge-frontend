"use client";
import { courseData } from "@/shared/data";
import CourseCard from "@/shared/components/custom/courseCard";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import ArrowNarrowRight from "/public/icons/arrow-narrow-right.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import Review from "@/shared/components/ReviewCard";

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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
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
                <CourseCard {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Review />

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
