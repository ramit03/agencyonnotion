import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section
      id="footer"
      className="bottombar flex flex-col items-start lg:py-28 md:p-24 py-20 gap-y-8 lg:px-32 md:px-24 px-20"
    >
      <h1 className="font-neue lg:text-[40px] md:text-[36px] text-[24px]">About Redendron Media</h1>
      <div className="flex md:flex-row gap-y-20 md:gap-y-0 flex-col justify-between ">
        <div className="flex flex-col lg:w-[40%] md:w-1/2 w-full lg:text-[24px] md:text-[20px] text-[16px] gap-y-6">
          <p>
            We're an agency passionate about the digital domain. Our mission is
            to provide insights and tools that help businesses thrive.
          </p>
          <p>
            This masterclass is one of the ways we support agencies on their
            path to success.
          </p>
        </div>
        <div className="flex flex-col font-light text-[16px] lg:text-[24px] md:text-[20px]  lg:w-[20%] md:w-1/2 w-full gap-y-8">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="footer_icon"
              src={"/icons/Internet.svg"}
              alt={"redendron"}
              width={62}
              height={38}
            />
            <Link
              className="hover:text-[#C11B17]"
              href={"https://www.redendron.media/"}
            >
              redendron.media
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              className="footer_icon"
              src={"/icons/Phone.svg"}
              alt={"redendron"}
              width={62}
              height={38}
            />
            <Link
              className="hover:text-[#C11B17]"
              href={"https://www.redendron.media/"}
            >
              +91 90645 38311
            </Link>
          </div>
          <div className="flex items-center flex-row gap-2">
            <Image
              className="footer_icon"
              src={"/icons/Email.svg"}
              alt={"redendron"}
              width={62}
              height={38}
            />
            <Link
              className="hover:text-[#C11B17]"
              href={"https://www.redendron.media/"}
            >
              team@redendron.com
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
export default Footer;
