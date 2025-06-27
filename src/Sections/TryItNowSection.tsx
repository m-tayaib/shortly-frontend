import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiZap, FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "Ask what you want",
    answer:
      "You can ask anything related to content creation, video ideas, or how to use our platform. We're here to help you speed up your content process!",
  },
  {
    question: "How do I generate a video?",
    answer:
      "Simply enter your idea or prompt, and our platform will guide you through the steps to generate a video in seconds.",
  },
  {
    question: "Can I customize the video style?",
    answer:
      "Yes! You can choose from different templates, voices, and visual styles to make your video unique and engaging.",
  },
];

const TryItNowSection: React.FC = () => {
  // Fix: faqOpen should be number | null, not boolean
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [input, setInput] = useState("");

  return (
    <section className="w-full py-12 px-3 sm:px-6 md:px-12 bg-white flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3"
      >
        <span className="text-[#0066FF]">Try it</span>{" "}
        <span className="text-black">now</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
        className="text-base sm:text-lg text-center mb-10 font-light text-neutral-600"
      >
        Super easy &amp; speed your content in less than 1 minute
      </motion.p>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.3 }}
        className="w-full max-w-5xl flex flex-col md:flex-row gap-8"
      >
        {/* Ask Box & Form in one container */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-gradient-to-br from-[#eaf2ff] to-white rounded-xl shadow-md p-6 flex flex-col items-start gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-lg sm:text-xl font-bold text-[#0066FF]">01.</span>
            <span className="text-lg sm:text-xl font-semibold text-black border-b-2 border-[#0066FF] pb-1">
              Ask anything you want
            </span>
          </div>
          <p className="text-sm text-neutral-600 font-light mb-2">
            Type your question or idea below and get instant suggestions!
          </p>
          <motion.form
            className="w-full bg-white rounded-xl shadow p-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={e => {
              e.preventDefault();
              // handle submit
            }}
          >
            <label htmlFor="ask-input" className="text-base font-medium text-black mb-1">
              Your question
            </label>
            <input
              id="ask-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question here..."
              className="w-full border border-[#eaf2ff] rounded-md px-3 py-4 text-lg focus:outline-none focus:border-[#0066FF] transition bg-[#f7faff] text-black"
              style={{ minHeight: "56px" }}
            />
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                className="flex items-center gap-2 bg-[#eaf2ff] text-[#0066FF] font-semibold px-4 py-2 rounded-md hover:bg-[#d0e6ff] transition"
              >
                <FiZap className="text-lg" />
                Generate Ideas
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#0066FF] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#0052cc] transition"
              >
                <FiSend className="text-lg" />
                Send
              </button>
            </div>
          </motion.form>
        </motion.div>

        {/* Right: FAQ */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="mb-4"
                onMouseEnter={() => setFaqOpen(idx)}
                onMouseLeave={() => setFaqOpen(null)}
              >
                <button
                  className="flex items-center w-full text-left gap-2 text-black font-semibold text-base sm:text-lg focus:outline-none transition border-b-2 border-[#eaf2ff] pb-2"
                  aria-expanded={faqOpen === idx}
                  aria-controls={`faq-answer-${idx}`}
                  type="button"
                >
                  <span className="text-[#0066FF] font-bold mr-2">{(idx + 1).toString().padStart(2, "0")}.</span>
                  {faq.question}
                  <FiChevronDown
                    className={`ml-auto transition-transform duration-200 ${faqOpen === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  id={`faq-answer-${idx}`}
                  initial={false}
                  animate={faqOpen === idx ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {faqOpen === idx && (
                    <p className="mt-3 text-neutral-600 font-extralight text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TryItNowSection;

