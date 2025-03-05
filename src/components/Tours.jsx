import HotelsContainer from "./HotelsContainer";
import Pagination from "./Pagination";
import ServicesSection from "./ServicesSection";
import PropTypes from "prop-types";

const Tours = ({ number }) => {
  return (
    <ServicesSection
      heading={"ტურები რაჭაში"}
      paragraph={
        "მიიღე ინფორმაცია რაჭაში არსებული ღირსშესანიშნაობებისა და ტურისტული ობიექტების შესახებ, ეწვიე მათ ჩვენთან ერთად."
      }
      number={number}
    >
      <HotelsContainer />
      <Pagination />
    </ServicesSection>
  );
};

Tours.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Tours;
