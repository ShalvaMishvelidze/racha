import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Team from "./pages/Team";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
