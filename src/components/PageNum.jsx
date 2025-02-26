const PageNum = ({ number }) => {
  return (
    <button
      className="cursor-pointer text-[17px] max-sm:text-[11px] 
      leading-[22px] max-sm:leading-[15px]  
     text-blue-primary hover:text-white flex justify-center 
     items-center size-[46px] max-sm:size-[32px] rounded-[10px] 
     bg-white hover:bg-blue-primary border border-blue-primary"
    >
      {number}
    </button>
  );
};
export default PageNum;
