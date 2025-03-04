import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputDesktop from "./InputDesktop";
import SocialsContainer from "./SocialsContainer";

const AuthorizationMobile = () => {
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
      className="hidden max-xl:block w-full bg-primary 
    absolute top-0 left-0 z-5000 min-h-screen px-[20px] pb-[200px] pt-[60px] mt-[55px]"
    >
      <h1
        className="text-[20px] leading-[25px] tracking-[1px]
      text-blue-primary font-bold"
      >
        ავტორიზაცია
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" px-[28px] pt-[34px] pb-[44px] 
        rounded-[20px] bg-blue-50 mt-[28px]"
      >
        <div className="flex flex-col gap-[30px]">
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
      w-[183px] h-[54px] rounded-[50px] bg-red-primary mt-[20px]
      cursor-pointer font-bold"
          type="submit"
          onSubmit={handleSubmit}
        >
          შესვლა
        </button>
        {error && (
          <h3 className="text-red-primary">შეავსეთ ყველა ველი სწორად!</h3>
        )}
      </form>
      <SocialsContainer />
    </div>
  );
};
export default AuthorizationMobile;
