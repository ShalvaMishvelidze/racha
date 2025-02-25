import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ocean } from "../assets";

const Slider = () => {
  return (
    <div
      className="w-[1265px] h-[568px] 
    rounded-[30px] absolute right-[67px] z-10 overflow-hidden"
    >
      <img
        className="w-full h-full object-cover opacity-65"
        src={ocean}
        alt="ocean"
      />
      <div className="absolute right-[50px] bottom-[50px] flex gap-[35px]">
        <button
          className="group size-12 border border-white rounded-full 
        flex justify-center items-center hover:bg-white cursor-pointer
        "
          type="button"
        >
          <BsArrowLeft className="text-white text-[24px] group-hover:text-black " />
        </button>
        <button
          type="button"
          className="group size-12 border border-white rounded-full 
        flex justify-center items-center hover:bg-white cursor-pointer"
        >
          <BsArrowRight className="text-white text-[24px] group-hover:text-black " />
        </button>
      </div>
    </div>
  );
};
export default Slider;
