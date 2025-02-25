import HotelsContainer from "./HotelsContainer";
import Pagination from "./Pagination";
import ServicesSection from "./ServicesSection";

const LocalProduction = ({ number }) => {
  return (
    <ServicesSection
      heading={"ადგილობრივი მეწარმეობა"}
      paragraph={
        "შეიძინე ადგილობრივად რაჭაში წარმოებული უნიკალური ნივთები. აღმოაჩინე ჩვენთან ერთდ!"
      }
      number={number}
    >
      <HotelsContainer />
      <Pagination />
    </ServicesSection>
  );
};
export default LocalProduction;
