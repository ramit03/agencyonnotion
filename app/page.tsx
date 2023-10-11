"use client";
import SaveSeat from "@/components/forms/SaveSeat";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Countdown from "react-countdown";
import {instructorLinks} from "@/constants";

export default function Home() {
  const targetDate = new Date("2023-10-28T16:00:00");
  type CardProps = React.ComponentProps<typeof Card>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex flex-col gap-y-16 items-center  p-24">
        <h1 className="justify-center text-center lg:text-[64px]  header md:text-5xl text-[32px] lg:mt-[100px]  md:mt-[50px] mt-[12px]">
          How to run your agency on Notion
        </h1>
        <h3 className="subheader  lg:text-[32px] md:text-[28px] text-center text-xl">
          The Notion blueprint for scaling agencies.
          <span className="font-bold"> A masterclass.</span>
        </h3>
        <SaveSeat />
      </section>
      <section className="w-full justify-center px-8">
        <Image
          src={"/images/agency.svg"}
          className="hidden md:flex w-full"
          alt={"agency"}
          width={1100}
          height={607}
        />
        <Image
          src={"/images/agency_mobile.svg"}
          className="flex md:hidden w-full"
          alt={"agency"}
          width={1100}
          height={580}
        />
      </section>
      <section className="flex flex-col items-start gap-y-6 md:gap-y-16 lg:px-32 md:px-24 py-8  px-14">
        <h1 className="header lg:text-[64px] md:text-5xl text-[32px] lg:w-[55%] w-full">
          In this free masterclass, you will learn
        </h1>
        <div className="flex lg:flex-row flex-col font-helvetica_light lg:justify-between w-full lg:items-end md:items-end items-center">
          <div className="lg:w-1/2 w-full">
            <ol
              start={1}
              className="flex flex-col lg:px-6 md:px-8 gap-y-8 font-light lg:text-[30px] md:text-[28px] text-[18px]"
            >
              <li>
                Framework to create an agency blueprint on Notion without
                unnecessary complexity.
              </li>

              <li>
                Why Notion is the perfect software to manage your scaling agency
                business.
              </li>

              <li>
                {" "}
                A new project management philosophy for the ever-changing
                digital landscape.
              </li>

              <li>
                {" "}
                How building an agency second brain creates serendipitous
                opportunities.
              </li>

              <li>
                {" "}
                How to collaborate with your team, clients and freelancers
                effectively on Notion
              </li>
            </ol>
          </div>
          <div className="md:w-1/2 w-full flex lg:justify-start">
            <Image
              className="w-full lg:h-[600px] md:h-[400px] lg:mt-0 md:mt-[-40px] mt-4"
              src={"/images/oc-growing.svg"}
              alt={"agency"}
              width={600}
              height={607}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center mt-56 lg:px-64 md:px-24 px-12 gap-y-12 items-center">
        <h1 className="header  lg:text-[64px] md:text-[48px] text-[32px] ">
          Join us live on Friday, 28th October
        </h1>
        <h3 className="subheader lg:text-[32px] md:text-[30px] text-[18px]">
          4 - 6 PM IST, FREE ONLINE MASTERCLASS
        </h3>
        <Countdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="timer flex flex-row md:gap-x-12 gap-x-4 w-full justify-center lg:text-[96px] md:text-[90px] text-[36px]">
              <div className="text flex flex-row text-black/50">
                <span className="text-black">{days}</span> d{" "}
              </div>
              <div className="text  flex flex-row text-black/50">
                <span className="text-black">{hours}</span> h{" "}
              </div>
              <div className="text  flex flex-row text-black/50">
                <span className="text-black">{minutes}</span> m{" "}
              </div>
              <div className="text  flex flex-row text-black/50">
                <span className="text-black">{seconds}</span> s{" "}
              </div>
            </div>
          )}
        />
        <Image
          className="md:px-24"
          src={"/images/work-balance.svg"}
          layout="responsive"
          alt={"work-balance"}
          width={950}
          height={680}
        />
      </section>
      <section className="flex flex-col items-center lg:gap-24 gap-8 py-48 lg:px-36 md:px-16 px-12">
        <h1 className="header lg:text-[64px] md:text-[48px] text-[32px]">Our Instructors</h1>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-8">
          {instructorLinks.map((link)=>{
            return(
              <div className="flex items-center h-full shadow-lg lg:w-[40%] flex-grow-1   md:w-[75%] w-[90%] flex-col gap-11 py-16 md:px-[60px] px-[50px] text-center rounded-[57px]">
              <Image
                src={link.imgURL}
                width={210}
                height={210}
                alt="instructor"
              />
              <h1 className="header md:text-[32px] text-[24px]">{link.name}</h1>
              <h1 className="font-neue_obl  md:text-[28px] text-[20px]">
                {link.title}<br/>{link.work}
              </h1>
              <p className="md:text-[28px] text-[18px] font-helvetica_light">
                {link.desc}
              </p>
            </div>
            )
          })}
          
        </div>
      </section>
      <section className="lg:px-40 md:px-14 px-20 flex flex-col lg:gap-14 md:gap-8 pb-24 gap-6">
          <h1 className="header text-center">Discover the transformative power of Notion in our exclusive masterclass.</h1>
          <p className="lg:px-16 md:px-12 text-center lg:text-[32px] md:text-3xl text-large">Dive into streamlined strategies, innovative tools, and actionable insights tailored for agency growth. Elevate your operations, foster collaboration, and scale effortlessly. </p>
          <p className="lg:px-16 font-bold text-center lg:text-[32px] md:text-3xl text-large">Reserve your seat and redefine your agency's future.</p>
          <SaveSeat />
          
      </section>
    </main>
  );
}
