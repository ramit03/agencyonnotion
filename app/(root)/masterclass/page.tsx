"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { checkout } from '@/lib/stripe/checkout';
import { useEffect, useState } from 'react';
import { getLocationCountryCode } from '@/app/component/location';

function Replay() {
  
  const USD_PRICE_ID = 'price_1ODl0rSHASzjfwwQmVsaLkyH';
  const INR_PRICE_ID = 'price_1ODl1VSHASzjfwwQ1PGECrbz';
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
    <>
    <section className="flex lg:flex-col text-center items-center w-full flex-col lg:py-48 md:py-32 py-28 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
     <h1 className="justify-center text-center text-4xl md:text-3xl text-[24px] md:leading-[48px] leading-normal md:mt-[0px] mt-[12px]">
     Oops! You missed your chance to watch the replay and enroll in Agency on Notion Product Suite at our special price. But you can still grab it below!
    </h1>   
   <div className='w-full  flex flex-col h-full lg:gap-8 md:gap-6 gap-8'>
      <h1 className='header text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]'>
        Are you ready to go from $0 to a five-figure agency and beyond in less than three months?   
      </h1>
      <p className='md:text-3xl text-[24px] text-red-1 font-semibold'>
           Introducing
      </p>
      <h1 className='text-4xl md:text-3xl text-[24px] text-center'>
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
      <div className='flex md:flex-row flex-col justify-between items-center w-full md:my-20 my-10 md:gap-0 gap-6'>
      <h2 className='lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center'>
      What's inside?
      </h2>
      <ul className='text-start space-y-2 md:w-[45%] w-full '>
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
      <div className="flex md:flex-row flex-col justify-between items-center w-full md:mb-20 mb-10 md:gap-0 gap-6">
          <h2 className="lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center">Bonus Resources</h2>
          <ul className="text-start space-y-2 md:w-[45%] w-full">
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
          Enroll today for just <span className='font-bold'>$117</span>. This is a limited time early bird offer for the product suite pre-sale. The price will go up after the product suite is launched officially.
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
  </>
  )
}

export default Replay