import React from "react";

const ReviewCard = () => {
  return (
    <>
      <div className="text-gray-900 border border-[#E2E8F0] p-4 rounded-xl space-y-2 text-sm">
        <p>
          Course Name:{" "}
          <span className="font-medium">{`Beginner's Guide to Design`}</span>
        </p>
        <p>
          Rating: <span className="text-[#612012] font-semibold">4.6</span>
        </p>
        <div className="flex gap-x-2">
          <p>Review:</p>
          <p className="text-gray-700 mt-[2px] line-clamp-4 md:line-clamp-none">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
