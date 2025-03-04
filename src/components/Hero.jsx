import { useLocalStorage } from "../hooks/useLocalStorage";
import Slider from "./Slider";
import ThemeBtn from "./ThemeBtn";

const Hero = () => {
  const [user] = useLocalStorage("user", null);
  return (
    <section className="relative z-1 h-[710px] max-xxl:h-auto pt-[142px] max-xxl:pt-[156px] mx-25 max-xxl:mx-5 flex flex-col justify-center">
      <Slider />
      <div className="z-20 flex flex-col max-xxl:h-full max-xxl:w-full gap-10 max-xxl:absolute top-0 left-0">
        <h1
          className="max-w-[983px] max-xxl:w-[65%] max-lg:text-[20px] text-[60px] max-xxl:text-[40px]
        leading-[38px] max-xxl:leading-[24px] 
        text-blue-primary font-bold 
        max-xxl:absolute left-[30px] bottom-[100px]"
        >
          რაჭა ჩვენი სიყვარულია
        </h1>
        <p
          className="max-w-[983px] max-xxl:w-[55%] 
        text-[20px] max-xxl:text-[16px] max-lg:text-[10px] leading-[25px] max-xxl:leading-[16px] 
        text-blue-primary font-bold max-xxl:font-normal opacity-80 
        max-xxl:absolute left-[30px] bottom-[24px]"
        >
          ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და
          ღირსშესანიშნაობებს.
        </p>
        <div className="absolute left-[30px] bottom-[200px] gap-[21px] items-center z-100 max-lg:hidden hidden max-xxl:flex">
          <h1
            className="leading-[32px] text-blue-primary font-bold 
        max-xxl:text-[12px] max-xxl:leading-[32px] max-xxl:font-normal"
          >
            DARK MODE
          </h1>
          <ThemeBtn />
        </div>
      </div>
      {user && (
        <div
          className="absolute left-0 bottom-0 
      max-xxl:right-0 max-xxl:top-[80px] max-xxl:left-auto
       max-xxl:bottom-auto flex gap-[21px] 
       max-xxl:gap-[7px] items-center z-100"
        >
          <h1
            className="leading-[32px] text-blue-primary font-bold 
        max-xxl:text-[12px] max-xxl:leading-[32px] max-xxl:font-normal"
          >
            DARK MODE
          </h1>
          <ThemeBtn />
        </div>
      )}
      <div
        className="absolute left-0 bottom-0 
      max-xxl:right-0 max-xxl:top-[80px] max-xxl:left-auto
       max-xxl:bottom-auto flex gap-[21px] 
       max-xxl:gap-[7px] items-center z-100 max-xxl:hidden "
      >
        <h1
          className="leading-[32px] text-blue-primary font-bold 
        max-xxl:text-[12px] max-xxl:leading-[32px] max-xxl:font-normal"
        >
          DARK MODE
        </h1>
        <ThemeBtn />
      </div>
      <h2
        className="text-[20px] text-blue-primary rotate-90 w-auto 
      absolute -right-27 bottom-20 z-100 max-xxl:hidden"
      >
        Racha with love 2022
      </h2>
    </section>
  );
};
export default Hero;
