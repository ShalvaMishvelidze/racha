import { FaUser } from "react-icons/fa";
import { userBcg } from "../assets";
import Nav from "./Nav";
import { PiHeartStraightLight } from "react-icons/pi";

const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0 flex justify-between items-start px-25 py-12 z-100">
      <div className="flex items-start gap-25">
        <div
          className="w-[147px] h-[135px] bg-red-80 
        rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg 
        flex flex-col justify-center items-center cursor-pointer"
        >
          <PiHeartStraightLight className="text-[#ffffff] text-[90px]" />
          <h1 className="text-2xl font-bold text-[#ffffff]">With Love</h1>
          <span className="text-[8px] text-[#ffffff] mb-1">RACHA</span>
        </div>
        <Nav />
      </div>
      <div className="flex gap-6 justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-blue-primary font-bold">GIORGI 99</h2>
          <div className="relative w-14 h-14 cursor-pointer">
            <FaUser className="text-[24px] text-[#ffffff] absolute top-1/2 left-1/2 transform -translate-1/2 z-10" />
            <img
              src={userBcg}
              alt="user background"
              className="absolute top-0 left-0 w-full h full"
            />
          </div>
        </div>
        <div className="relative border-[2px] border-blue-primary flex justify-center items-center w-14 h-14 cursor-pointer rounded-full">
          <span className="leading-[19px] text-blue-primary font-bold">
            Eng
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
