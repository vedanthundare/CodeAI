import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";  
import Teams from "./pages/Teams"
import Footer from "./components/Footer"

function App() {
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
