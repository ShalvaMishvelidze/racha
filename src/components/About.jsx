import { office } from "../assets";
import Section from "./Section";

const About = () => {
  return (
    <Section
      heading={"ჩვენს შესახებ"}
      paragraph={
        "ვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და ღირსშესანიშნაობებს."
      }
      number={"01"}
    >
      <div className="mt-[56px] relative h-[472px] w-full">
        <img
          className="absolute left-0 top-0 z-10 w-[694px] h-[472px] rounded-[29px] object-cover "
          src={office}
          alt="office"
        />
        <div className="absolute left-7/18 bottom-[50px] z-20 rounded-[20px] w-[324px] h-[239px] bg-red-70"></div>
        <p
          className="text-[18px] leading-[26px] text-blue-primary 
        w-[60%] absolute right-0 bottom-[130px] z-30"
        >
          Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და
          დაუვიწყარი თავგადასავლის მონაწილე გახდე. ვენთან ერთად შეძლებ დაჯავშნო
          სასტუმროები, დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ
          დამზადებული ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით
          ერთ სივრცეში შეძლებთ.
        </p>
      </div>
    </Section>
  );
};
export default About;
