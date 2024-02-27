"use client";
import React,{useRef} from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
const ContainerScroll = ({ title,image,alt}: { title: string | React.ReactNode; image:string;alt:string; }) => {
  const containerRef = useRef<any>(null);
  const {scrollYProgress} = useScroll({target: containerRef,});
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0,1], [0,20]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0,1], [-100,0]);

  return (
    <div
    className="h-[50rem] flex items-end  justify-center relative pt-24 p-20"
    ref={containerRef}
  >
    <div
      className=" w-full relative"
      style={{
        perspective: "1000px",
      }}
    >
      <Header translate={translate} title={title} />
      <Card
        rotate={rotate}
        translate={translate}
        scale={scale}
        image={image}
        alt={alt}
      />
    </div>
  </div>
  )
};

export const Header = ({ translate, title }: any) => {
  return (
    <motion.div
      style={{
        translateY:translate,
      }}
      className=" max-w-5xl mx-auto text-center"
    >
      {title}
    </motion.div>
  );
};
export const Card = ({rotate,scale,translate,image,alt}:{rotate: any;scale: any;translate: any;image: string;alt:string;}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[30rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#000000] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 gap-4 overflow-hidden">
          <motion.div
            className="cursor-pointer relative"
            style={{ translateY: translate }}
          >
        <Image 
          src={image}
          fill
          alt={alt}
          className="object-fit"
        />
          </motion.div>
      </div>
    </motion.div>
  );
};

export default ContainerScroll;
