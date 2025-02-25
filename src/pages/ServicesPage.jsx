import HeroBanner from "../components/HeroBanner";
import LocalProduction from "../components/LocalProduction";
import ServicesHotels from "../components/ServicesHotels";
import Tours from "../components/Tours";

const ServicesPage = () => {
  return (
    <main className="bg-primary pb-[180px]">
      <HeroBanner heading={"სერვისები"} />
      <p className="mx-25 w-[70%] text-blue-primary mt-[92px] text-[30px] leading-[40px] opacity-60">
        Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი
        თავგადასავლის მონაწილე გახდე. ჩვენთან ერთად შეძლებ დაჯავშნო სასტუმროები,
        დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ დამზადებული
        ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში
        შეძლებთ.
      </p>
      <ServicesHotels number={"01"} />
      <LocalProduction number={"02"} />
      <Tours number={"03"} />
    </main>
  );
};
export default ServicesPage;
