import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="max-lg:hidden flex gap-[60px] max-xl:gap-[24px] text-blue-primary font-bold *:hover:text-red-primary leading-[20px] pt-[16px] max-xl:text-[16px] max-xl:font-bold max-xl:pt-[8px]">
      <Link to={"/"}>მთავარი</Link>
      <Link to={"/services"}>სერვისები</Link>
      <Link to={"/team"}>ჩვენი გუნდი</Link>
      <Link to={"/news"}>სიახლეები</Link>
      <Link to={"/contact"}>კონტაკტი</Link>
    </nav>
  );
};

export default Nav;
