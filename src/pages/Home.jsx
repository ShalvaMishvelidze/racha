import About from "../components/About";
import Hero from "../components/Hero";
import { HeroNav } from "../components/HeroNav";
import Hotels from "../components/Hotels";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="bg-primary pb-[220px]">
      <Hero
        heading={"რაჭა ჩვენი სიყვარულია"}
        paragraph={
          "ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და ღირსშესანიშნაობებს."
        }
        slider
      />
      <HeroNav />
      <About />
      <Services />
      <Hotels />
    </main>
  );
};
export default Home;
