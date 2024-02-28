import Lamp from "@/components/common/Lamp";
import OfferingsCard from "@/components/common/OfferingsCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
    <main className="w-full  bg-black text-white font-neue ">
      <section className=" w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 mt-14">
          <Lamp>
            <div className="px-8 lg:px-24 2xl:px-72 pt-0">
              <div className="h-fit flex flex-col mx-auto w-fit relative gap-0 items-center">
                <h1 className="mt-24 dynamic-heading flex flex-col gap-0 leading-tight font-bold uppercase text-center">
                  <span>No more band-aids</span>
                  <span>on bullet wounds</span>
                </h1>
                <div className="bottom-6 -right-6 lg:bottom-8 lg:-right-8 absolute ">
                  <div className="w-36 h-20 lg:w-44 lg:h-[120px] 2xl:w-52 2xl:h-[140px] relative">
                    <Image
                      src={"/images/bandaid.png"}
                      fill
                      alt="bandaid"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="font-light mt-7 lg:mt-10 dynamic-body  text-center">
                Most business advice online seeks to solve the symptom. We dig
                deeper than surface-level issues to find and fix the underlying
                problems.
              </p>
              <div className="flex flex-row gap-5 justify-center mt-14 lg:mt-24">
                <Button className="bg-red-1 px-7 py-7 rounded-none  border-red-1 border-2">
                  <p className="uppercase md:text-base lg:text-lg tracking-widest">
                    shop courses and tools
                  </p>
                </Button>
                <Button
                  variant={"secondary"}
                  className="px-7 py-7 rounded-none"
                >
                  <p className="uppercase md:text-base lg:text-lg tracking-widest">
                    Hire Us
                  </p>
                </Button>
              </div>
            </div>
          </Lamp>
        </div>
        <div className="w-full md:-mt-48  z-20 overflow-x-hidden">
          <div className="border-solid border-b-[#181515] border-b-[200px] border-l-transparent border-l-[100vw] border-r-transparent border-t-0" />
        </div>
      </section>
      <section className="w-full bg-[#181515] flex justify-center flex-col items-center  ">
        <div className=" grid grid-cols-1 max-w-5xl ">
          <div className="py-24 md:px-16 lg:px-24">
            <div className="relative">
              <h2 className="md:text-[40px] md:leading-[49px] lg:text-6xl text-center uppercase lg:leading-[65px]">
                Have you ever looked at your favorite Brand or creator and
                wondered if they're just plain lucky?
              </h2>
              <p className="mt-12 mb-24  text-2xl text-center font-light">
                Chances are, you've experimented with various step-by-step
                formulas that everyone claims will eventually help you break
                through the clutter.
              </p>
              <div className="w-full h-[50vh] relative">
                <Image src={"/images/lucky.svg"} fill alt="lucky" />
              </div>
              <p className="mt-24 font-light text-lg leading-8 uppercase lg:px-14">
                In our current economic landscape, the no.1 brand typically
                holds about 2x the market share of the no. 2 brand, which, in
                turn, holds about 2x the share of the no. 3 brand, and so on,
                following a Power Law distribution.
              </p>
              <h3 className="text-4xl text-center mt-24">
                The solution is differentiation, but not just any
                differentiation — <span className="font-bold">RADICAL</span>{" "}
                differentiation.
              </h3>
            </div>
          </div>
        </div>

        <div className="relative w-[99vw] h-[60vh] lg:h-[100vh] mb-20">
          <Image
            src={"/images/zig.svg"}
            fill
            alt="Zig Zag"
            className="object-fill"
          />
        </div>
      </section>
      <section className="w-full bg-gradient-to-b from-[#494A4B] via-[#0f0f10] to-black pb-24 ">
        <div className=" mb-24 overflow-hidden">
          <div className="border-solid border-t-[#181515] border-t-[200px] border-l-transparent border-l-[100vw] border-r-transparent border-b-0"></div>
        </div>
        <div className="mx-auto max-w-5xl mb-44 lg:mb-40">
          <h2 className="uppercase text-center  text-6xl">our offerings</h2>
          <div className="flex flex-row justify-center md:mt-20 lg:gap-20 md:gap-7 lg:py-20">
            {data.map((item, index) => (
              <OfferingsCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-9  items-center text-center px-8 lg:px-24">
          <p className="uppercase font-light text-lg ">featuring</p>
          <h2 className="uppercase text-6xl">agency Second brain community</h2>
          <p className="text-2xl leading-9 font-light mt-4">
            Welcome to our exclusive Notion community for creative
            professionals. A space for sharing, learning, and discovering how to
            make Notion work smarter for your creative process. Connect,
            collaborate, and transform your ideas into reality with the support
            of a community that understands your challenges and aspirations.
          </p>
          <Button className="px-16 mt-5 mb-12 py-6 w-fit rounded-xl border-2 border-red-1 my-5 hover:bg-black">
            <p className="text-lg tracking-widest">JOIN OUR COMMUNITY</p>
          </Button>
          <div className="w-[170px] h-[77px] relative mx-auto">
            <Image src={"/icons/madefornotion.svg"} fill alt="madefornotion" />
          </div>
          <div className="w-full h-[50vh] mt-8 relative">
            <Image src={"/images/agency_1.svg"} fill alt="agency" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Registration;
