import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import NavBar from "./components/navbar";
import Counter from "./counter";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<>Hello world!</>} />
      <Route path="/counter/:startCount" element={<Counter />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>
);
