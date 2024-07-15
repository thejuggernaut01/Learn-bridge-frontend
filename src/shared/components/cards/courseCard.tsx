import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/shared/components/ui/card";

import Image from "next/image";
import React from "react";
import { CourseCardProps } from "@/shared/types";
import { cn } from "@/lib/utils";
import { formatAmount } from "@/shared/utils/formatAmount";

const CourseCard: React.FC<CourseCardProps> = ({
  src,
  title,
  instructor,
  rating,
  enrolled,
  price,
  badge,
  discount,
}) => {
  const discountedPrice = discount && price - (price * discount) / 100;

  return (
    <Card className="w-full border-none space-y-1">
      <Image
        alt={title}
        className="h-[140px] w-full rounded-t-lg object-cover"
        height="200"
        src={src}
        style={{
          aspectRatio: "500/200",
          objectFit: "cover",
        }}
        width="500"
      />
      <CardContent className="p-0 w-[95%] mx-auto pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base md:text-xl">{title}</CardTitle>
          <CardDescription className="text-xs">{instructor}</CardDescription>

          <div className="flex items-center gap-x-1">
            <CardDescription className="text-[#612012] font-semibold">
              {rating}
            </CardDescription>
            <CardDescription className="text-xs">({enrolled})</CardDescription>
          </div>

          <div className="flex items-center gap-x-2">
            <CardDescription
              className={cn("", discount && "text-black font-semibold text-lg")}
            >
              {discount && formatAmount(discountedPrice!)}
            </CardDescription>
            <CardDescription
              className={cn(
                "line-through",
                !discount && "text-black font-semibold text-lg no-underline"
              )}
            >
              {formatAmount(price)}
            </CardDescription>
          </div>
          <CardDescription
            className={cn(
              "",
              badge &&
                "bg-black text-white max-w-fit px-2 py-1 rounded-full text-[10px]"
            )}
          >
            {badge}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
