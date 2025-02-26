import SingleHotel from "./SingleHotel";

const HotelsContainer = () => {
  return (
    <div className="flex justify-between max-sm:flex-col mt-[71px] gap-[110px] max-sm:gap-[16px]">
      <SingleHotel />
      <SingleHotel />
      <SingleHotel />
    </div>
  );
};
export default HotelsContainer;
