import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";

function Home() {
  const navigate = useNavigate();

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
    <div id="scroll-section" className="min-h-screen w-screen bg-[#0a0118]">
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
