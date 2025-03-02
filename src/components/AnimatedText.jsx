import { motion } from "framer-motion";

const AnimatedText = () => {
    return (
        <motion.span
            className="text-[#EC27D5] font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{fontFamily: "'helvetica-light'"}}
        >
            CodeAI
        </motion.span>
    );
};

export default AnimatedText;
