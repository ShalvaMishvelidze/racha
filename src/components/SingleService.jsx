import { FiArrowUpRight } from "react-icons/fi";

const SingleService = ({ text, Icon }) => {
  return (
    <a
      href="#"
      className="group flex justify-between items-center h-[128px] border-b border-blue-primary w-full"
    >
      <div className="flex items-center gap-[25px]">
        <Icon className="text-[40px] text-blue-primary group-hover:text-red-primary" />
        <p className="flex items-center gap-4 text-blue-primary font-bold text-[20px] leading-[25px] group-hover:text-red-primary">
          {text}
        </p>
      </div>
      <FiArrowUpRight className="text-[40px] text-blue-primary group-hover:text-red-primary mt-2" />
    </a>
  );
};
export default SingleService;
