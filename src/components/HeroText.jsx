import PropTypes from "prop-types";

const HeroText = ({ heading, paragraph }) => {
  return (
    <>
      <h1 className="max-w-[983px] text-[60px] leading-[38px] text-blue-primary font-bold">
        {heading && heading}
      </h1>
      <p className="max-w-[983px] text-[20px] leading-[25px] text-blue-primary font-bold opacity-80">
        {paragraph && paragraph}
      </p>
    </>
  );
};

HeroText.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

export default HeroText;
