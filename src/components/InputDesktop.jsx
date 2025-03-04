const InputDesktop = ({ label, name, type, value, user, setUser }) => {
  return (
    <div className="flex flex-col ">
      <input
        type={type}
        name={name}
        placeholder={label}
        id={name}
        className="outline-none border-b max-sm:border-b-0 py-[24px]
        border-[#000000] h-[12px] max-sm:h-[49px] max-sm:rounded-[50px]
        max-sm:bg-primary max-sm:pl-[22px] max-sm:placeholder-blue-primary 
        placeholder-blue-90 placeholder:font-bold
        max-sm:text-[13px] max-sm:leading-[40px] max-sm:font-bold placeholder:text-[18px] 
        max-sm:placeholder:text-[13px]"
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};
export default InputDesktop;
