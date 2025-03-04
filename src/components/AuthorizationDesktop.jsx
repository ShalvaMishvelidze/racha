import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputDesktop from "./InputDesktop";
import SocialsContainer from "./SocialsContainer";

const AuthorizationDesktop = () => {
  const [_, setLocalUser] = useLocalStorage("user", null);
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
    <div
      className="max-xl:hidden w-[1384px]
  rounded-[30px] absolute bg-gray-15 top-[95px] 
  right-0 opacity-90 pl-[100px] pt-[100px] 
  pb-[48px] pr-[53px]"
    >
      <h1
        className="text-[30px] leading-[30px] tracking-[1.5px]
      text-red-primary font-bold mb-[70px]"
      >
        ავტორიზაცია
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-[91px]">
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
          className="text-[14px] leading-[18px] text-[#ffffff] 
      w-[183px] h-[54px] rounded-[50px] bg-red-primary mt-[36px]
      cursor-pointer font-bold"
          type="submit"
          onSubmit={handleSubmit}
        >
          შესვლა
        </button>
      </form>
      <button
        className="text-[14px] leading-[18px] font-bold text-blue-90 mt-[26px]"
        type="button"
      >
        პაროლის აღდგენა
      </button>
      {error && (
        <h3 className="text-red-primary">შეავსეთ ყველა ველი სწორად!</h3>
      )}
      <SocialsContainer clr={"text-[#000000]"} />
    </div>
  );
};
export default AuthorizationDesktop;
