import { useState } from "react";
import Register from "./Register";
import Authorization from "./Authorization";

const AuthBtns = () => {
  const [reg, setReg] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <>
      <div
        className="flex justify-center items-center gap-[44px]
       max-lg:gap-[22px] relative
    max-lg:absolute max-lg:top-[85px] max-lg:right-1/2 
    max-lg:transform max-lg:translate-x-1/2 w-full"
      >
        <button
          className="max-lg:text-[13px] max-lg:leading-[18px]  
        w-[183px] h-[54px] max-lg:w-[168px] max-lg:h-[39px] 
        rounded-[50px] opacity-90 bg-red-primary 
        text-[#ffffff] 
              cursor-pointer text-[14px] leading-[18px] font-bold"
          type="button"
          onClick={() => {
            setAuth(false);
            setReg(!reg);
          }}
        >
          რეგისტრაცია
        </button>
        <button
          className="max-lg:text-[13px] max-lg:leading-[18px]  
        w-[183px] h-[54px] max-lg:w-[168px] max-lg:h-[39px] 
        rounded-[50px] opacity-90 bg-primary 
        text-blue-primary border-[2px] border-blue-primary 
              cursor-pointer text-[14px] leading-[18px] font-bold"
          type="button"
          onClick={() => {
            setReg(false);
            setAuth(!auth);
          }}
        >
          ავტორიზაცია
        </button>
        {reg && <Register />}
        {auth && <Authorization />}
      </div>
    </>
  );
};
export default AuthBtns;
