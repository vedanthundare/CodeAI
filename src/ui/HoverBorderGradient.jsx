import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../components/cn";

const HoverBorderGradient = ({
  children = "Coming Soon", 
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.2% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Tag
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex rounded-lg border border-white/50 text-white text-2xl md:text-4xl font-bold " +
            "content-center bg-black/30 hover:bg-black/20 transition duration-500 dark:bg-white/20 " +
            "items-center flex-col h-[60vh] md:h-[70vh] w-[80vw] md:w-[60vw] " +
            "justify-center overflow-hidden p-4 md:p-6",
          containerClassName
        )}
        {...props}
      >
        <div className={cn("text-center z-10 bg-transparent", className)} style={{ fontFamily: 'MyCustomFont', color: '#B2ABF7' }}>
          {children}
        </div>
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            filter: "blur(4px)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initial={{ background: movingMap[direction] }}
          animate={{
            background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
          }}
          transition={{ ease: "linear", duration: duration ?? 1 }}
        />
        <div className="bg-[#04021A] absolute inset-[2px] rounded-lg" />
      </Tag>
    </div>
  );
};

export default HoverBorderGradient;
