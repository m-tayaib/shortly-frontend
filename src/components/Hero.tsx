import React from "react";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="w-full min-h-[88vh] flex flex-col items-center justify-center px-3 sm:px-6 md:px-8 py-8 sm:py-12"
      style={{
        background: "linear-gradient(135deg, #eaf2ff 0%, #ffffff 100%)",
      }}
    >
      {/* Top Centered Round Div */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: -40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
        className="flex items-center justify-center w-full"
      >
        <div
          className="flex items-center justify-center border-[0.5px] border-[#0066FF] mb-2 px-3 py-1 rounded-md bg-white"
          style={{
            borderColor: "#0066FF",
          }}
        >
          <span
            className="text-center font-thin text-sm xs:text-base md:text-lg text-[#0066FF] leading-tight"
          >
            N1 in Reddit story videos generation
          </span>
        </div>
      </motion.div>

      {/* Main Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.25 }}
        className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-3 sm:mb-4 leading-tight sm:leading-tight"
        style={{ color: "#111" }}
      >
        Create a viral video{" "} <br />
        <span className="block sm:inline" style={{ color: "#0066FF" }}>
          in seconds
        </span>{" "}
        not hours
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.4 }}
        className="text-sm xs:text-base md:text-lg text-center mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl font-thin mx-auto"
      >
        Ideate &amp; package your videos faster &amp; cheaper.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.55 }}
        className="flex items-center gap-2 group rounded-md hover:bg-[#0066ffab] hover:text-white py-2 px-4 xs:px-5 border-[0.5px] border-[#0066FF] font-bold text-base xs:text-lg shadow-md transition-all duration-200"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.96 }}
      >
        <FiZap className="text-xl xs:text-2xl group-hover:text-white" />
        <span>Get Started</span>
      </motion.button>
    </section>
  );
};

export default Hero;
