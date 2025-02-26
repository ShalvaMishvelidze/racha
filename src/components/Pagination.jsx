import PageNum from "./PageNum";

const Pagination = () => {
  return (
    <div
      className="flex items-center gap-[18px] max-sm:gap-[13px] mt-[60px] 
     max-sm:mt-[16px] h-[46px] max-sm:h-[32px]"
    >
      <PageNum number={1} />
      <PageNum number={2} />
      <PageNum number={3} />
      <PageNum number={4} />
      <div className="mx-[14px] max-sm:mx-[4px] flex items-center justify-center">
        <span className="text-gray-primary text-[16px] leading-[21]">...</span>
      </div>
      <PageNum number={10} />
    </div>
  );
};
export default Pagination;
