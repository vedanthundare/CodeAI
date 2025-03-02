import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h1
      className="text-center text-2xl sm:text-3xl md:text-5xl text-white font-custom"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      UNLEASHING &nbsp;&nbsp; THE <br /> POWER &nbsp;&nbsp; OF &nbsp;&nbsp;
      INNOVATION
    </motion.h1>
  );
};

export default Title;
