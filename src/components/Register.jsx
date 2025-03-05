import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InputDesktop from "./InputDesktop";

const Register = () => {
  const [, setLocalUser] = useLocalStorage("user", null);
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
    <div className="w-[1384px] max-xxl:w-[1000px] max-xl:w-full max-xl:bg-primary rounded-[30px] max-xl:rounded-0 absolute bg-gray-15 top-[95px] right-0 max-xl:right-auto opacity-90 max-xl:opacity-100 pl-[100px] pt-[100px] pb-[48px] pr-[53px] max-xl:top-0 max-xl:left-0 z-5000 min-h-screen max-xl:px-[20px] max-xl:pb-[200px] max-xl:pt-[60px] max-xl:mt-[55px]">
      <h1
        className="text-[30px] leading-[30px] tracking-[1.5px]
      text-red-primary max-xl:text-[20px] max-xl:leading-[25px] max-xl:tracking-[1px]
      max-xl:text-blue-primary font-bold"
      >
        რეგისტრაცია
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" max-xl:px-[28px] max-xl:pt-[34px] max-xl:pb-[44px] max-xl:rounded-[20px] max-xl:bg-blue-50 max-xl:mt-[28px]"
      >
        <div className="grid grid-cols-3 max-xxl:grid-cols-2 gap-[91px] mt-[54px] max-xl:flex max-xl:flex-col max-xl:gap-[30px]">
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
        <div className="flex max-xl:gap-[8px] gap-[7px] items-center max-xl:mt-[20px] mt-[36px]">
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
            className="w-[16px] max-xl:w-[14px] h-[14px] max-xl:h-[16px] border-[1px] border-gray-300 cursor-pointer"
          />
          <h4 className="max-xl:text-[12px] text-[16px] leading-[40px] max-xl:text-blue-primary text-blue-90 font-bold">
            შეთანხმება მომსახურების შესახებ
          </h4>
        </div>
        <button
          className="text-[14px] leading-[18px] text-[#ffffff] 
      w-[183px] h-[54px] rounded-[50px] bg-red-primary max-xl:mt-[20px] mt-[36px] cursor-pointer font-bold"
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
export default Register;
