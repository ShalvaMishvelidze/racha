import { office } from "../assets";

const SingleNews = () => {
  return (
    <div className="w-[785px] max-sm:w-full ">
      <h1
        className="mb-[24px] text-[30px] max-sm:text-[16px] 
      text-blue-primary leading-[38px] max-sm:leading-[20px] 
      tracking-[1.5px] text-primary-blue opacity-90 font-bold"
      >
        სიახლეები
      </h1>
      <img
        className="mb-[24px] w-full h-[502px] max-sm:h-[265px] 
        rounded-[30px] max-sm:rounded-[10px] object-cover"
        src={office}
        alt="office"
      />
      <p
        className="text-blue-primary text-[18px] max-sm:text-[12px] 
      leading-[26px] max-sm:leading-[16px] opacity-60"
      >
        Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი
        თავგადასავლის
        <br /> მონაწილე გახდე. ვენთან ერთად შეძლებ დაჯავშნო სასტუმროები, დაგეგმო
        ტურები და შეიძინო
        <br /> ადგილობრივი მეწარმეების მიერ დამზადებული ნივთები. ამ ყველაფერს
        მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში შეძლებთ.
      </p>
    </div>
  );
};
export default SingleNews;
