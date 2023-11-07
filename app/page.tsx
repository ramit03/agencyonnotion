"use client";
import SaveSeat from "@/components/forms/SaveSeat";
import Image from "next/image";
import Countdown from "react-countdown";
import { instructorLinks, learningList } from "@/constants";
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export default function Home() {
  const targetDate = new Date("2023-11-17T19:00:00Z");
  const targetDateUTC = new Date("2023-11-17T13:30:00Z");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zonedDate = utcToZonedTime(targetDateUTC, timeZone);
  const timepattern = 'h:mm a'
  const output = format(zonedDate,timepattern,{timeZone})

  function addOrdinalSuffix(day:number) {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
      case 1:  return day + "st";
      case 2:  return day + "nd";
      case 3:  return day + "rd";
      default: return day + "th";
    }
  }
  const dayOfWeek = format(zonedDate, 'EEEE', { timeZone });
  const dayOfMonth = addOrdinalSuffix(zonedDate.getDate());
  const month = format(zonedDate, 'MMMM', { timeZone }); 
  const outputDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  
  return (
    <main className="flex min-h-screen flex-col w-full items-center mt-4 justify-center">
      <section className="flex flex-col md:gap-8 gap-4 items-center py-24 lg:px-32 md:px-20 px-14">
        <h1 className="justify-center text-center header lg:mt-[100px]  md:mt-[50px] mt-[12px]">
          How to run your agency on Notion
        </h1>
        <h3 className="subheader font-helvetica_light font-light text-center mb-4 leading-[29.44px]">
          The Notion blueprint for scaling agencies.
          <span className=" text-red-1 font-bold"> A masterclass.</span>
        </h3>
        <SaveSeat />
      </section>
      <section className="w-full justify-center lg:px-8 px-0">
        <Image
          src={"/images/hero.png"}
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
      <section className="flex flex-col items-start lg::my-36 md:my-16 md:mt-24 my-20 gap-6 md:gap-10 lg:gap-16 lg:px-32 md:px-20 px-14">
        <h1 className="header lg:w-[55%] w-full">
          In this free masterclass, you will learn
        </h1>
        <div className="flex lg:flex-row flex-col  lg:justify-between w-full lg:items-start md:items-end items-center">
          <div className="lg:w-1/2 w-full">
            <ol className="flex font-helvetica_light font-light lg:text-[28px] md:text-[18px] text-base md:leading-10  flex-col gap-4">
              {learningList.map((text) => (
                <li key={text.id} className="lg:my-2">
                  <div className="flex gap-2 md:gap-6 ITE">
                    <Image
                      src={"/icons/check-mark.png"}
                      width={24}
                      height={24}
                      alt="check"
                      className="lg:w-6 lg:h-6 mt-3 w-5 h-5"
                    />
                    <p className="md:leading-10 leading-relaxed">{text.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:w-1/2 w-full flex lg:justify-start">
            <Image
              className="w-full lg:h-[600px] md:h-[400px] lg:mt-0 md:mt-[-20px] mt-4"
              src={"/images/oc-growing.svg"}
              alt={"agency"}
              width={600}
              height={607}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center lg:px-64 md:px-24 px-14 lg:gap-12 gap-6 items-center">
        <h1 className="header">Join us live on {outputDate}</h1>
        <h3 className="subheader font-normal">
          {output}, FREE ONLINE MASTERCLASS
        </h3>
        <Countdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="timer flex flex-row md:gap-12 gap-4 w-full justify-center lg:text-[96px] md:text-[80px] text-[36px]">
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
          className="md:w-[707px] md:h-[510px] md:px-4"
          src={"/images/work-balance.svg"}
          layout="responsive"
          alt={"work-balance"}
          width={950}
          height={680}
        />
      </section>
      <section className="flex flex-col items-center lg:gap-24 gap-8 lg:py-48 md:py-36 py-32 2xl:px-96 lg:px-24 md:px-16 px-8">
        <h1 className="header lg:text-[64px] md:text-[48px] text-[32px]">
          Our Instructors
        </h1>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-12">
          {instructorLinks.map((link) => {
            return (
              <article className="flex items-center lg:min-h-[900px] flex-grow shadow-xl  lg:w-[40%] md:w-[80%] w-[95%] flex-col md:gap-11 gap-6 py-16 md:px-[45px] px-[30px] text-center rounded-[57px]">
                <Image
                  src={link.imgURL}
                  width={210}
                  height={210}
                  alt="instructor"
                />
                <h1 className="header md:text-[32px] text-[24px]">
                  {link.name}
                </h1>
                <h1 className="font-neue italic lg:min-h-[126px]  md:text-[28px] text-[20px]">
                  {link.title}
                  <br />
                  {link.work}
                </h1>
                <p className="md:text-[26px] text-[16px] font-neue font-light">
                  {link.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="lg:px-40 md:px-20 px-14 flex flex-col lg:gap-14 md:gap-8 pb-24 gap-6">
        <h1 className="header text-center">
          Discover the transformative power of Notion in our exclusive
          masterclass.
        </h1>
        <p className="lg:px-16 md:px-8 text-center lg:leading-[47.10px] md:leading-[44.16px] leading-relaxed subheader">
          Dive into streamlined strategies, innovative tools, and actionable
          insights tailored for agency growth. Elevate your operations, foster
          collaboration, and scale effortlessly.{" "}
        </p>
        <p className="lg:px-16 font-bold text-red-1 text-center subheader">
          Reserve your seat and redefine your agency's future.
        </p>
        <SaveSeat />
      </section>
    </main>
  );
}
