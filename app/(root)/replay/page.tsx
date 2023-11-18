"use client";
import Image from 'next/image';
import YouTube,{ YouTubeProps }  from 'react-youtube';
import Countdown from "react-countdown";
import { Button } from '@/components/ui/button';
import { checkout } from '@/lib/stripe/checkout';
import { getLocationCountryCode } from '@/app/component/location';
import { useEffect, useState } from 'react';

function Replay() {
      const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '50%'
      };
    const targetDate = new Date("2023-11-20T08:00:00");
    const USD_PRICE_ID = 'price_1ODQJXSHASzjfwwQ3YphRzoT';
    const INR_PRICE_ID = 'price_1ODReISHASzjfwwQxwslwRAF';

    useEffect(() => {
      const fetchLocation = async () => {
        const countryCode = await getLocationCountryCode();
        console.log(countryCode);
        if (countryCode === 'IN') {
          setPriceId(INR_PRICE_ID);
        } else {
          setPriceId(USD_PRICE_ID);
        }
      };
  
      fetchLocation();
    }, []);

    const [priceId, setPriceId ] = useState(USD_PRICE_ID);

    const handleLocationIdentified = (countryCode: string | null) => {
      if (countryCode === 'IN') {
        setPriceId(INR_PRICE_ID);
      } else {
        setPriceId(USD_PRICE_ID);
      }
    };
   
  return (
    <section className="flex lg:flex-col text-center items-center w-full flex-col lg:py-48 md:py-32 py-28 h-full md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
     <h1 className="justify-center text-center header md:mt-[0px] mt-[12px]">
     Missed the Masterclass? Watch the Replay Below!
    </h1>
   <div className='flex flex-col items-center gap-12 mb-6 py-4'>
    <h3 className='subheader'><span className='text-red-1 font-normal'>Don't Miss Out!</span> Exclusive Replay Access and Special Offer Ending Soon.</h3>
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
    <h3 className='subheader md:text-[22px] text-gray-1 text-[16px]'>Make sure to watch the replay and avail this special offer before the countdown ends!</h3>
   </div>
   
   <div className='w-full  flex flex-col lg:py-16 md:py-10 py-8 h-full md:px-20 px-10 lg:gap-8 md:gap-6 gap-12'>
      <h1 className='header  text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]'>
        Are you ready to go from $0 to a five-figure agency and beyond in less than three months?   
      </h1>
      <p className='text-3xl text-red-1 font-semibold'>
           Introducing
      </p>
      <h1 className='text-4xl'>
      Agency on Notion: Create an Agency Operating System on Notion 
      </h1>
      <h2 className='subheader mb-8'>
        Product Suite
      </h2>
      <Image 
       src={"/images/mockup.png"}
       alt={"course"}
       className='w-full'
       width={700}
       height={550}
      />
      <div className='flex justify-between items-center my-20'>
      <h2 className='text-5xl ml-48'>
      What's inside?
      </h2>
      <ul className='text-start space-y-2'>
        <li className='subheader'>
            <span className='font-semibold'>Course 001:</span> The Deep Game Fundamentals
        </li>
        <li className='subheader'>
            <span className='font-semibold'>Course 002:</span> Just-In-Project Management for the Modern Workforce
        </li>
        <li className='subheader'>
            <span className='font-semibold'>Course 003:</span> How To Start Thinking In Systems

        </li>
        <li className='subheader'>
            <span className='font-semibold'>Course 004:</span> Entrepreneurial Operating System

        </li>
        <li className='subheader'>
            <span className='font-semibold'>Course 005:</span> Systems in Agency Lifecycle

        </li>
        <li className='subheader'>
            <span className='font-semibold'>Course 006:</span> An In-depth guide to PARA

        </li>
      </ul>
      </div>
      <div className='flex justify-between items-center mb-20'>
      <h2 className='text-5xl ml-48'>
      Bonus Resources
      </h2>
      <ul className='text-start space-y-2'>
        <li className='subheader'>
            <span className='font-semibold'>Resource 001:</span> Simple Customer Relationship Management Template

        </li>
        <li className='subheader'>
            <span className='font-semibold'>Resource 002:</span> Client Conversion System + Checklist + Script

        </li>
        <li className='subheader'>
            <span className='font-semibold'>Resource 003:</span> Brand Strategy Template


        </li>
        <li className='subheader'>
            <span className='font-semibold'>Resource 004:</span> Bullseye Framework Template


        </li>
        <li className='subheader'>
            <span className='font-semibold'>Resource 005:</span> Content Marketing Template


        </li>
        <li className='subheader'>
            <span className='font-semibold'>Resource 006:</span> Website Design and Development Template

        </li>
      </ul>
      </div>
      

      <p className='subheader'>
            We are commited to helping agency owners build  efficient systems for scalability, and that's why we're offering all of these at a huge discount for a limited time.
      </p>
     
       <p className='subheader'>
          Enroll today for just <span className='font-bold'>$87</span>. This pricing is exclusive to masterclass attendees for a limited time, after which the price will go up to  <span className='font-bold'>$117</span>.
      </p>
   </div>
   <Button
    className=" w-full lg:h-[75px] md:h-[65px] h-[75px] bg-red-1 hover:bg-red-1/75 text-white rounded-[8px] lg:text-3xl md:text-[24px] text-xl"
    onClick={(()=>{
      checkout([
        { price: priceId, quantity: 1 }
      ]);
    } )}
   >Preorder Now</Button>

   
    </section>
  )
}

export default Replay