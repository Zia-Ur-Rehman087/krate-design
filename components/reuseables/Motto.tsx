import {
  mottoLogosSection,
  mottoLogosSectionTwo,
} from "@/utils/enums/logosData";
import React from "react";

const MottoSection = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap md:gap-1.5 gap-10 py-10" id="about">
      <div className="w-full md:w-1/2">
        <p className=" sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-justify">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively. I have a keen eye for detail
          and a deep understanding of design principles, which I use to deliver
          projects that exceed my clients' expectations.
        </p>
      </div>
      <div className="w-full md:w-1/2 ">
        <div className="flex w-full justify-end ">
          <div className="flex flex-col h-full gap-5 items-center md:items-end justify-end w-full md:w-1/2">
            {mottoLogosSection.map((item) => {
              const LogoComponent = item.logo;
              return <LogoComponent key={item.id} />;
            })}
          </div>
          <div className="flex flex-col h-full gap-5 items-center md:items-end justify-end w-full md:w-1/2">
            {mottoLogosSectionTwo.map((item) => {
              const LogoComponent = item.logo;
              return <LogoComponent key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MottoSection;
