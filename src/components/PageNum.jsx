const PageNum = ({ number }) => {
  return (
    <button className="cursor-pointer text-[17px] leading-[22px] text-blue-primary hover:text-white flex justify-center items-center size-[46px] rounded-[10px] bg-white hover:bg-blue-primary border border-blue-primary">
      {number}
    </button>
  );
};
export default PageNum;
