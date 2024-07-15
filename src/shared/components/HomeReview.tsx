import { cn } from "@/lib/utils";
import Marquee from "@/shared/components/custom/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Learn bridge has a huge variety of courses and great instructors. Highly recommend!",
    // img: "https://avatar.vercel.sh/jack",
    img: "/images/jane-doe.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Love Learn bridge! Well-structured courses at my own pace. Perfect for learning.",
    img: "/images/jane-doe.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "Affordable, comprehensive courses on Learn bridge. Flexible learning anytime.",
    img: "/images/jane-doe.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Learn bridge's content and instructors are top-notch. My go-to for upskilling.",
    img: "/images/jane-doe.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Great platform for learning new skills. User-friendly and well-curated.",
    img: "/images/jane-doe.svg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/jane-doe.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const HomeReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const HomeReview = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <HomeReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <HomeReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default HomeReview;
