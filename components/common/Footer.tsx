import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section id="footer" className="bottombar h-[50vh] items-center flex flex-col md:px-8 lg:px-16 xl:px-24">
      <div className="bg-red-1 h-2 w-full" />
      <div className="flex flex-col md:flex-row lg:gap-36 py-36 w-full max-w-[1440px] justify-between items-center">
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-row items-center gap-2">
            <div className="relative h-20 w-20">
              <Image
                src={"/icons/logo1.svg"}
                fill
                sizes="(min-width:1024px) 79px,76px"
                alt="logo"
                className="object-cover"
              />
            </div>
            <h4 className="font-neue text-white text-4xl">Redendron</h4>
          </div>
          <p className="text-xs tracking-wider uppercase font-light text-white">
            Copyright © 2012-2023, redendron
          </p>
        </div>

        <div className="w-1/2 lg:w-2/3 xl:w-1/2 grid grid-cols-2 gap-y-8 2xl:gap-y-12 gap-x-8  lg:gap-x-20 text-xs uppercase lg:text-sm 2xl:text-lg font-light text-start tracking-wider  text-white">
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>Blog</Link>
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>Courses and tools</Link>
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>work with us</Link>
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>about us</Link>
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>agency on notion</Link>
            <Link className="cursor-pointer hover:text-red-1 duration-700 transition-all text-center w-fit" href={'/'}>contact us</Link>
        </div>

      </div>
    </section>
  );
}
export default Footer;
