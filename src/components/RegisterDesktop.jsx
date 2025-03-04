import { useState } from "react";
import InputDesktop from "./InputDesktop";
import { useLocalStorage } from "../hooks/useLocalStorage";

const RegisterDesktop = () => {
  const [_, setLocalUser] = useLocalStorage("user", null);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      user.agreement !== true ||
      user.password !== user.confirmPassword ||
      user.name === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setError(true);
      return;
    }
    setLocalUser(user);
  };

  return (
    <div
      className="max-xl:hidden w-[1384px] max-xxl:w-[1000px] rounded-[30px] absolute bg-gray-15 top-[95px] 
  right-0 opacity-90 pl-[100px] pt-[100px] 
  pb-[48px] pr-[53px] max-xxl:pl-[25px] max-xxl:pt-[25px] max-xxl:pr-[25px] max-xxl:pb-[25px] "
    >
      <h1
        className="text-[30px] leading-[30px] tracking-[1.5px]
      text-red-primary font-bold"
      >
        რეგისტრაცია
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-[91px] mt-[54px] max-xxl:gap-[50px]">
          <InputDesktop
            label={"სახელი"}
            type={"text"}
            name={"name"}
            value={user.name}
            user={user}
            setUser={setUser}
          />
          <InputDesktop
            label={"გვარი"}
            type={"text"}
            name={"lastName"}
            value={user.lastName}
            user={user}
            setUser={setUser}
          />
          <InputDesktop
            label={"ელ ფოსტა"}
            type={"email"}
            name={"email"}
            value={user.email}
            user={user}
            setUser={setUser}
          />
          <InputDesktop
            label={"ტელ ნომერი"}
            type={"number"}
            name={"phone"}
            value={user.phone}
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
          <InputDesktop
            label={"დაადასტურე პაროლი"}
            type={"password"}
            name={"confirmPassword"}
            value={user.confirmPassword}
            user={user}
            setUser={setUser}
          />
        </div>
        <div className="flex gap-[7px] items-center mt-[36px] max-xxl:mt-[24px]">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={user.agreement}
            onChange={(e) => {
              setUser({
                ...user,
                agreement: e.target.checked,
              });
            }}
            className="w-[16px] h-[16px] border-[1px] border-gray-300"
          />
          <h4
            className="text-[16px] leading-[40px] text-blue-90 
        font-bold"
          >
            შეთანხმება მომსახურების შესახებ
          </h4>
        </div>
        <button
          className="text-[14px] leading-[18px] text-[#ffffff] 
      w-[183px] h-[54px] rounded-[50px] bg-red-primary mt-[36px] max-xxl:mt-[24px]
      cursor-pointer font-bold"
          type="submit"
          onSubmit={handleSubmit}
        >
          რეგისტრაცია
        </button>
      </form>
      {error && (
        <h3 className="text-red-primary">შეავსეთ ყველა ველი სწორად!</h3>
      )}
    </div>
  );
};
export default RegisterDesktop;
