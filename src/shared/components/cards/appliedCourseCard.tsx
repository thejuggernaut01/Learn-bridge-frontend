import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/shared/components/ui/card";

import Image from "next/image";
import React from "react";
import { AppliedCardProps } from "@/shared/types";
import { Progress } from "../ui/progress";

const AppliedCourseCard: React.FC<AppliedCardProps> = ({
  src,
  title,
  instructor,
  rating,
  progress,
}) => {
  return (
    <Card className="w-full border-none space-y-1">
      <Image
        alt={title}
        className="h-[140px] w-full rounded-t-lg object-cover"
        height="200"
        src={src}
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
        width="500"
      />
      <CardContent className="p-0 w-[95%] mx-auto pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base md:text-lg">{title}</CardTitle>
          <CardDescription className="text-xs">By {instructor}</CardDescription>

          <Progress value={progress} className="w-full h-1" />

          <div className="flex items-center gap-x-1">
            <CardDescription className="text-[#612012] font-semibold">
              {rating}
            </CardDescription>
            <CardDescription className="text-gray-900 text-sm font-medium">
              (1200 Ratings)
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppliedCourseCard;
