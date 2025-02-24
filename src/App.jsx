import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { HeroNav } from "./components/HeroNav";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeroNav />
      <About />
      <Services />
    </>
  );
}

export default App;
