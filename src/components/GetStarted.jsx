import PropTypes from "prop-types";
import { motion } from "framer-motion";

const GetStarted = ({ onClick }) => {
  return (
    <motion.button
      className="flex items-center mt-16 px-6 py-2 font-custom2 text-white rounded-lg md:text-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      
    >
      Get Started <img src="/double-down.png" alt="down" />
    </motion.button>
  );
};

GetStarted.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GetStarted;
