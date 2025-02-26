import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ocean } from "../assets";

const Slider = () => {
  return (
    <>
      <div
        className="z-10 w-[1265px] max-sm:w-full  h-[568px] max-sm:h-[274px]
    rounded-[30px] absolute max-sm:relative right-[67px] max-sm:right-0 z-10 overflow-hidden"
      >
        <img
          className="w-full h-full object-cover opacity-65"
          src={ocean}
          alt="ocean"
        />
      </div>
      <div
        className="absolute right-[110px] max-sm:right-[26px] 
      bottom-[50px] max-sm:bottom-[28px] flex gap-[35px] 
      max-sm:gap-[20px] z-50"
      >
        <button
          className="group size-12 max-sm:size-[32px] border border-[#ffffff] rounded-full 
        flex justify-center items-center hover:bg-[#ffffff] cursor-pointer
        "
          type="button"
        >
          <BsArrowLeft className="text-[#ffffff] text-[24px] max-sm:text-[18px] group-hover:text-[#000000] " />
        </button>
        <button
          type="button"
          className="group size-12 max-sm:size-[32px] border border-[#ffffff] rounded-full 
        flex justify-center items-center hover:bg-[#ffffff] cursor-pointer"
        >
          <BsArrowRight className="text-[#ffffff] text-[24px] max-sm:text-[18px] group-hover:text-[#000000] " />
        </button>
      </div>
    </>
  );
};
export default Slider;
