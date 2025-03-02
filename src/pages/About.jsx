import { motion, useScroll, useSpring } from "framer-motion";
import Title from "../components/Title";
import AnimatedText from "../components/AnimatedText";
import GetStarted from "../components/GetStarted";
import Section from "../components/Section";
import visionImage from "/vision.png";
import missionImage from "/mission.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

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
    <div id="about" className="min-h-screen text-white  ">
      <Nav />
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#8375F3]"
        style={{ scaleX }}
      />

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Title />
        <p className="mt-16 md:text-2xl font-custom3 lg:px-[25vw]">
          Welcome to <AnimatedText />, where creativity meets technology to
          redefine the future of AI and machine learning...
        </p>
        <GetStarted
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
        />
      </div>

      <Section
        className="font-custom3"
        content="To empower aspiring data scientists and machine learning enthusiasts by providing a structured, collaborative, and hands-on learning experience. We aim to foster innovation and prepare the next generation of AI leaders for the evolving landscape of technology."
        image={visionImage}
      />
      <div className="flex justify-center font-custom3">
        <motion.div
          className="flex flex-col md:flex-row items-center text-white p-8 rounded-lg shadow-lg my-10 text-center w-full max-w-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={missionImage}
            alt="Our Mission"
            className="w-1/2 md:w-1/3 m-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className="w-full md:w-2/3 m-4 ml-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-[#EC27D5] font-custom">Mission</span>
            </h2>
            {Array.isArray(content) ? (
              <ul className="mt-4 text-left md:text-xl list-disc list-outside">
                {content.map((item, index) => (
                  <li className="leading-loose" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 font-custom">{content}</p>
            )}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
