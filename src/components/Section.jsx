import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ content, image }) => {
  return (
    <div className="flex justify-center relative z-10"> 
      <motion.div
        className="flex flex-col md:flex-row items-center text-white p-8 rounded-lg shadow-lg my-10 text-center w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}  
        transition={{ duration: 1 }}
      >
        <motion.img
          src={image}
          alt="Our Vision"
          className="w-1/2 md:w-1/3 m-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}  // 
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="w-full md:w-2/3 m-4 ml-12 font-light"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-custom2">
            Our <span className="text-[#EC27D5] font-custom">Vision</span>
          </h2>
          <p className="mt-4 leading-loose md:text-xl font-custom2 text-start">{content}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

Section.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Section;
