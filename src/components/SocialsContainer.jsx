import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialsContainer = ({ dark }) => {
  return (
    <div className="flex justify-between mt-[78px] max-xxl:mt-[24px]">
      <h1
        className={`text-[40px] max-lg:text-[16px] leading-[49px] max-lg:leading-[19px] ${
          dark ? "text-blue-90" : "text-blue-primary"
        } font-bold `}
      >
        rachawithlove@gmail.com
      </h1>
      <div className="flex items-center gap-[37px] max-lg:gap-[12px]">
        <FaFacebook
          className={`${
            dark ? "text-blue-90" : "text-blue-primary"
          } text-[42px] max-lg:text-[15px] `}
        />
        <FaInstagram
          className={`${
            dark ? "text-blue-90" : "text-blue-primary"
          } text-[42px] max-lg:text-[15px] `}
        />
      </div>
    </div>
  );
};
export default SocialsContainer;
