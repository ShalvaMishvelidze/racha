const Section = ({ heading, paragraph, number, children }) => {
  return (
    <section className="mx-25 mt-[90px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-[70px] text-[#25304ae1] leading-[87px] tracking-[3.5px] font-bold">
            {heading}
          </h1>
          <p className="text-[30px] text-[#25304a7e] leading-[40px]">
            {paragraph}
          </p>
        </div>
        <span className="text-[90px] leading-[104px] text-[#5f729b53]">
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};
export default Section;
