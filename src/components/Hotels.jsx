import HotelsContainer from "./HotelsContainer";
import Pagination from "./Pagination";
import Section from "./Section";

const Hotels = () => {
  return (
    <Section
      heading={"სასტუმროები"}
      paragraph={
        "დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ"
      }
      number={"03"}
    >
      <HotelsContainer />
      <Pagination />
    </Section>
  );
};
export default Hotels;
