import HotelsContainer from "./HotelsContainer";
import Pagination from "./Pagination";
import ServicesSection from "./ServicesSection";

const ServicesHotels = ({ number }) => {
  return (
    <ServicesSection
      heading={"სასტუმროები"}
      paragraph={
        "დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ"
      }
      number={number}
    >
      <HotelsContainer />
      <Pagination />
    </ServicesSection>
  );
};
export default ServicesHotels;
