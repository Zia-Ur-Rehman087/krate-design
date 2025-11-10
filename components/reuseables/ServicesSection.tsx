'use client'
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/utils/enums/FAQData";
import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-10" id="services" >
      {" "}
      {/* section Heading */}
      <SectionHeading heading="Our Services" />
      <Accordion type="single" collapsible className="w-full ">
        {FAQData?.map((faq) => {
          return (
            <AccordionItem
              key={faq?.id}
              value={`item-${faq.id}`}
              className="border-border-col py-3.5"
            >
              <AccordionTrigger className="text-xl md:text-2xl lg:text-4xl font-bold cursor-pointer no-underline hover:no-underline ">
                <div className="flex gap-8">
                  <div className="relative hidden sm:block">
                    <Image
                      src={faq?.image}
                      width={150}
                      height={40}
                      alt={faq.title}
                    />
                  </div>
                  <p> {faq?.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-primary text-base">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ServicesSection;
