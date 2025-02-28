import { useLocalStorage } from "../hooks/useLocalStorage";
import Slider from "./Slider";
import ThemeBtn from "./ThemeBtn";

const Hero = () => {
  const [user] = useLocalStorage("user", null);
  return (
    <section className="relative z-1 h-[710px] max-sm:h-auto pt-[142px] max-sm:pt-[156px] mx-25 max-sm:mx-5 flex flex-col justify-center">
      <Slider />
      <div className="z-20 flex flex-col max-sm:h-full max-sm:w-full gap-10 max-sm:absolute top-0 left-0">
        <h1
          className="max-w-[983px] max-sm:w-[65%] max-sm:text-[20px] text-[60px] 
        leading-[38px] max-sm:leading-[24px] 
        text-blue-primary font-bold 
        max-sm:absolute left-[30px] bottom-[100px]"
        >
          რაჭა ჩვენი სიყვარულია
        </h1>
        <p
          className="max-w-[983px] max-sm:w-[55%] 
        text-[20px] max-sm:text-[10px] leading-[25px] max-sm:leading-[16px] 
        text-blue-primary font-bold max-sm:font-normal opacity-80 
        max-sm:absolute left-[30px] bottom-[24px]"
        >
          ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და
          ღირსშესანიშნაობებს.
        </p>
      </div>
      {user && (
        <div
          className="absolute left-0 bottom-0 
      max-sm:right-0 max-sm:top-[80px] max-sm:left-auto
       max-sm:bottom-auto flex gap-[21px] 
       max-sm:gap-[7px] items-center z-100"
        >
          <h1
            className="leading-[32px] text-blue-primary font-bold 
        max-sm:text-[12px] max-sm:leading-[32px] max-sm:font-normal"
          >
            DARK MODE
          </h1>
          <ThemeBtn />
        </div>
      )}
      <div
        className="absolute left-0 bottom-0 
      max-sm:right-0 max-sm:top-[80px] max-sm:left-auto
       max-sm:bottom-auto flex gap-[21px] 
       max-sm:gap-[7px] items-center z-100 max-sm:hidden "
      >
        <h1
          className="leading-[32px] text-blue-primary font-bold 
        max-sm:text-[12px] max-sm:leading-[32px] max-sm:font-normal"
        >
          DARK MODE
        </h1>
        <ThemeBtn />
      </div>
      <h2
        className="text-[20px] text-blue-primary rotate-90 w-auto 
      absolute -right-27 bottom-20 z-100 max-sm:hidden"
      >
        Racha with love 2022
      </h2>
    </section>
  );
};
export default Hero;
