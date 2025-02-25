import { FiArrowUpRight } from "react-icons/fi";
import { hotel } from "../assets";
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleHotel = () => {
  const stars = Array(5).fill(0);
  return (
    <a
      href="#"
      className="group flex flex-col border-b border-blue-primary relative"
    >
      <div className="w-[505px] h-[462px] mb-[60px] rounded-[20px] group-hover:bg-gradient-to-b from-white-transparent to-[#ffffff] relative z-100"></div>
      <img
        className="w-[505px] h-[462px] rounded-[20px] object-cover absolute top-0 left-0 z-10"
        src={hotel}
        alt="hotel"
      />
      <div className="flex justify-between items-center">
        <p className="font-bold text-[30px] leading-[38px] text-blue-primary group-hover:text-red-primary">
          სასტუმრო სანსეტ შოვი
        </p>
        <FiArrowUpRight className="text-[32px] text-blue-primary group-hover:text-red-primary" />
      </div>
      <p className="text-[20px] leading-[68px] text-blue-primary opacity-50">
        Listings {">>"} Pizza Place {">>"} Restaurant
      </p>
      <div className="flex gap-[10px] mb-[20px]">
        {stars.map((_, index) => {
          if (index < 4) {
            return <FaStar key={index} className="text-blue-primary" />;
          } else {
            return <FaRegStar key={index} className="text-blue-primary" />;
          }
        })}
      </div>
    </a>
  );
};
export default SingleHotel;
