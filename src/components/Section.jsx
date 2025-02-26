const Section = ({ heading, paragraph, number, children }) => {
  return (
    <section className="mx-25 max-sm:mx-5 mt-[90px] max-sm:mt-[60px]">
      <div className="flex justify-between max-sm:items-center">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[70px] max-sm:text-[25px] max-sm:leading-[25px] max-sm:tracking-[1px] text-blue-primary opacity-90 leading-[87px] tracking-[3.5px] font-bold">
            {heading}
          </h1>
          <p className="max-sm:hidden w-[80%] text-[30px] text-blue-primary opacity-50 leading-[40px]">
            {paragraph}
          </p>
        </div>
        <span
          className="text-[90px] max-sm:text-[40px] leading-[104px] 
        max-sm:leading-[46px] text-blue-20 opacity-30 font-bold"
        >
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};
export default Section;
