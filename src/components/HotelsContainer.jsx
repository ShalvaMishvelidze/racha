import SingleHotel from "./SingleHotel";

const HotelsContainer = () => {
  return (
    <div className="flex justify-between max-md:flex-col mt-[71px] gap-[110px] max-xxl:gap-[16px] max-sm:gap-[16px]">
      <SingleHotel />
      <SingleHotel />
      <SingleHotel />
    </div>
  );
};
export default HotelsContainer;
