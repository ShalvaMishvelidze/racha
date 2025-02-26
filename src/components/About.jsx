import { office } from "../assets";
import Section from "./Section";

const About = ({ number }) => {
  return (
    <Section
      heading={"ჩვენს შესახებ"}
      paragraph={
        "ვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და ღირსშესანიშნაობებს."
      }
      number={number}
    >
      <div className="mt-[56px] relative h-[472px] w-full max-sm:h-auto max-sm:mb-[120px]">
        <img
          className="absolute max-sm:hidden left-0 top-0 z-10 w-[694px] h-[472px] rounded-[29px] object-cover "
          src={office}
          alt="office"
        />
        <div
          className="absolute left-7/18 bottom-[50px] 
        max-sm:left-0 z-20 max-sm:bottom-auto max-sm:top-[-45px] 
         rounded-[20px] w-[324px] h-[239px] bg-red-70 
         max-sm:rounded-[10px] max-sm:w-[219px] max-sm:h-[207px] 
         max-sm:bg-gray-10"
        ></div>
        <p
          className="text-[18px] leading-[26px] text-blue-primary 
        w-[60%] absolute max-sm:relative max-sm:right-auto max-sm:bottom-auto 
        right-0 bottom-[130px] z-30 
        max-sm:w-full max-sm:text-[12px] max-sm:leading-[16px]
        max-sm:pl-[16.5px]"
        >
          <b>Racha with Love</b> დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და
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
