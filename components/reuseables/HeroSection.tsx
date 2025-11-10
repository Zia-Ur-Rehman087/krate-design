"use client";

import useWindowSize from "@/utils/functions/HandleResize";
const sizes = {
  320: {
    sliceCount: 3,
  },
  640: {
    sliceCount: 5,
  },
  768: {
    sliceCount: 6,
  },
  1024: {
    sliceCount: 7,
  },
  1280: {
    sliceCount: 10,
  },
};
const HeroSection = () => {
  const { width } = useWindowSize();
  const getSliceCount = (width: number) => {
    const breakpoints = Object.keys(sizes)
      .map(Number)
      .sort((a, b) => a - b);
    let sliceCount = 5;
    for (const bp of breakpoints) {
      if (width >= bp) {
        sliceCount = sizes[bp as keyof typeof sizes].sliceCount;
      } else {
        break;
      }
    }
    return sliceCount;
  };

  // Usage:
  const imageSliceCount = getSliceCount(width);
  const sliceWidth = 100 / imageSliceCount;
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-9xl font-bold w-4/5 mx-auto py-5 md:py-10">
        Krate design and motion studio
      </h1>
      <div className="relative w-full h-full flex  gap-5 mx-auto justify-between">
        {Array.from({ length: imageSliceCount })?.map((_, i) => {
          return (
            <div
              key={i+1}
              className={`h-[40vh] md:h-[65vh] lg:h-[80vh]  rounded-full `}
              style={{
                width: `${sliceWidth}%`,
                backgroundImage: `url('/assets/parallelX.png')`,
                backgroundSize: `${imageSliceCount * 100}% 100%`,
                backgroundPosition: `${(100 / imageSliceCount) * i}% center`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
