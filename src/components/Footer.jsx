import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-blue-primary text-white w-full h-[144px] 
      max-sm:h-[75px] 
     flex px-25 max-sm:px-5 justify-between items-center"
    >
      <h3
        className="text-[18px] max-sm:text-[13px] text-white 
       leading-[23px] font-bold opacity-80"
      >
        <span className="max-md:hidden">Racha with love</span> All rights
        reserved Copyrights 2022
      </h3>
      <div className="flex items-center gap-[46px] max-lg:hidden">
        <FaFacebook className="text-[29px] text-white cursor-pointer" />
        <FaInstagram className="text-[29px] text-white cursor-pointer" />
        <FaYoutube className="text-[29px] text-white cursor-pointer" />
      </div>
    </footer>
  );
};
export default Footer;
