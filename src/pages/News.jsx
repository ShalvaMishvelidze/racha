import HeroBanner from "../components/HeroBanner";
import Pagination from "../components/Pagination";
import SingleNews from "../components/SingleNews";

const News = () => {
  return (
    <main className="bg-primary pb-[200px]">
      <HeroBanner heading={"სიახლეები"} />
      <p className="mx-25 mt-[115px] w-[70%] text-[30px] leading-[40px] text-blue-primary opacity-60">
        სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც
        რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად
        განვითარებაში მონაწილეობის მიღებაა.
      </p>
      <div className="flex gap-[122px] mx-25 mt-[100px]">
        <SingleNews />
        <SingleNews />
      </div>
      <div className="mx-25">
        <Pagination />
      </div>
    </main>
  );
};
export default News;
