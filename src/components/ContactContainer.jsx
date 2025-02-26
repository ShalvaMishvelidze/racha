import { FaFacebook, FaInstagram } from "react-icons/fa";
import { addressMap } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";

const ContactContainer = () => {
  return (
    <section className="mx-25 mt-[100px]">
      <h1 className="font-bold text-[30px] leading-[38px] tracking-[1.5px] text-blue-primary opacity-90">
        რუკა
      </h1>
      <img
        className="mt-[36px] w-full h-[502px] object-cover rounded-[30px]"
        src={addressMap}
        alt="map"
      />
      <div className="flex justify-between mt-[78px]">
        <h1 className="text-[40px] leading-[49px] text-blue-primary font-bold">
          rachawithlove@gmail.com
        </h1>
        <div className="flex items-center gap-[37px]">
          <FaFacebook className="text-blue-primary text-[42px]" />
          <FaInstagram className="text-blue-primary text-[42px]" />
        </div>
      </div>
      <div className="flex gap-[80px] mt-[55px] items-center">
        <div className="flex items-center gap-[18px]">
          <MdOutlinePhoneIphone className=" text-blue-primary text-[30px] " />
          <h4 className="font-bold text-[18px] leading-[22px] text-blue-primary opacity-80">
            599 99 99 99
          </h4>
        </div>
        <div className="flex items-center gap-[18px]">
          <FaLocationDot className=" text-blue-primary text-[30px] " />
          <h4 className="font-bold text-[18px] leading-[22px] text-blue-primary opacity-80">
            რაჭა ონი
          </h4>
        </div>
      </div>
    </section>
  );
};
export default ContactContainer;
