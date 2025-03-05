import TeamMember from "./TeamMember";

const TeamContainer = () => {
  return (
    <div className="flex flex-wrap justify-between gap-[10px] max-sm:gap-[20px] max-xl:mt-[40px] max-sm:mt-[32px] mx-[100px] max-xl:mx-[20px] mt-[70px]">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
};
export default TeamContainer;
