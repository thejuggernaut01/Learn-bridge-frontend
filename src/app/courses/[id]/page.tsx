import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        <section className="bg-[#EFF6FF] mt-2 py-10">
          <article className="space-y-7 w-[90%] mx-auto md:flex md:gap-x-8 relative">
            <aside className="space-y-4 md:w-[55%]">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      Introduction to User Experience Design
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="space-y-3 text-sm text-gray-700">
                <h2 className="text-3xl font-semibold">
                  Introduction to User Experience Design
                </h2>
                <p>
                  This course is meticulously crafted to provide you with a
                  foundational understanding of the principles, methodologies,
                  and tools that drive exceptional user experiences in the
                  digital landscape.
                </p>

                <div className="space-y-5">
                  <div className="divide-x-2 text-xs flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                      <p className="text-[#FEC84B] flex items-center gap-x-1">
                        <span className="mt-1">4.6</span>
                        <Image
                          src="/icons/star.svg"
                          alt="Course rating"
                          width={15}
                          height={15}
                        />
                      </p>
                      <p>(651651 rating)</p>
                    </div>
                    <p className="space-x-1 pl-2">
                      <span>22 Total Hours.</span>
                      <span>155 Lectures.</span>
                      <span>All levels</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/jane-doe.svg"
                      alt="Course Creator"
                      width={25}
                      height={25}
                    />
                    <p>
                      Created by <span className="text-blue-600">Jane Doe</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/icons/globe.svg"
                      alt="Languages"
                      width={20}
                      height={20}
                    />
                    <span>English, Spanish, Italian, German</span>
                  </div>
                </div>
              </div>
            </aside>

            <aside className="md:w-[45%] lg:w-[400px] md:absolute -right-7">
              <Card className="relative group overflow-hidden rounded-lg shadow-sm">
                <div className="p-3">
                  <Image
                    alt={"Introduction to User Experience Design"}
                    className="w-full rounded-t-lg object-cover object-top"
                    height="300"
                    src={"/images/ux-design.svg"}
                    style={{
                      aspectRatio: "600/300",
                      objectFit: "cover",
                    }}
                    width="380"
                  />
                </div>
                <CardContent className="space-y-4 p-0 w-[96%] mx-auto mb-5">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-3">
                      <p className="font-semibold text-xl">$49.5</p>
                      <p className="line-through text-gray-500">$99.5</p>
                    </div>
                    <p className="text-[#16A34A] text-sm">50% Off</p>
                  </div>

                  <div className="space-y-2">
                    <Button
                      size="lg"
                      className="w-full text-white bg-[#020617]"
                    >
                      Add To Cart
                    </Button>
                    <Button
                      variant={"outline"}
                      size="lg"
                      className="w-full text-[#020617] bg-white"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </article>
        </section>

        <section className="w-[90%] mx-auto mt-10 lg:mt-16 xl:mt-24">
          <article className="space-y-4 lg:w-[720px] xl:w-[920px]">
            <aside className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Course Description</h3>
                <p className="text-gray-700 text-sm">
                  This interactive e-learning course will introduce you to User
                  Experience (UX) design, the art of creating products and
                  services that are intuitive, enjoyable, and user-friendly.
                  Gain a solid foundation in UX principles and learn to apply
                  them in real-world scenarios through engaging modules and
                  interactive exercises.{" "}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Certification</h3>
                <p className="text-gray-700 text-sm">
                  At Learn Bridge, we understand the significance of formal
                  recognition for your hard work and dedication to continuous
                  learning. Upon successful completion of our courses, you will
                  earn a prestigious certification that not only validates your
                  expertise but also opens doors to new opportunities in your
                  chosen field.
                </p>
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
