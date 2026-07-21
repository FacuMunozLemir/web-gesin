import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./pages/Inicio";
import Soluciones from "./pages/Soluciones";
import Calculadora from "./pages/Calculadora";
import Climatica from "./pages/Climatica";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/accion-climatica" element={<Climatica />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/recursos" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
