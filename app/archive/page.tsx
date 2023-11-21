"use client";
import Image from "next/image";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import { checkout } from "@/lib/stripe/checkout";
import { getLocationCountryCode } from "@/app/component/location";
import { useEffect, useState } from "react";
import  storage  from "@/lib/helpers/firebase";
import { ref, getDownloadURL } from 'firebase/storage';

function Replay() {
  const targetDate = new Date("2023-11-21T12:00:00");
  const USD_PRICE_ID = "price_1ODQJXSHASzjfwwQ3YphRzoT";
  const INR_PRICE_ID = "price_1ODReISHASzjfwwQxwslwRAF";

  useEffect(() => {
    const fetchLocation = async () => {
      const countryCode = await getLocationCountryCode();
      if (countryCode === "IN") {
        setPriceId(INR_PRICE_ID);
      } else {
        setPriceId(USD_PRICE_ID);
      }
    };

    fetchLocation();
  }, []);

  const [priceId, setPriceId] = useState(USD_PRICE_ID);

  const handleLocationIdentified = (countryCode: string | null) => {
    if (countryCode === "IN") {
      setPriceId(INR_PRICE_ID);
    } else {
      setPriceId(USD_PRICE_ID);
    }
  };

  const getVideoUrl = async (path: string): Promise<string> => {
    const storageRef = ref(storage, path);
    try {
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error fetching video URL:', error);
      throw error;
    }
  };
  const [videoUrl, setVideoUrl] = useState<string>('');
 
  useEffect(() => {
    const fetchVideoUrl = async () => {
      const path = 'How to run your Agency on Notion_Nov_17_2023-06_30-PM.mp4';
      try {
        const url = await getVideoUrl(path); 
        setVideoUrl(url);
      } catch (error) {
        console.error('Error fetching video URL:', error)
      }
    };
  
   fetchVideoUrl();
  }, [])
  
  return (
    <>
    <section className="flex lg:flex-col text-center items-center w-full flex-col md:py-32 py-28 h-full md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
      <h1 className="justify-center text-center header md:mt-[0px] mt-[12px]">
        Missed the Masterclass? Watch the Replay Below!
      </h1>
      <div className="flex flex-col items-center gap-12">
        <h3 className="subheader">
          <span className="text-red-1 font-normal">Don't Miss Out!</span>{" "}
          Exclusive Replay Access and Special Offer Ending Soon.
        </h3>
        <Countdown
          date={targetDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="timer flex flex-row md:gap-12 gap-4 w-full justify-center lg:text-[80px] md:text-[72px] text-[36px]">
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
        <h3 className="subheader md:text-[22px] text-gray-1 text-[16px]">
          Make sure to watch the replay and avail this special offer before the
          countdown ends!
        </h3>
      </div>
      </section>
      <div className="justify-center flex w-full lg:px-[260px] md:px-20 px-10 ">
        <video className="w-full " controls key={videoUrl} >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
     
     <section className="w-full items-center flex flex-col lg:py-16 md:py-10 py-8 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-6">
        <h1 className="header  text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]">
          Are you ready to go from $0 to a five-figure agency and beyond in less
          than three months?
        </h1>
        <p className="md:text-3xl text-[24px] text-red-1 font-semibold">Introducing</p>
        <h1 className="text-4xl md:text-3xl text-[24px] text-center">
          Agency on Notion: Create an Agency Operating System on Notion
        </h1>
        <h2 className="subheader mb-8">Product Suite</h2>
        <Image
          src={"/images/mockup.png"}
          alt={"course"}
          className="w-full md:px-0 px-[8px]"
          width={700}
          height={550}
        />
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:my-20 my-10 md:gap-0 gap-6">
          <h2 className="lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center">What's inside?</h2>
          <ul className="text-start space-y-2 md:w-[45%] w-full ">
            <li className="subheader">
              <span className="font-semibold">Course 001:</span> The Deep Game
              Fundamentals
            </li>
            <li className="subheader">
              <span className="font-semibold">Course 002:</span> Just-In-Project
              Management for the Modern Workforce
            </li>
            <li className="subheader">
              <span className="font-semibold">Course 003:</span> How To Start
              Thinking In Systems
            </li>
            <li className="subheader">
              <span className="font-semibold">Course 004:</span> Entrepreneurial
              Operating System
            </li>
            <li className="subheader">
              <span className="font-semibold">Course 005:</span> Systems in
              Agency Lifecycle
            </li>
            <li className="subheader">
              <span className="font-semibold">Course 006:</span> An In-depth
              guide to PARA
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:mb-20  mb-10 md:gap-0 gap-6">
          <h2 className="lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center">Bonus Resources</h2>
          <ul className="text-start space-y-2 md:w-[45%] w-full">
            <li className="subheader">
              <span className="font-semibold">Resource 001:</span> Simple
              Customer Relationship Management Template
            </li>
            <li className="subheader">
              <span className="font-semibold">Resource 002:</span> Client
              Conversion System + Checklist + Script
            </li>
            <li className="subheader">
              <span className="font-semibold">Resource 003:</span> Brand
              Strategy Template
            </li>
            <li className="subheader">
              <span className="font-semibold">Resource 004:</span> Bullseye
              Framework Template
            </li>
            <li className="subheader">
              <span className="font-semibold">Resource 005:</span> Content
              Marketing Template
            </li>
            <li className="subheader">
              <span className="font-semibold">Resource 006:</span> Website
              Design and Development Template
            </li>
          </ul>
        </div>

        <p className="subheader text-center">
          We are commited to helping agency owners build efficient systems for
          scalability, and that's why we're offering all of these at a huge
          discount for a limited time.
        </p>

        <p className="subheader text-center mb-12">
          Enroll today for just <span className="font-bold">$87</span>. This
          pricing is exclusive to masterclass attendees for a limited time,
          after which the price will go up to{" "}
          <span className="font-bold">$117</span>.
        </p>
      <Button
        className=" w-full lg:h-[75px] md:h-[65px] h-[75px] mb-12 bg-red-1 hover:bg-red-1/75 text-white rounded-[8px] lg:text-3xl md:text-[24px] text-xl"
        onClick={() => {
          checkout([{ price: priceId, quantity: 1 }]);
        }}
      >
        Preorder Now
      </Button>
    </section>
    </>
  );
}

export default Replay;
