import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { courseContentData } from "@/shared/data";
import { Checkbox } from "@/shared/components/ui/checkbox";

const page = () => {
  return (
    <>
      <main>
        <section className="mt-2 py-5 space-y-3 w-[90%] mx-auto">
          <h2 className="font-medium text-xl">
            Introduction to User Experience Design
          </h2>
          <article className="space-y-7 lg:flex lg:gap-x-3 lg:space-y-0 relative">
            <aside className="lg:w-[65%]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={"/images/watch-course.svg"}
                  fill={true}
                  layout="fill"
                  objectFit="cover"
                  alt="Introduction to User Experience Design"
                  className="absolute object-cover md:object-fill rounded-3xl pointer-events-none"
                />

                <Image
                  src={"/icons/watch.svg"}
                  width={50}
                  height={50}
                  alt="Play"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </aside>

            <aside className="space-y-1 lg:w-[45%]">
              <h3 className="text-lg font-semibold">Course content</h3>
              <Accordion
                type="single"
                collapsible
                className="w-full border px-5 rounded-lg text-xs sm:text-sm"
              >
                {courseContentData.map((course) => (
                  <AccordionItem value={`item-${course.id}`} key={course.id}>
                    <AccordionTrigger>
                      <p>{course.section}</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      {course.lectures.map((data, index) => (
                        <div
                          key={data.title}
                          className="flex items-center justify-between space-y-3"
                        >
                          <div className="flex gap-x-2 w-[80%]">
                            <Checkbox checked={data.completed} />
                            <p>
                              {index + 1}. {data.title}
                            </p>
                          </div>
                          <p className="flex items-center gap-x-2 whitespace-nowrap text-[#64748B] lg:w-[20%]">
                            <Image
                              src="/icons/video-recorder.svg"
                              width={18}
                              height={18}
                              alt={`${data.duration} Duration`}
                            />
                            {data.duration}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </aside>
          </article>
        </section>

        <section className="w-[90%] mx-auto mt-10 lg:mt-16 xl:mt-24">
          <article className="space-y-4 lg:w-[720px] xl:w-[920px]">
            <aside className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Course Overview</h3>
                <p className="text-gray-700 text-sm">
                  {`Embark on a transformative journey into the dynamic world of
                  User Experience (UX) Design with our comprehensive course,
                  "Introduction to User Experience Design." This course is
                  meticulously crafted to provide you with a foundational
                  understanding of the principles, methodologies, and tools that
                  drive exceptional user experiences in the digital landscape.`}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  Key Learning Objectives
                </h3>
                <ul className="text-gray-700 text-sm list-disc ml-7 space-y-1">
                  <li>{`Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital world.`}</li>
                  <li>
                    Explore the fundamental principles of user-centered design
                    and how to apply them to create intuitive and user-friendly
                    interfaces.
                  </li>
                  <li>
                    Learning about the various elements that contribute to a
                    positive user experience, including information
                    architecture, interaction design and visual design.
                  </li>
                </ul>
              </div>
            </aside>

            <Separator />

            <aside className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">Instructor</h3>
              <div>
                <h4 className="text-blue-600 font-semibold">Ronald Richards</h4>
                <p>UI/UX Designer</p>
              </div>

              <div className="flex items-center gap-x-3">
                <Image
                  src="/images/ronald-richard.svg"
                  width={100}
                  height={100}
                  alt="Ronalds Richard - UI/UX Designer"
                />

                <div className="text-sm">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/icons/reviews.svg"
                      width={20}
                      height={20}
                      alt="Reviews"
                    />
                    <p>40,445 Reviews</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/icons/students.svg"
                      width={20}
                      height={20}
                      alt="Students"
                    />
                    <p>500 Students</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/icons/play.svg"
                      width={20}
                      height={20}
                      alt="Play"
                    />
                    <p>15 Courses</p>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                With over a decade of industry experience, Ronald brings a
                wealth of practical knowledge to the classroom. He has played a
                pivotal role in designing user-centric interfaces for renowned
                tech companies, ensuring seamless and engaging user experiences.
              </p>
            </aside>

            <Separator />

            <aside className="space-y-4">
              <h3 className="text-lg font-semibold">Syllabus</h3>
              <Accordion
                type="single"
                collapsible
                className="w-full border px-5 rounded-lg text-xs sm:text-sm"
              >
                {SYLLABUS_DATA.map((data) => (
                  <AccordionItem value={`item-${data.id}`} key={data.id}>
                    <AccordionTrigger>
                      <div className="flex items-center justify-between w-full">
                        <p>{data.section}</p>
                        <p className="space-x-3 text-gray-700 text-xs">
                          <span>{data.lessons} Lessons</span>
                          <span>{data.time}</span>
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </aside>

            <Separator />

            <aside className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold">Learner Reviews</h3>

              {REVIEWS_DATA.map((data) => (
                <Card
                  key={data.id}
                  className="relative group overflow-hidden rounded-lg shadow-sm flex gap-x-10 p-3 text-xs sm:text-sm"
                >
                  <div className="flex items-center self-start gap-x-2 w-[45%] ">
                    <Image
                      src={data.imgSrc}
                      width={40}
                      height={40}
                      alt={data.name}
                    />
                    <p>{data.name}</p>
                  </div>
                  <CardContent className="space-y-2 p-0 w-[96%] mx-auto mb-5">
                    <div className="flex items-center gap-x-5">
                      <p className="text-[#FEC84B] flex items-center gap-x-1">
                        <Image
                          src="/icons/star.svg"
                          alt="Course rating"
                          width={15}
                          height={15}
                        />
                        <span className="mt-1">{data.rating}</span>
                      </p>
                      <p>Reviewed on {data.date}</p>
                    </div>
                    <p>{data.review}</p>
                  </CardContent>
                </Card>
              ))}
              <Button variant={"outline"} className="text-xs">
                View more reviews
              </Button>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default page;

const SYLLABUS_DATA = [
  {
    id: 1,
    section: "Introduction to UX Design",
    lessons: 5,
    time: "1 hour",
  },
  {
    id: 2,
    section: "Basics of User-Centered Design",
    lessons: 5,
    time: "1 hour",
  },
  {
    id: 3,
    section: "Elements of User Experience",
    lessons: 5,
    time: "1 hour",
  },
  {
    id: 4,
    section: "Visual Design Principles",
    lessons: 5,
    time: "1 hour",
  },
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Jane Doe",
    imgSrc: "/images/jane-doe.svg",
    rating: "5",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    id: 2,
    name: "Jane Doe",
    imgSrc: "/images/jane-doe.svg",
    rating: "5",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    id: 3,
    name: "Jane Doe",
    imgSrc: "/images/jane-doe.svg",
    rating: "4",
    date: "22nd March, 2024",
    review:
      "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];
