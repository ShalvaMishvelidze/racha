import PropTypes from "prop-types";

const ServicesSection = ({ heading, paragraph, number, children }) => {
  return (
    <section className="mx-[100px] max-xl:mx-[20px] mt-[90px] max-xl:mt-[30px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[50px] max-xl:text-[32px] max-sm:text-[16px] max-sm:leading-[20px] max-xl:leading-[40px] max-sm:tracking-[0.8px] text-blue-primary opacity-90 leading-[62px] tracking-[2.5px] font-bold">
            {heading}
          </h1>
          <p className="w-[80%] text-[30px] max-xl:text-[20px] max-xl:leading-[28px] max-sm:text-[12px] max-sm:leading-[16px] text-blue-primary opacity-50 max-sm:opacity-60 leading-[40px] ">
            {paragraph}
          </p>
        </div>
        <span className="text-[90px] max-xl:text-[60px] max-sm:text-[40px] max-xl:leading-[84px] leading-[104px] max-sm:leading-[46px] text-blue-20 opacity-30 font-bold">
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};

ServicesSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ServicesSection;
