import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { HeroNav } from "./components/HeroNav";
import Hotels from "./components/Hotels";
import Services from "./components/Services";

function App() {
  return (
    <main className="bg-primary">
      <Header />
      <Hero />
      <HeroNav />
      <About />
      <Services />
      <Hotels />
      <Footer />
    </main>
  );
}

export default App;
