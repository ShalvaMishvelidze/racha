import About from "./About";
import Hero from "./Hero";
import { HeroNav } from "./HeroNav";
import Hotels from "./Hotels";
import Services from "./Services";

const Home = () => {
  return (
    <main className="bg-primary">
      <Hero />
      <HeroNav />
      <About />
      <Services />
      <Hotels />
    </main>
  );
};
export default Home;
