import { motion } from "framer-motion";

const AnimatedText = () => {
    return (
        <motion.span
            className="text-[#EC27D5] font-bold font-custom2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            
        >
            CodeAI
        </motion.span>
    );
};

export default AnimatedText;
