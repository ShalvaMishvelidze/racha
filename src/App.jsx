import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Team from "./pages/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
