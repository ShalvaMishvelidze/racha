import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputDesktop from "./InputDesktop";

const RegisterMobile = () => {
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
      className="hidden max-lg:block w-full bg-primary 
    absolute top-0 left-0 z-5000 min-h-screen px-[20px] pb-[200px] pt-[60px] mt-[55px]"
    >
      <h1
        className="text-[20px] leading-[25px] tracking-[1px]
      text-blue-primary font-bold"
      >
        რეგისტრაცია
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" px-[28px] pt-[34px] pb-[44px] 
        rounded-[20px] bg-blue-50 mt-[28px]"
      >
        <div className="flex flex-col gap-[30px]">
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
        <div className="flex gap-[8px] items-center mt-[20px]">
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
            className="w-[14px] h-[14px] border-[1px] border-gray-300 cursor-pointer"
          />
          <h4
            className="text-[12px] leading-[40px] text-blue-primary 
        font-bold"
          >
            შეთანხმება მომსახურების შესახებ
          </h4>
        </div>
        <button
          className="text-[14px] leading-[18px] text-[#ffffff] 
      w-[183px] h-[54px] rounded-[50px] bg-red-primary mt-[20px]
      cursor-pointer font-bold"
          type="submit"
          onSubmit={handleSubmit}
        >
          რეგისტრაცია
        </button>
        {error && (
          <h3 className="text-red-primary">შეავსეთ ყველა ველი სწორად!</h3>
        )}
      </form>
    </div>
  );
};
export default RegisterMobile;
