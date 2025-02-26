import { FiArrowUpRight } from "react-icons/fi";
import { hotel } from "../assets";
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleHotel = () => {
  const stars = Array(5).fill(0);
  return (
    <a
      href="#"
      className="group flex flex-col border-b max-sm:border-b-0 border-blue-primary relative"
    >
      <div className="w-[505px] max-sm:w-full h-[462px] max-sm:h-[265px] mb-[60px] max-sm:mb-[16px] rounded-[20px] group-hover:bg-gradient-to-b from-white-transparent to-[#ffffff] relative z-100"></div>
      <img
        className="w-[505px] max-sm:w-full h-[462px] max-sm:h-[265px] rounded-[20px] object-cover absolute top-0 left-0 z-10"
        src={hotel}
        alt="hotel"
      />
      <div className="flex justify-between items-center">
        <p
          className="font-bold text-[30px] max-sm:text-[13px] 
         leading-[38px] leading-[16px] text-blue-primary 
         tracking-[0.65px] group-hover:text-red-primary"
        >
          სასტუმრო სანსეტ შოვი
        </p>
        <FiArrowUpRight className="text-[32px] max-sm:text-[20px] text-blue-primary group-hover:text-red-primary" />
      </div>
      <p className="text-[20px] max-sm:text-[13px] leading-[68px] max-sm:leading-[28px] text-blue-primary opacity-50">
        Listings {">>"} Pizza Place {">>"} Restaurant
      </p>
      <div className="flex gap-[10px] max-sm:gap-[7.5px] mb-[20px] max-sm:mt-[3px]">
        {stars.map((_, index) => {
          if (index < 4) {
            return (
              <FaStar
                key={index}
                className="text-blue-primary max-sm:text-[11px] "
              />
            );
          } else {
            return (
              <FaRegStar
                key={index}
                className="text-blue-primary max-sm:text-[11px]"
              />
            );
          }
        })}
      </div>
    </a>
  );
};
export default SingleHotel;
