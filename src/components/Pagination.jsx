import PageNum from "./PageNum";

const Pagination = () => {
  return (
    <div className="flex items-center gap-[18px] mt-[60px] h-[46px] pb-[220px]">
      <PageNum number={1} />
      <PageNum number={2} />
      <PageNum number={3} />
      <PageNum number={4} />
      <div className="mx-[14px] flex items-center justify-center">
        <span className="text-gray-primary text-[16px] leading-[21]">...</span>
      </div>
      <PageNum number={10} />
    </div>
  );
};
export default Pagination;
