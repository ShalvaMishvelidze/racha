const InputDesktop = ({ label, name, type, value, user, setUser }) => {
  return (
    <div className="flex flex-col ">
      <input
        type={type}
        name={name}
        placeholder={label}
        id={name}
        className="outline-none border-b max-lg:border-b-0 py-[24px]
        border-[#000000] h-[12px] max-lg:h-[49px] max-lg:rounded-[50px]
        max-lg:bg-primary max-lg:pl-[22px] max-lg:placeholder-blue-primary 
        placeholder-blue-90 placeholder:font-bold
        max-lg:text-[13px] max-lg:leading-[40px] max-lg:font-bold placeholder:text-[18px] 
        max-lg:placeholder:text-[13px]"
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};
export default InputDesktop;
