import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";

function Home() {
  const navigate = useNavigate();

  return (
    <div id="scroll-section" className="min-h-screen w-screen bg-[#090119]">
      <Nav />
      <HeroSection />
      <EventSection />
      <About />
      <CallToAction />
      <Footer navigate={navigate} />
    </div>
  );
}

export default Home;
