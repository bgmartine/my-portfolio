import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header.jsx";
import Home from "@/pages/Home.jsx";
import Projects from "@/pages/Projects.jsx";
import About from "@/pages/About.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
