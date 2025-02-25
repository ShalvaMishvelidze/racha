import { useLayoutEffect, useState } from "react";
import Banner from "./Banner";

const HeroBanner = ({ heading }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <section className="relative h-[552px] pt-[142px] mx-25 flex flex-col justify-center">
      <Banner />
      <div className="z-20 flex flex-col gap-10">
        <h1 className="max-w-[983px] text-[60px] leading-[38px] text-blue-primary font-bold">
          {heading}
        </h1>
      </div>
      <div className="absolute left-0 bottom-0 flex gap-[21px] items-center z-100">
        <h1 className="leading-[32px] text-blue-primary font-bold">
          DARK MODE
        </h1>
        <button
          type="button"
          className="cursor-pointer relative w-[108px] h-[40px] bg-gray-20 rounded-[50px] "
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className="size-[28px] bg-[#ffffff] rounded-full absolute top-1/2 transform -translate-y-1/2 right-[6px]"></div>
        </button>
      </div>
      <h2
        className="text-[20px] text-blue-primary rotate-90 w-auto 
      absolute -right-27 bottom-20 z-100 "
      >
        Racha with love 2022
      </h2>
    </section>
  );
};
export default HeroBanner;
