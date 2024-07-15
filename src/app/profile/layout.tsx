"use client";
import { cn } from "@/lib/utils";
import { profileMenuItems } from "@/shared/data/profile.";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <main className="w-[90%] mx-auto">
        <section className="lg:flex mt-8 gap-x-7">
          <aside className="w-[300px]">
            <div className="lg:flex flex-col bg-[#F8FAFC] w-[95%] mx-auto rounded-xl space-y-10 hidden">
              <div className="flex justify-center mt-5">
                <Image
                  src="/images/ronald-richard.svg"
                  width={120}
                  height={120}
                  alt="Ronald Richard - UI/UX Designer"
                />
              </div>
              <div className="space-y-">
                {profileMenuItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.link}
                    className={cn(
                      "py-3 cursor-pointer text-sm pl-3 block",
                      pathname === item.link && "bg-primary text-white",
                      pathname === "/profile/settings" && "rounded-b-lg"
                    )}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
          {children}
        </section>
      </main>
    </>
  );
}
