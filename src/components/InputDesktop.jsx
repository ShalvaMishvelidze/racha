const InputDesktop = ({ label, name, type, value, user, setUser }) => {
  return (
    <div className="flex flex-col ">
      <label
        className="text-[18px] leading-[40px] 
      text-blue-90 opacity-90 font-bold max-sm:hidden"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={label}
        id={name}
        className="outline-none border-b max-sm:border-b-0 
        border-[#000000] h-[12px] max-sm:h-[49px] max-sm:rounded-[50px]
        max-sm:bg-primary max-sm:pl-[22px] max-sm:placeholder-blue-primary 
        max-sm:text-[13px] max-sm:leading-[40px] max-sm:font-bold"
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};
export default InputDesktop;
