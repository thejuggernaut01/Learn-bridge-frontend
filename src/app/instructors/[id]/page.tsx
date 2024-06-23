"use client";
import CourseCard from "@/shared/components/custom/courseCard";
import { courseData } from "@/shared/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Button } from "@/shared/components/ui/button";

const page = () => {
  return (
    <>
      <section className="w-[90%] mx-auto mt-10 lg:mt-16 xl:w-[1200px]">
        <article className="space-y-6">
          <aside className="space-y-8 md:flex justify-between flex-row-reverse gap-x-12">
            <div className="space-y-4  md:w-[45%]">
              <Image
                src="/images/ronald-richard.svg"
                width={170}
                height={170}
                alt="Ronalds Richard - UI/UX Designer"
              />
              <div className="space-y-3 hidden md:block">
                <Button layout={"full"} className="h-[48px]">
                  Send message
                </Button>
                <Button
                  variant={"outline"}
                  layout={"full"}
                  className="h-[48px] border-primary"
                >
                  Twitter
                </Button>
                <Button
                  variant={"outline"}
                  layout={"full"}
                  className="h-[48px] border-primary"
                >
                  LinkedIn
                </Button>
                <Button
                  variant={"outline"}
                  layout={"full"}
                  className="h-[48px] border-primary"
                >
                  Youtube
                </Button>
              </div>
            </div>

            <div className="space-y-5 md:w-[85%]">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 ">
                    INSTRUCTOR
                  </p>
                  <h3 className="text-4xl font-semibold">Ronald Regan</h3>
                </div>
                <p className="font-medium">Software Designer</p>
                <div className="flex items-center gap-x-6">
                  <div className="space-y-1">
                    <p className="text-gray-700 font-medium text-sm">
                      Total students
                    </p>
                    <p className="text-2xl font-semibold">1,416,338</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-700 font-medium text-sm">Reviews</p>
                    <p className="text-2xl font-semibold">461,086</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h5 className="text-gray-900 font-medium text-lg">About me</h5>
                <p className="text-gray-700 lg:w-[80%] text-justify">
                  Ronald Richard is a highly skilled UX/UI Designer with over a
                  decade of experience in crafting user-centric digital
                  solutions. With a background in graphic design and a keen eye
                  for detail, Ronald specializes in creating intuitive
                  interfaces that delight users and drive business results.
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="text-gray-900 font-medium text-lg">
                  Areas of Expertise
                </h5>
                <ul className="list-disc text-gray-700 w-[90%] mx-auto">
                  <li>User Experience (UX) Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>Information Architecture</li>
                  <li>Interaction Design</li>
                  <li>Visual Design</li>
                  <li>Usability Testing</li>
                  <li>Wireframing and Prototyping</li>
                  <li>Design Thinking</li>
                </ul>
              </div>
            </div>
          </aside>

          <aside className="space-y-3">
            <h3 className="font-semibold text-lg">My Courses</h3>

            <Swiper
              spaceBetween={20}
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
          </aside>

          <aside className="space-y-3 md:hidden">
            <Button layout={"full"} className="h-[48px]">
              Send message
            </Button>
            <Button
              variant={"outline"}
              layout={"full"}
              className="h-[48px] border-primary"
            >
              Twitter
            </Button>
            <Button
              variant={"outline"}
              layout={"full"}
              className="h-[48px] border-primary"
            >
              LinkedIn
            </Button>
            <Button
              variant={"outline"}
              layout={"full"}
              className="h-[48px] border-primary"
            >
              Youtube
            </Button>
          </aside>
        </article>
      </section>
    </>
  );
};

export default page;
