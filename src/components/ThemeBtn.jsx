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
      className="cursor-pointer relative w-[108px] max-sm:w-[81px] h-[40px] bg-gray-20 rounded-[50px] "
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="size-[28px] bg-[#ffffff] rounded-full absolute top-1/2 transform -translate-y-1/2 right-[6px]"></div>
    </button>
  );
};
export default ThemeBtn;
