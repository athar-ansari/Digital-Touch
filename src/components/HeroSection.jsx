import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const slides = [
  {
    id: 1,
    title: "Revolutionary Fintech solutions for growth and acceleration",
    description:
      "At Digital Touch Services Limited, we simplify digital payments to make them more convenient, reliable, and accessible for all, ensuring that location is not a limiting factor.",
    image: "image1.png",
  },
  {
    id: 2,
    title: "Empowering Businesses with Secure Transactions",
    description:
      "Our platform provides robust security and seamless integration, helping businesses grow with confidence in the digital era.",
    image: "image2.png",
  },
  {
    id: 3,
    title: "Innovative Solutions for a Cashless Future",
    description:
      "Join us in leading the transformation towards a cashless society, where every transaction is effortless and secure.",
    image: "image3.png",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (i) => setCurrentSlide(i);
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative text-white overflow-hidden flex items-center bg-[url('/bannerBg.png')] bg-cover bg-no-repeat bg-right  h-[600px] z-90">
      {/* Animated Image Side */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-1/3 items-center justify-center z-0 h-[400px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[currentSlide].image}
            src={slides[currentSlide].image}
            alt="Fintech illustration"
            className="object-cover h-[380px] w-[380px]   mr-36"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute    "></div>
      </div>

      {/* Animated Content Side */}
      <div className="container mx-auto px-6 -mt-36 py-8 md:py-12 relative z-10 flex flex-col md:flex-row items-center ">
        <div className="max-w-xl w-full md:w-2/3">

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentSlide].title}
              className="ha-f text-4xl md:text-5xl font-extrabold mb-6 leading-tight  "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
          <motion.p
            className="text-[16px] mb-8 pp-f text-[#fff]  leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {slides[currentSlide].description}
          </motion.p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-[9rem] left-1/2 transform -translate-x-1/2 text-center z-[100]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a
          href="#contact"
          className="flex flex-col items-center"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Scroll Down
          </span>
          <FiArrowDown className="text-cyan-400" size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
