import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <main className="flex flex-col justify-center items-center w-full relative bg-primary">
        <Header />
        <App />
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>
);
