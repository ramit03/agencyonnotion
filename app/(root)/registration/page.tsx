"use client";
import Lamp from "@/components/common/Lamp";
import OfferingsCard from "@/components/common/OfferingsCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
function Registration() {
  const data = [
    {
      first: "hire us to do it for you",
      title: "AGENCY",
      body: "Elevate your project with our expert agency services. We'll take care of everything, transforming your vision into reality.",
    },
    {
      first: "learn how to do it yourself",
      title: "COURSES",
      body: "Empower your journey with our comprehensive courses. Gain the skills you need to stand out and take control of your future.",
    },
  ];
  return (
    <main className="w-full  bg-black text-white *:font-neue ">
      <section className=" w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 ">
          {/* <Lamp> */}
          <div className="px-8 lg:px-24 2xl:px-72 pt-0">
            <div className="h-fit flex flex-col mx-auto w-fit relative gap-0 items-center">
              <h1 className="mt-16 text-pretty md:mt-24 hone flex flex-col gap-0 leading-none  font-bold uppercase text-center">
                <span className="leading-none">No more band-aids</span>
                <div>
                  <div className="bottom-16 right-6 md:bottom-8 md:-right-2 xl:bottom-4 lg:-right-8 absolute ">
                    <div className="w-28 h-20 md:w-40 md:h-20 lg:w-44 lg:h-[120px] xl:w-52 xl:h-[150px] relative">
                      <Image
                        src={"/images/bandaid.png"}
                        fill
                        alt="bandaid"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span>on bullet wounds</span>
              </h1>
            </div>
            <p className="font-light mt-7 lg:mt-10 para xl:text-balance  text-center">
              Most business advice online seeks to solve the symptom. We dig
              deeper than surface-level issues to find and fix the underlying
              problems.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center mt-14 lg:mt-24">
              <Button className="bg-red-1  px-0 md:px-7 py-7 rounded-none  border-red-1 border-2">
                <p className="uppercase buttontext tracking-widest">
                  shop courses and tools
                </p>
              </Button>
              <Button variant={"secondary"} className="px-7 py-7 rounded-none">
                <p className="uppercase buttontext tracking-widest">Hire Us</p>
              </Button>
            </div>
          </div>
          {/* </Lamp> */}
        </div>
        <div className="w-full mt-10 z-20 overflow-x-hidden">
          <div className="border-solid border-b-[#181515] border-b-[100px] md:border-b-[200px] border-l-transparent border-l-[100vw] border-r-transparent border-t-0" />
        </div>
      </section>
      <section className="w-full bg-[#181515] flex justify-center flex-col items-center  ">
        <div className=" grid grid-cols-1 max-w-5xl ">
          <div className="pt-24 pb-8 md:pb-12 lg:pb-24 px-8 md:px-16 lg:px-24">
            <div className="relative">
              <h2 className="htwo  text-center uppercase">
                Have you ever looked at your favorite Brand or creator and
                wondered if they're just plain lucky?
              </h2>
              <p className="mt-12 mb-24 para text-pretty text-center font-light">
                Chances are, you've experimented with various step-by-step
                formulas that everyone claims will eventually help you break
                through the clutter.
              </p>
              <div className="w-full">
                {/* <motion.div
                  whileHover={{ rotate: 3600,}}
                  transition= {{ duration: 20, loop: Infinity, ease: "linear" }}
                
                  className="flex flex-row size-40 items-center border-white-1 border-2 rounded-full"
                >
                  <div className="size-20 border-white-1 border-2 rounded-full" />
                  <div className="size-20 border-white-1 border-2 rounded-full" />
                </motion.div> */}
              </div>
              <div className="w-full h-[60svh] md:h-[50vh] relative">
                <Image
                  src={"/images/lucky.svg"}
                  className="hidden md:flex"
                  fill
                  alt="lucky"
                />
                <Image
                  src={"/images/luckymobile.svg"}
                  className="md:hidden object-fill"
                  fill
                  alt="lucky"
                />
              </div>
              <p className="mt-24 font-light  metatext uppercase lg:px-14">
                In our current economic landscape, the no.1 brand typically
                holds about 2x the market share of the no. 2 brand, which, in
                turn, holds about 2x the share of the no. 3 brand, and so on,
                following a Power Law distribution.
              </p>
              <h3 className="lgtext text-balance text-center mt-24">
                The solution is differentiation, but not just any
                differentiation — <span className="font-bold">RADICAL</span>{" "}
                differentiation.
              </h3>
            </div>
          </div>
        </div>

        <div className="relative w-[99vw] pt-[56.25%]  mb-20">
          <Image src={"/images/zig.svg"} fill alt="Zig Zag" className="" />
        </div>
      </section>
      <section className="w-full bg-gradient-to-b from-[#494A4B] via-[#0f0f10] to-black pb-24 ">
        <div className=" mb-24 overflow-hidden">
          <div className="border-solid border-t-[#181515] border-t-[100px] md:border-t-[200px] border-l-transparent border-l-[100vw] border-r-transparent border-b-0"></div>
        </div>
        <div className="mx-auto max-w-5xl mb-44 lg:mb-40">
          <h2 className="uppercase text-center mb-14 htwo">our offerings</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:mt-20 lg:gap-20 gap-14 md:gap-7 lg:py-20">
            {data.map((item, index) => (
              <OfferingsCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-9  items-center text-center px-8 lg:px-24">
          <p className="uppercase font-light metatext ">featuring</p>
          <h2 className="uppercase htwo">agency Second brain community</h2>
          <p className="para font-light mt-4">
            Welcome to our exclusive Notion community for creative
            professionals. A space for sharing, learning, and discovering how to
            make Notion work smarter for your creative process. Connect,
            collaborate, and transform your ideas into reality with the support
            of a community that understands your challenges and aspirations.
          </p>
          <Button className="px-0 md:px-16 mt-5 mb-12 py-6 w-[80vw] md:w-fit rounded-xl border-2 border-red-1 my-5 hover:bg-black">
            <p className="buttontext tracking-widest">JOIN OUR COMMUNITY</p>
          </Button>
          <div className="w-[170px] h-[77px] relative mx-auto">
            <Image src={"/icons/madefornotion.svg"} fill alt="madefornotion" />
          </div>
          <div className="w-full h-[70svh] md:h-[50vh] mt-8 relative">
            <Image
              src={"/images/agency_1.svg"}
              className="hidden md:flex"
              fill
              alt="agency"
            />
            <Image
              src={"/images/agency_1mobile.svg"}
              className="md:hidden object-contain"
              fill
              alt="agency"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Registration;
