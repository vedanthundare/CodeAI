import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Question from "/Frame (9).png";
import Shine from "/Frame (10).png";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#090119] text-center flex flex-col  justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center cursor-default">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white mb-8 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Ready to Innovate
          <img src={Question} className="h-8 w-4" alt="" />
        </motion.h2>
        <motion.button
          className="relative text-white font-custom border border-[#EC27D5] px-3 lg:w-2/3 py-2  rounded-full hover:bg-[#EC27D5] transition text-xs flex justify-center"
          whileHover={{ scale: 1.05, backgroundColor: "#EC27D5" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={Shine}
            className="h-5 w-4 absolute lg:left-[-1vw] lg:top-[-1vw] left-[-3vw] top-[-3vw]"
            alt=""
          />
          <span>APPLY NOW</span>
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;
