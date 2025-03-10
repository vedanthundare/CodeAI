import React from "react";
import { motion } from "framer-motion";
import hastag from "/Frame.png";
import arrow1 from "/Frame (1).png";
import teamworkIcon from "/1.png";
import webdevIcon from "/2.png";
import arrow2 from "/Frame (2).png";

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
      className="relative text-center flex mt-[0vh] lg:mt-[0vh] flex-col items-center justify-center h-screen text-white lg:mr-20"
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-20"
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
          <motion.span
            className="text-purple-400 absolute ml-[20%] mb-[45%] lg:ml-[10vw] lg:mb-[35vh]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={hastag} alt="Hashtag" className="h-[5vh] lg:h-[8vh] md:h-[6vh]" />
          </motion.span>

          <div className="font-custom flex flex-col font-thin tracking-wider gap-[3vh] lg:gap-[5vh] ml-[15vw] mb-[10vh] lg:ml-[9vw] lg:mt-[2.5vh] text-[8vw] lg:text-[3vw]">
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              Code
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
              Smarter
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              Futures
            </motion.h1>
          </div>

          <motion.img
            src={arrow1}
            alt="Arrow 1"
            className="bottom-[80%] lg:bottom-[60%] absolute inline-block w-[10vw] h-[10vh] lg:w-[5vw] lg:h-[17vh] right-[15vw] lg:right-[30vw]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.img
          src={arrow2}
          alt="Arrow 2"
          className="top-[80%] lg:top-[90%] left-[5%] lg:left-[28vw] absolute w-[20vw] h-[8vh] lg:w-[15vw] lg:h-[10vh]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        className="absolute bottom-[70vh] left-[20vw] lg:bottom-[48vh] lg:left-[28vw] z-[0]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white/20 p-5 backdrop-blur-md rounded-[2vw] lg:p-[1vw] w-[24vw] h-[20vh] lg:w-[10vw] lg:h-[25vh] flex flex-col items-center justify-center text-center rotate-[-20deg]">
          <img src={teamworkIcon} alt="Teamwork" className="w-[10vw] h-[8vh] lg:w-[5vw] lg:h-[10vh] rotate-[15deg] mb-5 lg:mb-10" />
          <p className="text-[0.8rem] lg:text-[1.2rem] font-custom2 text-white absolute top-[13vh] lg:top-[15vh] cursor-default">
            #Teamwork
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[15vh] right-[20vw] lg:bottom-[18vh] lg:right-[20vw] z-[20]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white/20 backdrop-blur-md rounded-[2vw] p-[1vw] w-[24vw] h-[20vh] lg:w-[10vw] lg:h-[25vh] flex flex-col items-center justify-center text-center rotate-[20deg]">
          <img src={webdevIcon} alt="Web Development" className="w-[10vw] h-[8vh] lg:w-[5vw] lg:h-[10vh] rotate-[-20deg] mb-5 lg:mb-10" />
          <p className="text-[0.8rem] lg:text-[1.2rem] font-custom2 text-white absolute top-[12vh] lg:top-[15vh] cursor-default">
            #Web <br /> Development
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
