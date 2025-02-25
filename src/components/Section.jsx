const Section = ({ heading, paragraph, number, children }) => {
  return (
    <section className="mx-25 mt-[90px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[70px] text-blue-primary opacity-90 leading-[87px] tracking-[3.5px] font-bold">
            {heading}
          </h1>
          <p className="w-[80%] text-[30px] text-blue-primary opacity-50 leading-[40px]">
            {paragraph}
          </p>
        </div>
        <span className="text-[90px] leading-[104px] text-blue-20 opacity-30 font-bold">
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};
export default Section;
