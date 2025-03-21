import React from "react";
import TeamSection from "../components/TeamSection";
import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Particle from "../components/Particle";
import crown from "/crown.png";
import lines from "/lines.png";
import excla from "/excla.png";

const App = () => {
  const coreMembers = [
    {
      img: "/core ui/san bw.png",
      hoverImg: "/core ui/san c.png",
      alt: "Core team member 1",
      position: "Community Coordinator",
      name: "Sanket Dangle",
    },
    {
      img: "/core ui/shub bw.png",
      hoverImg: "/core ui/shub c.png",
      alt: "Core team member 2",
      position: "Finance Coordinator",
      name: "Shubham Shah",
    },
    {
      img: "/core ui/za bw.png",
      hoverImg: "/core ui/za c.png",
      alt: "Core team member 3",
      position: "Vice Chairperson",
      name: "Zainuddin Fatakdawala",
    },
    {
      img: "/core ui/as bw.png",
      hoverImg: "/core ui/as c.png",
      alt: "Core team member 4",
      position: "Chairperson",
      name: "Asmit Dash",
    },
    {
      img: "/core ui/vid bw.png",
      hoverImg: "/core ui/vid c.png",
      alt: "Core team member 5",
      position: "Digital Media Coordinator",
      name: "Vidhi Bhanushali",
    },
    {
      img: "/core ui/titi bw.png",
      hoverImg: "/core ui/titi c.png",
      alt: "Core team member 6",
      position: "Events Coordinator",
      name: "Titiksha Bhavsar",
    },
    {
      img: "/core ui/ved bw.png",
      hoverImg: "/core ui/ved c.png",
      alt: "Core team member 7",
      position: "Technical Coordinator",
      name: "Vedant Hundare",
    },
  ];

  const subcoreMembers = [
    {
      img: "/subcore ui/pooja bw.png",
      hoverImg: "/subcore ui/pooja c.png",
      alt: "Subcore team member 1",
      position: "Marketing Admin",
      name: "Pooja Shah",
    },
    {
      img: "/subcore ui/aishwarya bw.png",
      hoverImg: "/subcore ui/aishwarya c.png",
      alt: "Subcore team member 2",
      position: "Publicity Admin",
      name: "Asihwarya Kewale",
    },
    {
      img: "/subcore ui/riddhesh bw.png",
      hoverImg: "/subcore ui/riddhesh c.png",
      alt: "Subcore team member 3",
      position: "Digital Media Admin",
      name: "Riddhesh C",
    },
    {
      img: "/subcore ui/avani bw.png",
      hoverImg: "/subcore ui/avani c.png",
      alt: "Subcore team member 4",
      position: "Social Media Admin",
      name: "Avani Mahadik",
    },
    {
      img: "/subcore ui/aryan bw.png",
      hoverImg: "/subcore ui/aryan c.png",
      alt: "Subcore team member 5",
      position: "Event Admin",
      name: "Aryan Mandke",
    },
    {
      img: "/subcore ui/vivek bw.png",
      hoverImg: "/subcore ui/vivekc.png",
      alt: "Subcore team member 6",
      position: "Technical Admin",
      name: "Vivek Masuna",
    },
  ];

  const slides = [
    { url: "/team/1.png" },
    { url: "/team/2.png" },
    { url: "/team/3.png" },
    { url: "/team/4.png" },
    { url: "/team/5.png" },
  ];

  return (
    <div id="team" className="bg-[#090119] text-white font-custom relative">
      <Particle />
      <Nav />

      {/* Heading Section */}
      <div className="text-center h-[80vh] flex flex-col justify-center relative z-10">
        <span className=" absolute ml-[14vw] mb-[19vh] lg:ml-[34vw] lg:mb-[16vh]">
          <img
            src={crown}
            alt="crown"
            className="h-[5vh] lg:h-[6vh] md:h-[4vh]"
          />
        </span>
        <h1 className="text-4xl font-bold mt-20">BRAINS BEHIND</h1>
        <h1 className="text-4xl font-bold mt-4">THE CODE</h1>
        <img
          src={lines}
          alt="lines"
          className="absolute inline-block h-[4vh] lg:h-[5vh] lg:w-[6vh] right-[1vw] lg:right-[33vw] bottom-[36vh] lg:top-[31vh]"
        />
        <img
          src={excla}
          alt="exclamation mark"
          className="absolute h-[6vh] lg:h-[7vh] right-[10vw] lg:right-[40vw] bottom-[22vh] lg:bottom-[22vh]"
        />
        <p className="text-xl font-custom2 mt-16">
          Be greater, be greater together
        </p>
      </div>

      <main className="text-center relative z-10">
        {/* Core Team Section */}
        <div className="mt-24">
          <h1 id="core" className="text-3xl font-bold">
            Core <span className="text-fuchsia-400">Minds</span>
          </h1>
          <TeamSection members={coreMembers} />
        </div>

        {/* Subcore Team Section */}
        <div className="mt-24">
          <h1 id="subcore" className="text-3xl font-bold">
            SUBCORE <span className="text-fuchsia-400">HEROES</span>
          </h1>
          <TeamSection members={subcoreMembers} />
        </div>

        {/* Carousel Section */}
        <div className="mt-24">
          <h1 id="members" className="text-3xl font-bold">
            Team <span className="text-fuchsia-400">Members</span>
          </h1>
          <Carousel slides={slides} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
