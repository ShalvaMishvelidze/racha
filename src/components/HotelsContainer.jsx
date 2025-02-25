import SingleHotel from "./SingleHotel";

const HotelsContainer = () => {
  return (
    <div className="flex justify-between mt-[71px] flex-wrap gap-[110px]">
      <SingleHotel />
      <SingleHotel />
      <SingleHotel />
    </div>
  );
};
export default HotelsContainer;
