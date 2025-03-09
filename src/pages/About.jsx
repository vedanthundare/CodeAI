import { motion, useScroll, useSpring } from "framer-motion";
import Title from "../components/Title";
import AnimatedText from "../components/AnimatedText";
import GetStarted from "../components/GetStarted";
import Section from "../components/Section";
import visionImage from "/vision.png";
import missionImage from "/mission.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Particle from "../components/Particle";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const content = [
    "Build a thriving community of AI enthusiasts.",
    "Provide resources and guidance for mastering cutting-edge AI tools and techniques.",
    "Encourage creativity and collaboration through real-world projects.",
    "Empower individuals to make meaningful contributions to AI and machine learning.",
  ];

  return (
    <div id="about" className="relative min-h-screen text-white overflow-hidden">
      <Nav />
      <Particle />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#8375F3]"
        style={{ scaleX }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Title />
        </motion.div>

        <motion.p
          className="mt-16 md:text-2xl font-custom2 lg:px-[25vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to <span><AnimatedText /></span>, where creativity meets technology to
          redefine the future of AI and machine learning...
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <GetStarted
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          />
        </motion.div>
      </div>

      <Section
        className="font-custom2"
        content="To empower aspiring data scientists and machine learning enthusiasts by providing a structured, collaborative, and hands-on learning experience. We aim to foster innovation and prepare the next generation of AI leaders for the evolving landscape of technology."
        image={visionImage}
      />

      <div className="flex justify-center font-custom3 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center text-white p-8 rounded-lg shadow-lg my-10 text-center w-full max-w-6xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full md:w-2/3 m-4 ml-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-custom2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our <span className="text-[#EC27D5] font-custom">Mission</span>
            </motion.h2>
            <motion.ul
              className="mt-4 text-left md:text-xl list-disc list-outside"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, staggerChildren: 0.3 }}
            >
              {content.map((item, index) => (
                <motion.li
                  className="leading-loose font-custom2"
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.img
            src={missionImage}
            alt="Our Mission"
            className="w-1/2 md:w-1/3 m-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;