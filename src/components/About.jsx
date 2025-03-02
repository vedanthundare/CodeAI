import React from "react";
import { motion } from "framer-motion";
import Spark from "/Frame (4).png";
import Down from "/Frame (5).png";
import Round from "/Frame (6).png";
import Share from "/Frame (7).png";
import Flag from "/Frame (8).png";
import bgImage from "/Desktop - 10.png";
import logo from "/logo (2).png";

const About = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="mt-0 py-20 bg-[#090119]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-default">
        <motion.h2
          className="lg:text-3xl text-xl font-light font-custom2 text-white mb-[10vw] lg:mb-[3vw] text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What is <br />
          <p className="text-white font-custom flex justify-center text-[8vw] lg:text-[3vw] pt-6">
            <img src={Spark} className="h-5 w-5 lg:pb-1" alt="" />
            CODEAI
            <img
              src={Down}
              className="h-20 w-7 ml-2 lg:h-20 lg:w-24 lg:ml-2"
              alt=""
            />
          </p>
        </motion.h2>

        <motion.div
          id="logo"
          className="w-full flex justify-center items-center"
          
        >
          <img
            src={logo}
            className="absolute lg:h-[50vw] lg:w-[80vw] h-[100vw] w-screen"
            alt=""
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-gray-300 leading-relaxed mb-8 text-center lg:text-start lg:mx-10 text-[1rem] lg:text-[1.2rem] font-custom2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            CodeAI is a dynamic student-driven committee committed to empowering
            individuals with a passion for technology, artificial intelligence,
            and machine learning. As a hub for innovation and creativity, we aim
            to bridge the gap between theoretical learning and real-world
            applications. Through workshops, hackathons, and collaborative
            projects, CodeAI provides a vibrant platform for aspiring tech
            enthusiasts to explore, learn, and grow together.
          </motion.p>

          <motion.h3
            className="text-2xl flex justify-center lg:justify-start font-semibold text-white mb-4 text-center lg:text-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={Round}
              className="h-5 w-4 absolute lg:left-6 left-12 font-custom2"
              alt=""
            />
            Our <span className="text-[#7F0D96] font-custom">VISION</span>
            <img src={Share} className="h-8 w-10 lg:ml-5" alt="" />
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed mb-8 text-center lg:text-start lg:mx-10 text-[1rem] lg:text-[1.2rem] font-custom2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            At CodeAI, we envision a future where innovation thrives, and
            technology becomes a force for solving real-world problems. Our goal
            is to empower aspiring data scientists and machine learning
            enthusiasts by fostering a structured, hands-on, and collaborative
            learning experience. We aim to prepare individuals for the
            ever-evolving landscape of artificial intelligence, equipping them
            with the skills and mindset to lead in this transformative era.
          </motion.p>

          <motion.h3
            className="text-2xl flex justify-center lg:justify-start font-semibold text-white mb-4 text-center lg:text-start font-custom2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={Round}
              className="h-5 w-4 absolute lg:left-6 left-9"
              alt=""
            />
            Our <span className="text-[#7F0D96] font-custom">MISSION</span>
            <img src={Flag} className="h-8 w-10 lg:ml-5" alt="" />
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed text-center lg:text-start lg:mx-10 text-[1rem] lg:text-[1.2rem] font-custom2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our mission is to create a nurturing environment where creativity
            and learning go hand in hand. We strive to provide opportunities for
            members to build expertise in data science and AI through inspiring
            events, mentorship, and practical exposure. By encouraging a culture
            of collaboration and continuous growth, CodeAI seeks to inspire
            individuals to push boundaries and drive impactful change in the
            tech industry.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
