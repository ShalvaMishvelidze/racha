import ContactContainer from "../components/ContactContainer";
import HeroBanner from "../components/HeroBanner";

const Contact = () => {
  return (
    <main className="bg-primary pb-[142px] max-sm:pb-[100px]">
      <HeroBanner heading={"კონტაკტი"} />
      <ContactContainer />
    </main>
  );
};
export default Contact;
