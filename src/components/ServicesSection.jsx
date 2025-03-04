const ServicesSection = ({ heading, paragraph, number, children }) => {
  return (
    // className="mx-[100px] max-xl:mx-[25px] mt-[90px] max-xl:mt-[60px]"
    <section className="mx-25 max-sm:mx-5 mt-[90px] max-sm:mt-[30px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[50px] max-sm:text-[16px] max-sm:leading-[20px] max-sm:tracking-[0.8px] text-blue-primary opacity-90 leading-[62px] tracking-[2.5px] font-bold">
            {heading}
          </h1>
          <p className="w-[80%] text-[30px] max-sm:text-[12px] max-sm:leading-[16px] text-blue-primary opacity-50 max-sm:opacity-60 leading-[40px] ">
            {paragraph}
          </p>
        </div>
        <span className="text-[90px] max-sm:text-[40px] leading-[104px] max-sm:leading-[46px] text-blue-20 opacity-30 font-bold">
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};
export default ServicesSection;
