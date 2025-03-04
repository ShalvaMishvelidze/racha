import ContactContainer from "../components/ContactContainer";
import HeroBanner from "../components/HeroBanner";

const Contact = () => {
  return (
    <section className="bg-primary pb-[142px] max-sm:pb-[100px]">
      <HeroBanner heading={"კონტაკტი"} />
      <ContactContainer />
    </section>
  );
};
export default Contact;
