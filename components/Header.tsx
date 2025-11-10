'use client'
import React from "react";
import { Button } from "./ui/button";
import { IconPenci } from "./icons/IconPenci";
import Image from "next/image";
import IconHamBurger from "./icons/IconHamBurger";
import Link from "next/link";
import IconCalendar from "./icons/IconCalendar";
import { menuItems } from "@/utils/enums/header-menu";
import { handleScroll } from "@/utils/functions/HandleScroll";

const Header = () => {
 
  return (
    <div className="flex overflow-hidden   border-2 border-border-col   my-5 md:my-10 rounded-3xl">
      <div className="w-auto md:w-[200px] border-2 border-transparent border-r-border-col flex items-center justify-center px-5">
        <div className="relative flex-none">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex border-b-2 border-border-col">
          <ul className=" w-full justify-center gap-10 p-5 hidden md:flex">
            {menuItems?.map((el) => (
              <li key={el?.id}>
                <Link href={`#`} className="text-primary" scroll={false} onClick={() => handleScroll(el?.link)}>{el?.linkText}</Link>
              </li>
            ))}
          </ul>
          <div className="w-full md:w-auto flex items-center justify-center md:border-l-2  border-border-col">
            <IconHamBurger />
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button className="bg-transparent flex  text-xs md:text-sm lg:text-base font-normal md:font-semibold hover:bg-transparent border-none outline-none cursor-pointer w-1/2 text-primary  py-6" onClick={()=> handleScroll('services') }>
            <IconPenci />
            Services
          </Button>
          <Button className="bg-transparent text-xs md:text-sm lg:text-base font-normal md:font-semibold hover:bg-transparent rounded-none outline-none text-primary cursor-pointer text-shadow-amber-200   w-1/2 border-l-2 border-border-col  py-6" onClick={()=> handleScroll('contact') }>
            <IconCalendar className="text-[#BDBDBD]" />
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
