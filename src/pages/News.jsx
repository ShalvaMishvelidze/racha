import HeroBanner from "../components/HeroBanner";
import Pagination from "../components/Pagination";
import SingleNews from "../components/SingleNews";

const News = () => {
  return (
    <section className="max-w-[1920px] bg-primary pb-[200px] max-sm:pb-[95px]">
      <HeroBanner heading={"სიახლეები"} />
      <p
        className="px-[100px] max-xl:px-[20px] 
      mt-[115px] max-xl:mt-[32px] w-[70%] max-xl:w-full 
      text-[30px] max-sm:text-[12px] leading-[40px] max-sm:leading-[16px] 
      text-blue-primary opacity-60"
      >
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <div
        className="flex gap-[122px] max-xl:gap-[50px] max-md:flex-col
      mx-[100px] max-xl:mx-[20px] mt-[100px] max-xl:mt-[50px]"
      >
        <SingleNews />
        <SingleNews />
      </div>
      <div className="mx-[100px] max-md:mx-[20px] max-md:mt-[50px]">
        <Pagination />
      </div>
    </section>
  );
};
export default News;
