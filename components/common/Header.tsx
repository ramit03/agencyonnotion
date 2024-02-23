"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
interface NavbarScrollProps {
  toggleMenu: () => void;
}

function Header() {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);
  const pathname = usePathname();
  const toggleMenu = () => {
    setNavbar((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
     scaleX: 0,
     scaleY:0,
     originX: 1,
     originY:0,
    },
    animate: {
      scaleX: 1,
      scaleY:1,
      transition: {
        duration: 0.4,
       ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY:0,
      originY:0,
      scaleX: 0,
      originX: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const Navbar: React.FC<NavbarScrollProps> = ({ toggleMenu }) => {
    return (
      <nav className="topbar relative bg-black top-0 z-30 flex  flex-row w-full justify-between px-24 pt-20">
        <Link href={"/"}>
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
        </Link>

        <Button className="w-11 h-9 relative bg-black" onClick={toggleMenu}>
          <Image
            src={"/icons/hamburger.svg"}
            fill
            sizes="(min-width:1024px) 43px,34px"
            alt="menu"
            className="object-cover"
          />
        </Button>
      </nav>
    );
  };
  const isCurrentPath = (path: string) => pathname.startsWith(path);
  return (
    <>
      <AnimatePresence>
        <Navbar toggleMenu={toggleMenu} />
      </AnimatePresence>
      <AnimatePresence>
        {navbar && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0  z-50 h-screen w-full origin-top bg-black px-24 py-20"
          >
            <div className="w-full relative h-full">
              <Button
                onClick={toggleMenu}
                className="absolute  top-0 right-0 bg-transparent"
              >
                <Image
                  src={"/icons/close.svg"}
                  width={43}
                  height={34}
                  className=""
                  alt="Close"
                />
              </Button>
              <div className="flex flex-row justify-between h-full">
                <div className="flex flex-row self-end items-center gap-2">
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
                <div className="w-1/2 text-white font-neue text-[36px] 2xl:text-5xl pt-32 flex flex-col justify-end gap-3 2xl:gap-14">
                  {navlinks.map((item) => (
                    <Link
                      className={cn(
                        "space-y-6",
                        isCurrentPath(item.link) ? "text-red-1" : "text-white"
                      )}
                      href={item.link}
                    >
                      <p className="uppercase">{item.name}</p>
                      <div className="bg-white w-full h-px" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Header;
