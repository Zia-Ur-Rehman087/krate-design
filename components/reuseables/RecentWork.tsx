"use client";
import React, { useMemo, useState } from "react";

import SectionHeading from "../common/SectionHeading";
import { recentWorkData } from "@/utils/enums/recentWorkData";
import Image from "next/image";
import { Button } from "../ui/button";
import IconButtonArrow from "../icons/IconButtonArrow";
const RecentWork = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const visibleData = useMemo(
    () => recentWorkData.slice(0, visibleCount),
    [visibleCount]
  );
  const handleLoadMore = () => {
    if (visibleCount < recentWorkData?.length) {
      setVisibleCount((prev) => prev + 2);
      return;
    }
    setVisibleCount(4);
  };
  return (
    <div className="flex flex-col gap-10" id="projects">
      <SectionHeading heading="Recent Work" />
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 transition-all duration-1000 ease-linear">
        {visibleData?.map((wd) => (
          <div
            key={wd?.id}
            className={`flex flex-col border border-border-col rounded-2xl overflow-hidden ${visibleData.includes(wd) ? "animate-fadeInUp" : ""
              }`}
          >
            <div className="relative w-full h-[450px] ">
              <Image
                src={wd?.image}
                fill
                alt={wd?.title}
                className="w-full h-full"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl p-8 font-semibold">
              {wd?.title}
            </p>
          </div>
        ))}
      </div>
      <div className="group w-full">
        <Button
          onClick={handleLoadMore}
          className="w-full! bg-transparent text-white! border border-border-col rounded-full py-6! group-hover:bg-white! cursor-pointer group-hover:text-black! font-semibold"
        >
          View all work
          <IconButtonArrow className="text-white group-hover:text-black" />
        </Button>
      </div>
    </div>
  );
};

export default RecentWork;
