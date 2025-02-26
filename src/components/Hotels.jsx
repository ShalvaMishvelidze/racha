import HotelsContainer from "./HotelsContainer";
import Pagination from "./Pagination";
import Section from "./Section";

const Hotels = ({ number }) => {
  return (
    <Section
      heading={"სასტუმროები"}
      paragraph={
        "დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ"
      }
      number={number}
    >
      <HotelsContainer />
      <Pagination />
    </Section>
  );
};
export default Hotels;
