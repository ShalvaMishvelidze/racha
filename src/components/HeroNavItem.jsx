import { FiArrowUpRight } from "react-icons/fi";

const HeroNavItem = ({ heading, paragraph, Icon }) => {
  return (
    <a href="#" className="group">
      <div className="flex gap-[21px] items-center mb-4">
        <div
          className="size-[108px] flex justify-center items-center 
        border-[3px] border-solid border-blue-primary rounded-full group-hover:border-transparent group-hover:bg-red-primary"
        >
          <Icon className="text-[40px] text-blue-primary group-hover:text-[#ffffff]" />
        </div>
        <h1 className="text-[20px] leading-[25px] text-blue-primary font-bold ">
          {heading}
        </h1>
      </div>
      <p className="flex items-center gap-4 text-blue-primary font-bold text-[20px] leading-[25px] group-hover:text-red-primary">
        {paragraph}
        <FiArrowUpRight className="text-[40px] group-hover:text-red-primary mt-2" />
      </p>
    </a>
  );
};
export default HeroNavItem;
