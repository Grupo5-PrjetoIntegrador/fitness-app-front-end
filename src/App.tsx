import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/SobreNos";
import ExerciseOptions from "./pages/produto/Produto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[-80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/produto" element={<ExerciseOptions />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;