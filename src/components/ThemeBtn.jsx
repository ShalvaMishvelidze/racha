import { useLayoutEffect, useState } from "react";

const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      className="cursor-pointer relative w-[108px] max-xl:w-[81px] h-[40px] p-[6px] bg-gray-20 rounded-[50px] "
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`size-[28px] bg-[#ffffff] rounded-full transform transition-all duration-500  ${
          darkMode
            ? "translate-x-[66px] max-xl:translate-x-[40px]"
            : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};
export default ThemeBtn;
