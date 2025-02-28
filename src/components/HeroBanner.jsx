import { useLocalStorage } from "../hooks/useLocalStorage";
import Banner from "./Banner";
import ThemeBtn from "./ThemeBtn";

const HeroBanner = ({ heading }) => {
  const [user] = useLocalStorage("user", null);
  return (
    <section
      className="relative h-[552px] pt-[142px] 
    max-sm:h-[325px]
     mx-25 max-sm:mx-5 flex flex-col justify-center"
    >
      <Banner />
      <div className="z-20 flex flex-col gap-10">
        <h1
          className="max-w-[983px] text-[60px] max-sm:text-[20px] 
         leading-[38px] max-sm:leading-[24px] text-blue-primary 
         font-bold max-sm:absolute left-[30px] bottom-[23px]"
        >
          {heading}
        </h1>
      </div>
      {user && (
        <div
          className="absolute left-0 bottom-0 
      max-sm:left-auto max-sm:bottom-auto max-sm:right-0 max-sm:top-[80px]
       flex gap-[21px] items-center z-100 max-sm:gap-[10px]"
        >
          <h1 className="leading-[32px] max-sm:text-[12px] text-blue-primary font-bold max-sm:font-normal">
            DARK MODE
          </h1>
          <ThemeBtn />
        </div>
      )}
      <h2
        className="text-[20px] text-blue-primary rotate-90 w-auto 
      absolute -right-27 bottom-20 z-100 max-sm:hidden"
      >
        Racha with love 2022
      </h2>
    </section>
  );
};
export default HeroBanner;
