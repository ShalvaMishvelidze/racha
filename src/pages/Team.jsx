import HeroBanner from "../components/HeroBanner";
import TeamContainer from "../components/TeamContainer";

const Team = () => {
  return (
    <section className="max-w-[1920px] bg-primary pb-[180px] max-sm:pb-[100px]">
      <HeroBanner heading={"ჩვენი გუნდი"} />
      <p
        className="px-[100px] max-xl:px-[20px] max-sm:px-5 mt-[88px] max-xl:mt-[35px] w-[70%] max-xl:w-[100%] max-sm:w-full 
      text-[30px] max-lg:text-[18px] max-sm:text-[13px] 
      leading-[40px] max-lg:leading-[28px] max-sm:leading-[18px] 
      text-blue-primary opacity-60"
      >
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <TeamContainer />
    </section>
  );
};
export default Team;
