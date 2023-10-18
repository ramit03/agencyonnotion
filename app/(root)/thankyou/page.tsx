import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Thankyou() {
  return (
    <section className="flex lg:flex-row flex-col lg:py-48 md:py-32 py-28 w-full h-full lg:pl-44 lg:pr-20 lg:px-0 md:px-20 px-10 lg:gap-12 md:gap-16 gap-20">
      <div className="flex flex-col lg:gap-12 md:gap-10 gap-10 lg:w-2/3 lg:text-[32px] md:text-[24px] text-lg text-gray-1">
        <h1 className="header md:text-5xl text-[32px]">Just one more thing</h1>
        <p className="font-helvetica lg:leading-[47.10px] md:leading-[41.21px]">
          Congratulations! You're now registered for our upcoming masterclass on
          revolutionizing your agency's project management workflow with Notion.
        </p>
        <h2 className="font-bold ">Here are your next steps:</h2>
        <ol className="list-decimal font-thin lg:leading-[47.10px] md:leading-[41.21px] pl-10">
          <li>
            <p>Check your inbox for an email with the details of the webinar, including the date and time.</p>
          </li>
          <li>
            <p>Add the masterclass to your calendar to ensure you don't miss out on this valuable opportunity to boost your productivity and organization.</p>
          </li>
          <li>
            <p>Get excited! You're about to learn some game-changing strategies that will take your agency's project management to the next level.</p>
          </li>
          <li>
            <p>Share this opportunity with your friends and colleagues who would benefit from this webinar. Let's help each other succeed!</p>
          </li>
        </ol>
        <p>Thank you for registering, and we look forward to seeing you soon!</p>
        <p className="lg:text-2xl md:text-xl text-base font-bold lg:leading-9 md:leading-[29.44px] leading-normal">P.S. If your plans change and you can't attend, kindly opt out through the link in your email. This small step ensures a seamless experience for all. We appreciate your understanding!</p>
        <Link href={'https://chat.whatsapp.com/IhHepfIw8huGUHka71jLd9'}>
          <Button className="bg-red-1 my-4 hover:bg-red-1/75 w-fit lg:h-28 md:h-[86px] h-[60px] px-8 py-3">
            <div className="flex flex-row gap-2 items-center">
              <Image
                className="w-[38px] h-[43px] md:w-[55px] md:h-[62px] lg:w-[69px] lg:h-[77px]"
                src='/images/WhatsApp.png'
                width={70}
                height={77}
                alt="whatsapp"
              />
              <p className="text-white lg:text-[32px] md:text-2xl text-base font-helvetica">Join our VIP Whatsapp Group</p>
            </div>
          </Button>
        </Link>       
      </div>
      <div className="flex  lg:w-1/3 md:w-full justify-center">
        <Image
          className="md:w-[300px] h-[500px] lg:w-[525px] lg:h-[889px]"
          src="/images/message.svg"
          width={525}
          height={889}
          alt="message"
         
        /> 
      </div>
    </section>
  );
}

export default Thankyou;
