import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="max-lg:hidden flex gap-[60px] max-xxl:gap-[24px] text-blue-primary font-bold *:hover:text-red-primary leading-[20px] pt-[16px] max-xxl:text-[16px] max-xxl:font-bold max-xxl:pt-[8px]">
      <Link to={"/"}>მთავარი</Link>
      <Link to={"/services"}>სერვისები</Link>
      <Link to={"/team"}>ჩვენი გუნდი</Link>
      <Link to={"/news"}>სიახლეები</Link>
      <Link to={"/contact"}>კონტაკტი</Link>
    </nav>
  );
};

export default Nav;
