import PropTypes from "prop-types";

const InputDesktop = ({ label, name, type, value, user, setUser }) => {
  return (
    <div className="flex flex-col ">
      <input
        type={type}
        name={name}
        placeholder={label}
        id={name}
        className="outline-none border-b max-xl:border-b-0 py-[24px]
        border-[#000000] h-[12px] max-xl:h-[49px] max-xl:rounded-[50px]
        max-xl:bg-primary max-xl:pl-[22px] max-xl:placeholder-blue-primary 
        placeholder-blue-90 placeholder:font-bold
        max-xl:text-[13px] max-xl:leading-[40px] max-xl:font-bold placeholder:text-[18px] 
        max-xl:placeholder:text-[13px]"
        value={value}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
      />
    </div>
  );
};

InputDesktop.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default InputDesktop;
