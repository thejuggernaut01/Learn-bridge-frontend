import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main className="w-[90%] mx-auto mt-10 space-y-5">
        <h2 className="text-3xl font-semibold">Shopping Cart</h2>

        <section className="space-y-10 lg:space-y-0 lg:flex lg:gap-x-10">
          <aside className="space-y-5 lg:w-[70%]">
            <p className="text-xs sm:text-sm">1 Course in cart</p>
            <Separator />

            <div className="space-y-4">
              {CART_DATA.map((data) => (
                <Card
                  key={data.id}
                  className="relative rounded-lg shadow-sm flex gap-x-5 p-3 text-xs sm:text-sm"
                >
                  <div className="p-1 relative w-[250px] h-[90px]">
                    <Image
                      alt={"Introduction to User Experience Design"}
                      className="absolute w-full rounded-t-lg object-contain object-top"
                      fill={true}
                      src={"/images/ux-design.svg"}
                    />
                  </div>
                  <CardContent className="space-y-2 p-0 w-[96%] mx-auto text-gray-700">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold md:text-base">
                        {data.courseTitle}
                      </h4>
                      <p className="font-semibold md:text-base hidden md:block">
                        ${data.price}
                      </p>
                    </div>
                    <p>By {data.instructor}</p>
                    <div className="md:divide-x-2 text-xs md:flex items-center gap-x-2">
                      <div className="flex items-center gap-x-1">
                        <p className="text-[#FEC84B] flex items-center gap-x-1">
                          <span className="mt-1 text-[#64748B]">
                            {data.rating}
                          </span>
                          <Image
                            src="/icons/star.svg"
                            alt="Course rating"
                            width={15}
                            height={15}
                          />
                        </p>
                        <p className="mt-1">({data.numberOfReviews} rating)</p>
                      </div>
                      <p className="space-x-1 md:pl-2">
                        <span>{data.hours} Total Hours.</span>
                        <span>{data.lectures} Lectures.</span>
                        <span>{data.levels} levels</span>
                      </p>
                    </div>
                    <p className="font-semibold md:text-base md:hidden">
                      ${data.price}
                    </p>
                    <button className="text-destructive text-xs ">
                      Remove
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>

          <aside className="lg:w-[35%]">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <Card className="shadow-none bg-[#F8FAFC] border-transparent p-4">
              <CardContent className="space-y-4 p-0 text-sm md:text-base">
                <div className="flex items-center justify-between">
                  <span>Price</span>
                  <span>$300.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span>-$10.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span>$20.00</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>$290.00</span>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <Link href="/checkout" className="w-full" prefetch={false}>
                <Button size="lg" className="w-full text-white ">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default page;

const CART_DATA = [
  {
    id: 1,
    instructor: "Jane Doe",
    courseTitle: "Introduction to User Experience Design",
    imgSrc: "/images/ui-design.svg",
    rating: "4.6",
    numberOfReviews: "250",
    hours: 22,
    lectures: 155,
    levels: "All",
    price: "45.00",
  },
  {
    id: 2,
    instructor: "Jane Doe",
    courseTitle: "Introduction to User Experience Design",
    imgSrc: "/images/ui-design.svg",
    rating: "4.6",
    numberOfReviews: "250",
    hours: 22,
    lectures: 155,
    levels: "All",
    price: "45.00",
  },
  {
    id: 3,
    instructor: "Jane Doe",
    courseTitle: "Introduction to User Experience Design",
    imgSrc: "/images/ui-design.svg",
    rating: "4.6",
    numberOfReviews: "250",
    hours: 22,
    lectures: 155,
    levels: "All",
    price: "45.00",
  },
];
