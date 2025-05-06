import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from "./components/navbar";
import Home from "./screens/home";
import Footer from "./components/footer";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
