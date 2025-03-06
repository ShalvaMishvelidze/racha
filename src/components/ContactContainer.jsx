import { addressMap } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import SocialsContainer from "./SocialsContainer";

const ContactContainer = () => {
  return (
    <section className="mx-[100px] max-xl:mx-[20px] mt-[100px] max-xl:mt-[50px]">
      <h1
        className="font-bold text-[30px] max-sm:text-[12px] 
      leading-[38px] max-sm:leading-[20px] 
      tracking-[1.5px] max-sm:tracking-[0.8px] 
      text-blue-primary opacity-90"
      >
        რუკა
      </h1>
      <a href="https://maps.app.goo.gl/NhSpZkgpQmCSsVXGA" target="_blank">
        <img
          className="mt-[36px] max-md:mt-[24px] w-full 
        h-[502px] max-md:h-[265px] object-cover 
        rounded-[30px] max-md:rounded-[10px]"
          src={addressMap}
          alt="map"
        />
      </a>
      <SocialsContainer />
      <div className="flex gap-[80px] max-sm:gap-[20px] mt-[55px] max-sm:mt-[20px] items-center">
        <div className="flex items-center gap-[18px] max-sm:gap-[8px]">
          <MdOutlinePhoneIphone className=" text-blue-primary text-[30px] max-sm:text-[20px] " />
          <h4
            className="font-bold text-[18px] max-sm:text-[14px] 
          leading-[22px] max-sm:leading-[18px] 
          text-blue-primary opacity-80"
          >
            599 99 99 99
          </h4>
        </div>
        <div className="flex items-center gap-[18px] max-sm:gap-[8px]">
          <FaLocationDot className=" text-blue-primary text-[30px] max-sm:text-[20px] " />
          <h4
            className="font-bold text-[18px] max-sm:text-[14px] 
          leading-[22px] max-sm:leading-[18px] 
          text-blue-primary opacity-80"
          >
            რაჭა ონი
          </h4>
        </div>
      </div>
    </section>
  );
};
export default ContactContainer;
