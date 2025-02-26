import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="max-sm:hidden flex gap-15 text-blue-primary font-bold *:hover:text-red-primary leading-[20px] pt-4">
      <Link to={"/"}>მთავარი</Link>
      <Link to={"/services"}>სერვისები</Link>
      <Link to={"/team"}>ჩვენი გუნდი</Link>
      <Link to={"/news"}>სიახლეები</Link>
      <Link to={"/contact"}>კონტაკტი</Link>
    </nav>
  );
};

export default Nav;
