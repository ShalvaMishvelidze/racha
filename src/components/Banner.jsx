import { ocean } from "../assets";

const Banner = () => {
  return (
    <div
      className="w-[1265px] h-[401px] 
    rounded-[30px] absolute right-[67px] z-10 overflow-hidden"
    >
      <img
        className="w-full h-full object-cover opacity-65"
        src={ocean}
        alt="ocean"
      />
    </div>
  );
};
export default Banner;
