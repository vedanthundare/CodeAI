import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import About from "./pages/About";  
import Teams from "./pages/Teams"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,  
      smooth: true,
      lerp: 0.05,  
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <Router>
   <div id="scroll-section" className="min-h-screen bg-[#0a0118]">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/teams" element={<Teams />} />
       <Route path="*" element={<Footer />} />
     </Routes>
   </div>
</Router>
  );
}

export default App;
