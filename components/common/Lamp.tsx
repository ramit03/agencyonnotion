"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Lamp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0, width: "0rem" }}
          animate={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[40rem] bg-gradient-conic from-red-1 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: "0rem" }}
          animate={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[40rem] bg-gradient-conic from-transparent via-transparent to-red-1 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <motion.div 
         initial={{opacity:0}}
         animate={{ opacity:0.1}} 
         transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></motion.div>
        <motion.div 
         initial={{opacity:0}}
         animate={{opacity:0.5}}
         transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-1 opacity-50 blur-3xl"></motion.div>
        <motion.div
          initial={{ width: "0rem" }}
          animate={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#C16F6B] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "0rem" }}
          animate={{ width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] bg-red-1"
        ></motion.div>
 
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>
 
      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             delay: 0.3,
             duration: 0.8,
             ease: "easeInOut",
           }}
        >
        {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Lamp;
