import PropTypes from "prop-types";

const Section = ({ heading, paragraph, number, children }) => {
  return (
    <section className="mx-[100px] max-xl:mx-[25px] mt-[90px] max-xl:mt-[60px]">
      <div className="flex justify-between max-xxl:items-center">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[70px] max-xl:text-[50px] max-md:text-[25px] max-md:leading-[25px] max-md:tracking-[1px] text-blue-primary opacity-90 leading-[87px] tracking-[3.5px] font-bold">
            {heading}
          </h1>
          <p className="max-xxl:hidden w-[80%] text-[30px] text-blue-primary opacity-50 leading-[40px]">
            {paragraph}
          </p>
        </div>
        <span
          className="text-[90px] max-xl:text-[65px] max-md:text-[40px] leading-[104px] 
        max-sm:leading-[46px] text-blue-20 opacity-30 font-bold"
        >
          {number}
        </span>
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
