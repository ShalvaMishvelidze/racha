import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-blue-primary text-white w-full h-[144px]
     flex px-25 justify-between items-center"
    >
      <h3 className="text-[18px] text-white leading-[23px] font-bold">
        Racha with love All rights reserved Copyrights 2022
      </h3>
      <div className="flex items-center gap-[46px]">
        <FaFacebook className="text-[29px] text-white cursor-pointer" />
        <FaInstagram className="text-[29px] text-white cursor-pointer" />
        <FaYoutube className="text-[29px] text-white cursor-pointer" />
      </div>
    </footer>
  );
};
export default Footer;
