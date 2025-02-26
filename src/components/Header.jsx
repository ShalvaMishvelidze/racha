import { FaUser } from "react-icons/fa";
import { userBcg } from "../assets";
import Nav from "./Nav";
import { PiHeartStraightLight } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Aside from "./Aside";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [aside, setAside] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 414) {
      setAside(false);
    }
  }, [width]);

  return (
    <header
      className="absolute w-full top-0 left-0 flex justify-between items-start 
    px-25 max-sm:px-5 py-12 max-sm:py-5 z-100"
    >
      <div className="flex items-start gap-25">
        <div
          className="w-[147px] max-sm:w-[50px] h-[135px] max-sm:h-[40px]
           bg-red-80 rounded-tl-3xl max-sm:rounded-tl-[5px] 
           rounded-br-3xl max-sm:rounded-br-[5px] 
           rounded-tr-lg rounded-tr-[15px] 
           rounded-bl-lg rounded-bl-[15px] 
        flex flex-col justify-center items-center 
        cursor-pointer"
        >
          <PiHeartStraightLight className="text-[#ffffff] text-[90px] max-sm:text-[32px]" />
          <h1 className="text-2xl max-sm:text-[5px] font-bold max-sm:font-normal text-[#ffffff]">
            With Love
          </h1>
          <span className="text-[8px] max-sm:text-[2px] text-[#ffffff] mb-1">
            RACHA
          </span>
        </div>
        <Nav />
      </div>
      <div className="flex gap-6 max-sm:gap-[22px] justify-center items-center">
        <div className="flex justify-center items-center gap-4  max-sm:gap-[12px]">
          <h2 className="text-blue-primary max-sm:text-[13px] max-sm:leading-[38px] font-bold">
            GIORGI 99
          </h2>
          <div className="relative max-sm:size-[38px] w-14 h-14 cursor-pointer">
            <FaUser className="max-sm:text-[18px] text-[24px] text-[#ffffff] absolute top-1/2 left-1/2 transform -translate-1/2 z-10" />
            <img
              src={userBcg}
              alt="user background"
              className="absolute top-0 left-0 w-full h full"
            />
          </div>
        </div>
        <div className="max-sm:size-[38px] relative border-[2px] border-blue-primary flex justify-center items-center w-14 h-14 cursor-pointer rounded-full">
          <span className="max-sm:text-[14px] leading-[19px] text-blue-primary font-bold">
            Eng
          </span>
        </div>
        <button
          className="hidden max-sm:block"
          type="button"
          onClick={() => setAside(!aside)}
        >
          {aside ? (
            <FaXmark className="text-[32px] text-blue-primary" />
          ) : (
            <HiOutlineMenuAlt3 className="text-[32px] text-blue-primary" />
          )}
        </button>
      </div>
      {aside && <Aside />}
    </header>
  );
};

export default Header;
