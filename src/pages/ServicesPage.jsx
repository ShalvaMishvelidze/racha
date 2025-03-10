import HeroBanner from "../components/HeroBanner";
import LocalProduction from "../components/LocalProduction";
import ServicesHotels from "../components/ServicesHotels";
import Tours from "../components/Tours";

const ServicesPage = () => {
  return (
    <section className="bg-primary pb-[180px] max-xl:pb-[88px]">
      <HeroBanner heading={"სერვისები"} />
      <p
        className="max-w-[1920px] mx-[100px] max-xl:mx-[20px] w-[70%] max-xl:w-[80%] text-blue-primary 
      mt-[92px] max-xl:mt-[30px] text-[30px] leading-[40px] 
      opacity-60 max-xl:text-[12px] max-xl:leading-[16px]"
      >
        Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი
        თავგადასავლის მონაწილე გახდე. ჩვენთან ერთად შეძლებ დაჯავშნო სასტუმროები,
        დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ დამზადებული
        ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში
        შეძლებთ.
      </p>
      <ServicesHotels number={"01"} />
      <LocalProduction number={"02"} />
      <Tours number={"03"} />
    </section>
  );
};
export default ServicesPage;
