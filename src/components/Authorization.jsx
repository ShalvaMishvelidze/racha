import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputDesktop from "./InputDesktop";
import SocialsContainer from "./SocialsContainer";

const Authorization = () => {
  const [, setLocalUser] = useLocalStorage("user", null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (user.email === "" || user.password === "") {
      setError(true);
      return;
    }
    setLocalUser(user);
  };

  return (
    <div className="w-[1384px] max-xxl:w-[1000px] max-xxl:rounded-[24px] rounded-[30px] max-xl:rounded-0 absolute bg-gray-15 top-[95px] right-0 opacity-90 max-xl:opacity-100 pl-[100px] max-xxl:pl-[25px] pt-[100px] max-xxl:pt-[25px] pb-[48px] max-xxl:pb-[25px] pr-[53px] max-xxl:pr-[25px] max-xl:block max-xl:w-full max-xl:bg-primary max-xl:top-0 max-xl:right-auto max-xl:left-0 z-5000 max-xl:min-h-screen max-xl:px-[20px] max-xl:pb-[200px] max-xl:pt-[60px] max-xl:mt-[55px]">
      <h1 className="text-[30px] leading-[30px] tracking-[1.5px] text-red-primary font-bold mb-[70px] max-xl:text-[20px] max-xl:leading-[25px] max-xl:tracking-[1px] max-xl:text-blue-primary">
        ავტორიზაცია
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" max-xl:px-[28px] max-xl:pt-[34px] max-xl:pb-[44px] max-xl:rounded-[20px] max-xl:bg-blue-50 max-xl:mt-[28px]"
      >
        <div className="grid grid-cols-2 gap-[91px] max-xl:flex max-xl:flex-col max-xl:gap-[30px]">
          <InputDesktop
            label={"ელ ფოსტა"}
            type={"email"}
            name={"email"}
            value={user.email}
            user={user}
            setUser={setUser}
          />
          <InputDesktop
            label={"პაროლი"}
            type={"password"}
            name={"password"}
            value={user.password}
            user={user}
            setUser={setUser}
          />
        </div>
        <button
          className="text-[14px] leading-[18px] text-[#ffffff] w-[183px] h-[54px] rounded-[50px] bg-red-primary mt-[36px] max-xl:mt-[20px] cursor-pointer font-bold"
          type="submit"
          onSubmit={handleSubmit}
        >
          შესვლა
        </button>
        {error && (
          <h3 className="text-red-primary">შეავსეთ ყველა ველი სწორად!</h3>
        )}
      </form>
      <button
        className="max-xl:hidden text-[14px] leading-[18px] font-bold text-blue-90 mt-[26px]"
        type="button"
      >
        პაროლის აღდგენა
      </button>
      <div className="max-xl:hidden">
        <SocialsContainer dark />
      </div>
      <div className="hidden max-xl:block">
        <SocialsContainer />
      </div>
    </div>
  );
};
export default Authorization;
