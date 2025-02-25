import { coWorker } from "../assets";

const TeamMember = () => {
  return (
    <div className="w-[362px] flex flex-col">
      <img
        className="w-full h-[507px] object-cover rounded-[20px]"
        src={coWorker}
        alt="team member"
      />
      <h2 className="text-[23px] leading-[29px] text-blue-primary font-bold opacity-90 mt-[24px]">
        ელენე ლობჯანიძე
      </h2>
      <h4 className="text-[18px] leading-[23px] text-gray-30 opacity-90 mt-[16px] font-bold">
        პოზიცია
      </h4>
    </div>
  );
};
export default TeamMember;
