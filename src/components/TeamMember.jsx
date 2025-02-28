import { coWorker } from "../assets";

const TeamMember = () => {
  return (
    <div className="w-[362px] max-sm:w-[177px] flex flex-col">
      <img
        className="w-full h-[507px] max-sm:h-[206px] object-cover rounded-[20px]"
        src={coWorker}
        alt="team member"
      />
      <h2
        className="text-[23px] max-sm:text-[14px] 
      leading-[29px] max-sm:leading-[18px] 
      text-blue-primary font-bold opacity-90 
      mt-[24px] max-sm:mt-[10px]"
      >
        ელენე ლობჯანიძე
      </h2>
      <h4
        className="text-[18px] max-sm:text-[12px] 
      leading-[23px] max-sm:leading-[15px] 
      text-gray-30 opacity-90 
      mt-[16px] max-sm:mt-[8px] font-bold"
      >
        პოზიცია
      </h4>
    </div>
  );
};
export default TeamMember;
