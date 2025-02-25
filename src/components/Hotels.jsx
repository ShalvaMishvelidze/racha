import Pagination from "./Pagination";
import Section from "./Section";
import SingleHotel from "./SingleHotel";

const Hotels = () => {
  return (
    <Section
      heading={"სასტუმროები"}
      paragraph={
        "დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ"
      }
      number={"03"}
    >
      <div className="flex justify-between mt-[71px] flex-wrap gap-[110px]">
        <SingleHotel />
        <SingleHotel />
        <SingleHotel />
      </div>
      <Pagination />
    </Section>
  );
};
export default Hotels;
