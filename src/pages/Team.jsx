import HeroBanner from "../components/HeroBanner";
import TeamContainer from "../components/TeamContainer";

const Team = () => {
  return (
    <main className="bg-primary pb-[180px]">
      <HeroBanner heading={"ჩვენი გუნდი"} />
      <p className="mx-25 mt-[88px] w-[70%] text-[30px] leading-[40px] text-blue-primary opacity-60">
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <TeamContainer />
    </main>
  );
};
export default Team;
