import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="bg-gray-700 mt-14">
        <aside className="py-10 w-[90%] mx-auto space-y-14">
          <div className="text-white space-y-10 md:space-y-0 md:flex md:justify-between md:gap-x-10">
            <div className="space-y-2 md:w-[40%]">
              <Link href="/" className="flex items-center">
                <Image
                  src="/icons/logo.svg"
                  width={30}
                  height={30}
                  alt="Welcome to learn bridge"
                />
                <p className="text-sm">Learn Bridge</p>
              </Link>
              <p className="w-[90%] text-pretty">
                Empowering learners through accessible and engaging online
                education. Byway is a leading online learning platform dedicated
                to providing high-quality, flexible, and affordable educational
                experiences.
              </p>
            </div>

            <div className="space-y-3 md:md:w-[20%]">
              <h3 className="text-[#98A2B3] text-sm font-medium">Company</h3>

              <Link href="/" className="block">
                About us
              </Link>

              <Link href="/" className="block">
                Careers
              </Link>

              <Link href="/" className="block">
                Referrals
              </Link>

              <Link href="/" className="block">
                Support
              </Link>
            </div>

            <div className="space-y-3 md:md:w-[20%]">
              <h3 className="text-[#98A2B3] text-sm font-medium">Programs</h3>

              <Link
                href="/"
                className="block"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Art & Design
              </Link>
              <Link href="/" className="block">
                Business
              </Link>
              <Link href="/" className="block">
                IT & Software
              </Link>
              <Link href="/" className="block">
                Languages
              </Link>
              <Link href="/" className="block">
                Programming
              </Link>
            </div>

            <div className="space-y-3 md:md:w-[20%]">
              <h3 className="text-[#98A2B3] text-sm font-medium">Social</h3>
              <Link
                href="/"
                className="block"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Facebook
              </Link>

              <Link
                href="/"
                className="block"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Github
              </Link>

              <Link
                href="/"
                className="block"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Google
              </Link>
              <Link
                href="/"
                className="block"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Twitter
              </Link>
            </div>
          </div>

          <div className="space-y-10">
            <hr />
            <div className="md:flex md:justify-between md:items-center">
              <div>
                {/* <Icon name="wellat-mobile-logo" className="md:hidden" />

              <Icon name="wellat-desktop-logo" className="hidden md:block" /> */}
              </div>
              <p className="text-[#98A2B3] text-sm">
                © {currentYear} Learn Bridge. All rights reserved.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Footer;
