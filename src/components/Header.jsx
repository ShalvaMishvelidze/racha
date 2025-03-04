import { FaUser } from "react-icons/fa";
import { userBcg } from "../assets";
import Nav from "./Nav";
import { PiHeartStraightLight } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Aside from "./Aside";
import { FaXmark } from "react-icons/fa6";
import { useLocalStorage } from "../hooks/useLocalStorage";
import AuthBtns from "./AuthBtns";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  const [aside, setAside] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [localUser] = useLocalStorage("user", null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 976) {
      setAside(false);
    }
  }, [width]);

  return (
    <>
      <header
        className="absolute w-full top-0 left-0 flex justify-between items-start 
    px-[100px] max-xxl:px-[20px] py-12 max-lg:py-5 z-100"
      >
        <div className="flex items-start gap-[100px] max-xxl:gap-[25px]">
          <div
            className="w-[147px] max-lg:w-[50px] h-[135px] max-lg:h-[40px]
           bg-red-80 rounded-tl-[24px] max-lg:rounded-tl-[5px] 
           rounded-br-[24px] max-lg:rounded-br-[5px] 
           rounded-tr-lg rounded-tr-[15px] 
           rounded-bl-lg rounded-bl-[15px] 
        flex flex-col justify-center items-center 
        cursor-pointer max-xxl:h-[90px] max-xxl:w-[110px]"
          >
            <PiHeartStraightLight className="text-[#ffffff] text-[90px] max-lg:text-[32px] max-xxl:text-[54px]" />
            <h1 className="text-[24px] max-lg:text-[5px] font-bold max-lg:font-normal text-[#ffffff] max-xxl:text-[16px]">
              With Love
            </h1>
            <span className="text-[8px] max-lg:text-[2px] text-[#ffffff] mb-1 max-xxl:text-[6px] ">
              RACHA
            </span>
          </div>
          <Nav />
        </div>
        <div className="flex gap-6 max-lg:gap-[22px] justify-center items-center">
          {!localUser && (
            <div className="max-xl:hidden">
              <AuthBtns />
            </div>
          )}
          {!localUser && (
            <div className="hidden max-lg:block">
              <ThemeBtn />
            </div>
          )}
          {localUser && (
            <div className="flex justify-center items-center gap-[44px]  max-xl:gap-[12px]">
              <h2 className="text-blue-primary max-xl:text-[13px] max-xl:leading-[38px] font-bold">
                GIORGI 99
              </h2>
              <div className="relative max-xl:size-[38px] w-14 h-14 cursor-pointer">
                <FaUser className="max-xl:text-[18px] text-[24px] text-[#ffffff] absolute top-1/2 left-1/2 transform -translate-1/2 z-10" />
                <img
                  src={userBcg}
                  alt="localUser background"
                  className="absolute top-0 left-0 w-full h full"
                />
              </div>
            </div>
          )}
          <div className="max-xl:size-[38px] relative border-[2px] border-blue-primary flex justify-center items-center w-14 h-14 cursor-pointer rounded-full">
            <span className="max-xl:text-[14px] leading-[19px] text-blue-primary font-bold">
              Eng
            </span>
          </div>
          <button
            className="hidden max-lg:block cursor-pointer"
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
      {!localUser && (
        <div className="hidden max-xl:block relative z-1000 w-full">
          <AuthBtns />
        </div>
      )}
    </>
  );
};

export default Header;
