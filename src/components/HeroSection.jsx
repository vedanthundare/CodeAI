import React from "react";
import { motion } from "framer-motion";
import hastag from "/Frame.png";
import arrow1 from "/Frame (1).png";
import teamworkIcon from "/1.png";
import webdevIcon from "/2.png";
import arrow2 from "/Frame (2).png";
import bgImage from "/Desktop - 10.png";

const sparkleAnimation = {
  initial: { scale: 0 },
  animate: { scale: [0, 1, 1, 0], opacity: [0, 0.2, 0.2, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" relative text-center flex mt-[0vh] lg:mt-[0vh] flex-col items-center justify-center h-screen bg-[#090119] text-white lg:mr-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-20 "
          {...sparkleAnimation}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "2px",
            height: "2px",
          }}
        />
      ))}

      <div className="md:text-[5vw] lg:mt-[45vh] flex w-screen justify-center items-center bottom-[0vh] lg:bottom-[25vh] uppercase relative z-[20] cursor-default">
        <div className="flex justify-start items-center">
          <span className="text-purple-400 absolute ml-[15vw] mb-[10vh]     lg:ml-[10vw] lg:mb-[25vh]">
            <img
              src={hastag}
              alt=""
              className="h-[5vh] lg:h-[8vh] md:h-[6vh] "
            />
          </span>
          <div className="font-custom flex flex-col gap-[3vh] lg:gap-[5vh] ml-[15vw] mt-[8vh] lg:ml-[9vw] lg:mt-[2.5vh] text-[8vw] lg:text-[3vw]">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-custom"
            >
              Code
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Smarter
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Futures
            </motion.h1>
          </div>
          <img
            src={arrow1}
            alt="Code image"
            className="bottom-[18vh] lg:bottom-[25vh] absolute inline-block w-[10vw] h-[10vh] lg:w-[8vw] lg:h-[20vh] right-[15vw] lg:right-[-4vw]"
          />
        </div>

        <div className="mt-[1vh] ml-[15vw] lg:mt-[1vh] lg:ml-[0vw]">
          <img
            src={arrow2}
            alt="arrow2"
            className="top-[35vh] lg:top-[40vh] left-[10vw] lg:left-[0vw] absolute  w-[20vw] h-[8vh] lg:w-[15vw] lg:h-[10vh]"
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-[60vh] left-[20vw] lg:bottom-[48vh] lg:left-[28vw] z-[0]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white/20 p-5 backdrop-blur-md rounded-[2vw] lg:p-[1vw] w-[24vw] h-[20vh] lg:w-[10vw] lg:h-[25vh] flex flex-col items-center justify-center text-center rotate-[-20deg]">
          <div className="w-[10vw] h-[10vh] lg:w-[10vw] lg:h-[10vh] rounded-full flex items-center justify-center  absolute top-[1vh] lg:top-[2vh]">
            <img
              src={teamworkIcon}
              alt="Teamwork"
              className="w-[10vw] h-[8vh] lg:w-[5vw] lg:h-[10vh] rotate-[15deg]"
            />
          </div>
          <p className="text-[0.8rem] lg:text-[1.2rem] font-normal text-white absolute top-[10vh] lg:top-[15vh] cursor-default">
            #Teamwork
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[5vh] right-[20vw] lg:bottom-[18vh] lg:right-[20vw] z-[20]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white/20 backdrop-blur-md rounded-[2vw] p-[1vw] w-[24vw] h-[20vh] lg:w-[10vw] lg:h-[25vh] flex flex-col items-center justify-center text-center rotate-[20deg]">
          <div className="w-[10vw] h-[10vh] lg:w-[10vw] lg:h-[10vh] rounded-full flex items-center justify-center  absolute top-[2vh]">
            <img
              src={webdevIcon}
              alt="Web Development"
              className="w-[10vw] h-[8vh] lg:w-[5vw] lg:h-[10vh] rotate-[-20deg]"
            />
          </div>
          <p className="text-[0.8rem] lg:text-[1.2rem] font-normal text-white absolute top-[10vh] lg:top-[15vh] cursor-default">
            #Web <br />
            Development
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
