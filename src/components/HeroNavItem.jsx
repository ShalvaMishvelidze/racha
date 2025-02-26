import { FiArrowUpRight } from "react-icons/fi";

const HeroNavItem = ({ heading, paragraph, Icon }) => {
  return (
    <a href="#" className="group">
      <div
        className="flex gap-[21px] items-center mb-4 max-sm:mb-[26px] 
       max-sm:pl-[16.5px]"
      >
        <div
          className="size-[108px] max-sm:size-[86px] 
          flex justify-center items-center 
        border-[3px] border-solid border-blue-primary 
        max-sm:border-red-primary 
        rounded-full group-hover:border-transparent 
        group-hover:bg-red-primary"
        >
          <Icon className="text-[40px] max-sm:text-red-primary max-sm:text-[26px] text-blue-primary group-hover:text-[#ffffff]" />
        </div>
        <h1
          className="text-[20px] max-sm:text-[13px] leading-[25px] 
        max-sm:leading-[16px] text-blue-primary font-bold 
        max-sm:tracking-[2.34px] group-hover:text-red-primary 
        max-sm:w-[55%]"
        >
          {heading}
        </h1>
      </div>
      <p
        className="flex items-center gap-4 text-blue-primary 
       max-sm:pl-[16.5px] font-bold text-[20px] 
       leading-[25px] group-hover:text-red-primary 
       max-sm:text-[13px] max-sm:leading-[16px] max-sm:tracking-[0.65px]"
      >
        {paragraph}
        <FiArrowUpRight
          className="text-[40px] max-sm:text-[20px] group-hover:text-red-primary mt-2 
        mb-[3px]"
        />
      </p>
    </a>
  );
};
export default HeroNavItem;
