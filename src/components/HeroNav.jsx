import { FaShoppingBasket } from "react-icons/fa";
import HeroNavItem from "./HeroNavItem";
import { BiBriefcase, BiBuilding } from "react-icons/bi";

export const HeroNav = () => {
  return (
    <section className="mx-25 flex justify-between items-center mt-15">
      <HeroNavItem
        heading={"ტურები რაჭაში"}
        paragraph={"გამოგვყევი"}
        Icon={BiBriefcase}
      />
      <div className="h-[58px] w-[2px] rounded-[3px] bg-black opacity-50"></div>
      <HeroNavItem
        heading={"ადილობრივი მეწარმეობა"}
        paragraph={"შეიძინე"}
        Icon={FaShoppingBasket}
      />
      <div className="h-[58px] w-[2px] rounded-[3px] bg-black opacity-50"></div>
      <HeroNavItem
        heading={"სასტუმროები"}
        paragraph={"დაჯავშნე"}
        Icon={BiBuilding}
      />
    </section>
  );
};
