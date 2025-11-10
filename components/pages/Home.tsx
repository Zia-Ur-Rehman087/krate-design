import React from "react";
import HeroSection from "../reuseables/HeroSection";
import MottoSection from "../reuseables/Motto";
import ServicesSection from "../reuseables/ServicesSection";
import RecentWork from "../reuseables/RecentWork";
import TeamSectionOne from "../reuseables/Team";
import CTASection from "../reuseables/CTASection";
import Footer from "../reuseables/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <MottoSection />
      <ServicesSection />
      <RecentWork />
      <TeamSectionOne />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
