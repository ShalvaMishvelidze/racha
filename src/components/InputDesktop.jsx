const InputDesktop = ({ label, name, type, value, user, setUser }) => {
  return (
    <div className="flex flex-col ">
      <label
        className="text-[18px] leading-[40px] 
      text-blue-90 opacity-90 font-bold"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="outline-none border-b border-[#000000] h-[12px]"
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};
export default InputDesktop;
