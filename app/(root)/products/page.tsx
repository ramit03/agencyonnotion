import { Button } from "@/components/ui/button";
import React from "react";

function ProductPage() {
  return (
    <main className="w-full  bg-black text-white font-neue ">
      <section className=" w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 max-w-5xl">
          <div className="px-24 py-36">
            <div className="relative space-y-8">
              <div className="flex items-center gap-2">
                <h5 className="uppercase font-light text-lg">
                  early bird offer
                </h5>
                <div className="w-[14px] h-[14px] rounded-full bg-[#e5f904]" />
              </div>

              <h1 className="font-bold text-6xl uppercase">
                build your agency second brain
              </h1>
              <h5 className="uppercase font-light text-xl">
                Enroll today for just <span className="font-bold">$117</span>
              </h5>
              <p className="font-light text-2xl py-5">
                Master Notion and streamline your workflow with our Second Brain
                course—efficiency and creativity, all in one.
              </p>
              <div className="flex flex-row gap-5 justify-start ">
                <Button className="bg-red-1 px-7 py-7 rounded-none  border-red-1 border-2">
                  <p className="uppercase text-lg ">Get started</p>
                </Button>
                <Button
                  variant={"secondary"}
                  className=" px-7 py-7 rounded-none"
                >
                  <p className="uppercase text-lg ">talk to an expert</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
