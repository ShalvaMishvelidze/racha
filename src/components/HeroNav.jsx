import { FaShoppingBasket } from "react-icons/fa";
import HeroNavItem from "./HeroNavItem";
import { BiBriefcase, BiBuilding } from "react-icons/bi";

export const HeroNav = () => {
  return (
    <section
      className="mx-25 max-sm:mx-0 flex max-sm:flex-col 
     justify-between items-center max-sm:items-start 
     max-sm:justify-start mt-15 max-sm:mt-[40px] 
     max-sm:gap-[46.5px]"
    >
      <HeroNavItem
        heading={"ტურები რაჭაში"}
        paragraph={"გამოგვყევი"}
        Icon={BiBriefcase}
      />
      <div
        className="h-[58px] w-[2px] rounded-[3px] bg-black opacity-50 
      max-sm:w-full max-sm:h-[2px]"
      ></div>
      <HeroNavItem
        heading={"ადილობრივი მეწარმეობა"}
        paragraph={"შეიძინე"}
        Icon={FaShoppingBasket}
      />
      <div
        className="h-[58px] w-[2px] rounded-[3px] bg-black opacity-50 
      max-sm:w-full max-sm:h-[2px]"
      ></div>
      <HeroNavItem
        heading={"სასტუმროები"}
        paragraph={"დაჯავშნე"}
        Icon={BiBuilding}
      />
      <div
        className="hidden rounded-[3px] bg-black opacity-50 
      max-sm:w-full max-sm:h-[2px] max-sm:block"
      ></div>
    </section>
  );
};
