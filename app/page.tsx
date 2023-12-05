"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { checkout } from "@/lib/stripe/checkout";
import { useEffect, useState } from "react";
import { getLocationCountryCode } from "@/app/component/location";
import JoinCommunity from "@/components/forms/JoinCommunity";
import { bonusResources, courseOverview, groupBenefits } from "@/constants";

function Home() {
  const USD_PRICE_ID = "price_1ODl0rSHASzjfwwQmVsaLkyH";
  const INR_PRICE_ID = "price_1ODl1VSHASzjfwwQ1PGECrbz";
  useEffect(() => {
    const fetchLocation = async () => {
      const countryCode = await getLocationCountryCode();
      console.log(countryCode);
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

  return (
    <main className="flex min-h-screen flex-col w-full items-center mt-4 justify-center">
      <section className="flex flex-col md:gap-8 gap-4 items-center md:py-20 md:pt-20 pt-28  lg:px-[260px] md:px-20 px-10 lg:mt-[100px]  md:mt-[50px] mt-[12px]">
        <h1 className="justify-center text-center header  ">
          Connect, Collaborate,<span className="text-red-1"> Create</span>
        </h1>
        <h3 className="subheader font-helvetica_light font-light text-center mb-4 leading-[29.44px]">
          Join our exclusive community for
          <span className=" text-red-1 font-bold"> creative</span> professionals using <span className=" text-red-1 font-bold">Notion</span>.
        </h3>
      </section>
      <section className="w-full flex justify-center lg:px-8 px-0">
        <Image
          src={"/images/bg.svg"}
          alt={"agency"}
          width={600}
          height={407}
        />
      </section>
      <section className="flex lg:flex-col text-center items-center w-full flex-col lg:py-24 md:py-20 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
        <h1 className="header text-center mb-4 lg:text-[56px] md:text-[32px] text-[24px]">
         Join the Agency On Notion Revolution
        </h1>
        <h1 className="subheader text-center ">
          Empowering your creative journey
        </h1>
        <JoinCommunity />
        <h2 className="subheader mb-8">
          Unleash the Full Potential of Your Agency with Notion
        </h2>
      </section>
      <section className="flex bg-red-1/5 lg:flex-row text-start items-center w-full flex-col  py-28 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-12">
        <div className="flex flex-col lg:w-1/3 w-full lg:text-start text-center">
          <p className="subheader ">We help you with</p>
          <h1 className="header lg:text-start text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]">
            Mastering Agency Growth with Notion
          </h1>
        </div>
        <div className="flex flex-row gap-8 flex-wrap lg:w-2/3 w-full justify-center">
          {groupBenefits.map((items) => ( 
              <div id={items.id} className="w-64 h-auto flex flex-col justify-between gap-4 bg-white py-12 px-6 rounded-lg shadow-lg">
               <h2 className="text-left text-4xl md:text-2xl text-[24px] leading-normal">
                 {items.title}
               </h2>
               <p>{items.text}</p>
             </div>
          ))}
        </div>
      </section>

      <section className="flex lg:flex-col text-center items-center w-full flex-col lg:py-48 md:py-32 py-28 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
        <h1 className="justify-center text-center text-4xl md:text-3xl text-[24px] md:leading-[48px] leading-normal md:mt-[0px] mt-[12px]">
          Oops! You missed your chance to watch the replay and enroll in Agency
          on Notion Product Suite at our special price. But you can still grab
          it below!
        </h1>
        <div className="w-full  flex flex-col h-full lg:gap-8 md:gap-6 gap-8">
          <h1 className="header text-center mb-4 lg:text-[56px] mt-6 md:text-[32px] text-[24px]">
            Are you ready to go from $0 to a five-figure agency and beyond in
            less than three months?
          </h1>
          <p className="md:text-3xl text-[24px] text-red-1 font-semibold">
            Introducing
          </p>
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
          <div className="flex lg:flex-row flex-col justify-between items-center w-full md:my-20 my-10 lg:gap-0 gap-6">
            <h2 className="lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center">
              What's inside?
            </h2>
            <ul className="text-start space-y-1 lg:w-[45%] w-full ">
              {courseOverview.map((item)=>(
                   <li key={item.id}>
                   <div className="w-full h-auto px-12 py-8 flex flex-col gap-2 bg-red-1/5">
                   <p className="tracking-widest uppercase lg:text-lg md:text-sm text-xs font-medium ">
                     {item.title}
                   </p>
                   <p className="subheader lg:leading-10 leading-7">
                    {item.text}
                   </p>
                   </div>
                 </li>
              ))}
             
            </ul>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center w-full md:mb-20 mb-10 lg:gap-0 gap-6">
            <h2 className="lg:text-5xl md:text-3xl md:w-[55%] w-full text-[24px] text-center">
              Bonus Resources
            </h2>
            <ul className="text-start space-y-2 lg:w-[45%] w-full">
              {bonusResources.map((item)=>(
                    <li key={item.id}>
                    <div className="w-full h-auto px-12 py-8 flex flex-col gap-2 bg-red-1/5">
                    <p className="tracking-widest uppercase lg:text-lg md:text-sm text-xs font-medium ">
                      {item.title}
                    </p>
                    <p className="subheader lg:leading-10 leading-7">
                      {item.text}
                    </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <p className="subheader">
            We are commited to helping agency owners build efficient systems for
            scalability, and that's why we're offering all of these at a huge
            discount for a limited time.
          </p>

          <p className="subheader">
            Enroll today for just <span className="font-bold">$117</span>. This
            is a limited time early bird offer for the product suite pre-sale.
            The price will go up after the product suite is launched officially.
          </p>
        </div>
        <Button
          className=" w-full lg:h-[75px] md:h-[65px] h-[75px] bg-red-1 hover:bg-red-1/75 text-white rounded-[8px] lg:text-3xl md:text-[24px] text-xl"
          onClick={() => {
            checkout([{ price: priceId, quantity: 1 }]);
          }}
        >
          Preorder Now
        </Button>
      </section>
      <section className="flex lg:flex-col text-center items-center w-full flex-col lg:pb-32 md:pb-24 pb-20 h-full lg:px-[260px] md:px-20 px-10 lg:gap-8 md:gap-6 gap-8">
        <h1 className="header text-center mb-4 lg:text-[56px] md:text-[32px] text-[24px]">
        Take the Next Step in Your Agency's Journey
        </h1>
        <h1 className="text-4xl md:text-3xl text-[24px] text-center">
        Unlock Exclusive Access to Masterclasses and Resources
        </h1>
        <JoinCommunity />
      </section>
    </main>
  );
}

export default Home;
