import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="max-w-[1400px] w-full m-auto py-16 px-4 relative">
      <div className="w-full bg-fuchsia-950 flex justify-center items-center">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-4/5 h-auto object-contain"
        />
      </div>

      <div
        className="absolute top-1/2 left-5 text-2xl text-white cursor-pointer"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        className="absolute top-1/2 right-5 text-2xl text-white cursor-pointer"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default Carousel;
