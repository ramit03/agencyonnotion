"use client";
import Image from 'next/image';
import YouTube,{ YouTubeProps }  from 'react-youtube';
import Countdown from "react-countdown";
import { Button } from '@/components/ui/button';
import { checkout } from '@/lib/stripe/checkout';
function Replay() {
      const opts: YouTubeProps['opts'] = {
        width: '100%',
        height: '50%'
      };
    const targetDate = new Date("2023-11-20T08:00:00");

  return (
    <section className="flex lg:flex-col text-center items-center w-full flex-col lg:py-48 md:py-32 py-28 h-full md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
     <h1 className="justify-center text-center header md:mt-[0px] mt-[12px]">
     Missed the Webinar? Watch the Replay Here!
    </h1>
    <h3 className="header  text-center mb-4 leading-[29.44px] lg:text-[56px] mt-6 md:text-[32px] text-[24px]">
          How to run your agency on Notion.
    </h3>
   
   <div className='flex flex-col items-center gap-12 mb-6 py-4'>
    <h3 className='subheader'>Don't Miss Out! Exclusive Replay Access and Special Offer Ending Soon.</h3>
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
    <h3 className='subheader md:text-[22px] text-gray-1 text-[16px]'>Replay and special offer will be accessible until 20th November. Make sure to watch it before the countdown ends!</h3>
   </div>
   <div className='relative lg:w-3/4 md:w-[90%] w-[95%] pb-[75%] max-h-48'>
    <YouTube className='absolute top-0 left-0 w-full h-full' videoId='yGJtPItwSlk' opts={opts}/>
   </div>
   <div className='w-ful items-center flex flex-col mt-[-600px] lg:py-16 md:py-10 py-8 h-full md:px-20 px-10 lg:gap-8 md:gap-6 gap-12'>
      <h1 className='header  text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]'>
        Are you ready to go from $0 to a five-figure agency and beyond in less than three months?   
      </h1>
      <p className='subheader'>
            We are commited to helping agency owners build  efficient systems for scalability, AND THAT'S WHY WE'RE OFFERING IT ALL OF THESE AT A HUGE DISCOUNT FOR A LIMITED TIME
      </p>
      <Image 
       src={"/images/mockup.png"}
       alt={"course"}
       width={600}
       height={550}
      />
       <p className='subheader'>
          Enroll today for just <span className='font-bold'>$87</span>. This pricing is exclusive to mastercalss attendees for a limited time, after which the price will go up to  <span className='font-bold'>$117</span>.
      </p>
   </div>
   <Button
    className=" w-1/3 lg:h-[75px] md:h-[65px] h-[75px] bg-red-1 hover:bg-red-1/75 text-white rounded-[8px] lg:text-3xl md:text-[24px] text-xl"
    onClick={(()=>{
      checkout([
        { price: 'price_1ODQJXSHASzjfwwQ3YphRzoT', quantity: 1 }
      ]);
    } )}
   >Buy Now</Button>

   
    </section>
  )
}

export default Replay