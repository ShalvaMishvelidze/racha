import HeroBanner from "../components/HeroBanner";
import TeamContainer from "../components/TeamContainer";

const Team = () => {
  return (
    <main className="bg-primary pb-[180px] max-sm:pb-[100px]">
      <HeroBanner heading={"ჩვენი გუნდი"} />
      <p
        className="mx-25 max-sm:mx-0 max-sm:px-5 mt-[88px] max-sm:mt-[35px] w-[70%] max-sm:w-full 
      text-[30px] max-sm:text-[13px] 
      leading-[40px] max-sm:leading-[18px] 
      text-blue-primary opacity-60"
      >
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <TeamContainer />
    </main>
  );
};
export default Team;
