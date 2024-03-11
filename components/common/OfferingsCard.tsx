import React from "react";
import { Button } from "../ui/button";

interface OfferingType {
    first: string;
    title: string;
    body: string;
    onclick?:() => void;
}

function OfferingsCard({ first, title, body, onclick }: OfferingType) {
  return (
    <section className="w-[85vw] md:w-[42%] lg:w-[40%] hover:shadow-[0_20px_50px_rgba(129,_19,_14,_1)] duration-700 lg:h-fit flex flex-col  font-neue px-11 md:px-10 lg:px-14 py-20 border-[3px] border-red-1 rounded-3xl bg-black">
      <p className="uppercase self-start font-light metameta text-[#F9F5F1]">
        {first}
      </p>
      <h4 className="text-white htwo font-bold py-5">{title}</h4>
      <p className=" smallpara grow  text-[#F9F5F1] font-light py-5">
       {body}
      </p>
      <Button className="px-10 py-7 rounded-xl border-2 border-red-1 my-5 w-full hover:bg-black" onClick={onclick} >
        <p className="buttontext tracking-widest">GET STARTED</p>
      </Button>
    </section>
  );
}

export default OfferingsCard;