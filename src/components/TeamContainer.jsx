import TeamMember from "./TeamMember";

const TeamContainer = () => {
  return (
    <div
      className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-[20px]
      gap-[91px] mt-[40px] max-sm:mt-[32px] 
    mx-25 max-sm:mx-5 mt-[70px]"
    >
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
};
export default TeamContainer;
