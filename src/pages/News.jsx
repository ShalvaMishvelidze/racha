import HeroBanner from "../components/HeroBanner";
import Pagination from "../components/Pagination";
import SingleNews from "../components/SingleNews";

const News = () => {
  return (
    <section className="max-w-[1920px] bg-primary pb-[200px] max-sm:pb-[95px]">
      <HeroBanner heading={"სიახლეები"} />
      <p
        className="mx-25 max-sm:mx-0 max-sm:px-5 
      mt-[115px] max-sm:mt-[32px] w-[70%] max-sm:w-full 
      text-[30px] max-sm:text-[12px] leading-[40px] max-sm:leading-[16px] 
      text-blue-primary opacity-60"
      >
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <div
        className="flex gap-[122px] max-sm:gap-[50px] max-sm:flex-col
      mx-25 max-sm:mx-5 mt-[100px] max-sm:mt-[50px]"
      >
        <SingleNews />
        <SingleNews />
      </div>
      <div className="mx-25 max-sm:mx-5 max-sm:mt-[50px]">
        <Pagination />
      </div>
    </section>
  );
};
export default News;
