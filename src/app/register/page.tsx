import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import React from "react";
import ArrowNarrowRight from "/public/icons/arrow-narrow-right.svg";
import Facebook from "/public/icons/facebook.svg";
import Google from "/public/icons/google.svg";
import Microsoft from "/public/icons/microsoft.svg";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="flex items-center mt-10 sm:mt-16 md:mt-0">
        <section className="hidden lg:block relative min-h-screen md:flex-1">
          <Image
            src="/images/create.svg"
            alt="Create your account"
            width={500}
            height={500}
            priority={true}
            className="absolute w-full object-cover h-full"
          />
        </section>

        <section className="space-y-8 w-[90%] md:flex-1 mx-auto px-10 xl:px-20">
          <div className="space-y-8">
            <h1 className="text-gray-900 font-semibold text-3xl text-center">
              Create your account
            </h1>

            <form action="" className="space-y-6">
              <div className="flex items-center justify-between gap-x-5 md:gap-x-8">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstName" className="text-gray-900">
                    Full Name
                  </Label>
                  <Input type="text" id="firstName" placeholder="First Name" />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastName" className="text-gray-900">
                    Last Name
                  </Label>
                  <Input type="text" id="lastName" placeholder="Last Name" />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="username" className="text-gray-900">
                  Username
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="w-full"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-gray-900">
                  Email
                </Label>
                <Input type="email" id="email" placeholder="Email ID" />
              </div>

              <div className="flex items-center justify-between gap-x-5 md:gap-x-8">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="password" className="text-gray-900">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="confirmPassword" className="text-gray-900">
                    Confirm password
                  </Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <Button type="button" className="bg-[#020617]">
                <div className="flex items-center gap-x-1">
                  <p>Create account</p>
                  <ArrowNarrowRight />
                </div>
              </Button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="flex items-center w-full gap-x-5">
              <Separator className="flex-1 h-[2px]" />
              <button className="text-disable text-sm">Sign up</button>
              <Separator className="flex-1 h-[2px]" />
            </div>

            <div className="flex gap-x-4">
              <Button
                type="button"
                variant={"outline"}
                className="space-x-2 flex-1 h-11 flex items-center"
              >
                <Facebook />
                <p className="text-[#0866FF] text-sm mt-1">Facebook</p>
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className="space-x-2 flex-1 h-11 flex items-center"
              >
                <Google />
                <p className="text-[#EA4335] text-sm mt-1">Google</p>
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className="space-x-2 flex-1 h-11 flex items-center"
              >
                <Microsoft />
                <p className="text-sm mt-1">Microsoft</p>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
