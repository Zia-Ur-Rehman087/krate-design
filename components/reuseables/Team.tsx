'use client'
import SectionHeading from "../common/SectionHeading";
import { Team1Data } from "@/utils/enums/teamData";
import TeamCard from "../common/TeamCard";
import TeamSectionTwo from "./TeanSectionTwo";

const TeamSectionOne = () => {

  return (
    <div className="flex flex-col gap-10" id="team">
      <SectionHeading heading="Our Team" />
      <div className="flex w-full gap-10 flex-wrap xl:flex-nowrap">
        <div className="w-full xl:w-1/2">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-4/5">
            We are passionate about creating visually stunning and functional solutions that communicate effectively.</p>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="flex justify-between gap-6 xl:gap-8 flex-wrap sm:flex-nowrap w-full">
            {
              Team1Data?.map(tm => (
                <div key={tm?.id} className="w-full md:w-1/2">

                  <TeamCard key={tm?.id} image_url={tm?.image} name={tm?.name} designation={tm?.designation} />
                </div>
              ))
            }
          </div>
        </div>
      </div>


      <TeamSectionTwo />
    </div>
  );
};

export default TeamSectionOne;
