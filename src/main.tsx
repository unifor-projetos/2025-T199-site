import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Counter from "./counter";
import MuseuPage from "./pages/MuseumPage";
import './style.css'; // Ou o caminho correto para o seu arquivo CSS

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<MuseuPage />} /> {}
      <Route path="/counter/:startCount" element={<Counter />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
    
  </BrowserRouter>
);