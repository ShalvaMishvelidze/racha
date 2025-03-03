import { useEffect, useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import { HeroNav } from "../components/HeroNav";
import Hotels from "../components/Hotels";
import Services from "../components/Services";
import Section from "../components/Section";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-w-[1920px] w-full bg-primary pb-[220px] max-md:pb-[67px] ">
      <Hero
        heading={"რაჭა ჩვენი სიყვარულია"}
        paragraph={
          "ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და ღირსშესანიშნაობებს."
        }
        slider
      />
      {width > 414 && <HeroNav />}
      {width > 414 ? (
        <About number={"01"} />
      ) : (
        <Section heading={"სერვისები"} number={"01"}>
          <HeroNav />
        </Section>
      )}
      {width > 414 ? <Services number={"02"} /> : <About number={"02"} />}
      <Hotels number={"03"} />
    </section>
  );
};
export default Home;
