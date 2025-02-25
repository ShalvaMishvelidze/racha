import { BiBriefcase, BiBuilding } from "react-icons/bi";
import Section from "./Section";
import SingleService from "./SingleService";
import { FaShoppingBasket } from "react-icons/fa";
import { people } from "../assets";

const Services = () => {
  return (
    <Section heading={"სერვისები"} paragraph={"ჩვენ გთავაზობთ"} number={"02"}>
      <div className="mt-[71px] flex gap-[5%]">
        <div className="flex flex-col w-[60%] border-t border-blue-primary">
          <SingleService text={"ტურები რაჭაში"} Icon={BiBriefcase} />
          <SingleService
            text={"ადგილობრივი მეწარმეობა"}
            Icon={FaShoppingBasket}
          />
          <SingleService text={"სასტუმროები"} Icon={BiBuilding} />
        </div>

        <img
          className="rounded-[20px] h-[414px] w-[35%] object-cover"
          src={people}
          alt="people"
        />
      </div>
    </Section>
  );
};
export default Services;
