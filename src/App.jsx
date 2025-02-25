import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
