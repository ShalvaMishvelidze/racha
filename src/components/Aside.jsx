import { Link } from "react-router";

const Aside = () => {
  return (
    <aside
      className="w-[95%] h-[368px] bg-blue-80 
    absolute right-0 top-[156px] rounded-tl-[30px] rounded-bl-[30px] 
    pt-[34px] text-[16px] leading-[20px] 
    flex flex-col items-end pr-[23px] gap-[24px] *:font-bold *:text-primary 
    *:hover:text-red-primary"
    >
      <Link to={"/"}>მთავარი</Link>
      <Link to={"/services"}>სერვისები</Link>
      <Link to={"/team"}>ჩვენი გუნდი</Link>
      <Link to={"/news"}>სიახლეები</Link>
      <Link to={"/contact"}>კონტაკტი</Link>
      <button className="mt-[20px]" type="button">
        გამოსვლა
      </button>
    </aside>
  );
};
export default Aside;
