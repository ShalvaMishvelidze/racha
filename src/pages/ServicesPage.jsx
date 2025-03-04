import HeroBanner from "../components/HeroBanner";
import LocalProduction from "../components/LocalProduction";
import ServicesHotels from "../components/ServicesHotels";
import Tours from "../components/Tours";

const ServicesPage = () => {
  return (
    <section className="bg-primary pb-[180px] max-sm:pb-[88px]">
      <HeroBanner heading={"სერვისები"} />
      <p
        className="max-w-[1920px] mx-[100px] max-sm:mx-[20px] w-[70%] max-sm:w-[80%] text-blue-primary 
      mt-[92px] max-sm:mt-[30px] text-[30px] leading-[40px] 
      opacity-60 max-sm:text-[12px] max-sm:leading-[16px]"
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
