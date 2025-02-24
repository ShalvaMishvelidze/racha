import { FiArrowUpRight } from "react-icons/fi";

const HeroNavItem = ({ heading, paragraph, Icon }) => {
  return (
    <a href="#" className="group">
      <div className="flex gap-[21px] items-center mb-4">
        <div
          className="size-[108px] flex justify-center items-center 
        border-[3px] border-solid border-[#25304A] rounded-full group-hover:border-transparent group-hover:bg-[#CB5366]"
        >
          <Icon className="text-[40px] text-[#25304A] group-hover:text-white" />
        </div>
        <h1 className="text-[20px] leading-[25px] text-[#25304A] font-bold ">
          {heading}
        </h1>
      </div>
      <p className="flex items-center gap-4 text-[#25304A] font-bold text-[20px] leading-[25px] group-hover:text-[#CB5366]">
        {paragraph}
        <FiArrowUpRight className="text-[40px] group-hover:text-[#CB5366] mt-2" />
      </p>
    </a>
  );
};
export default HeroNavItem;
