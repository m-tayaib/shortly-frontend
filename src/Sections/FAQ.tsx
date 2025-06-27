import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Fastly and how does it help creators?",
    answer:
      "Fastly is an AI-powered video creation platform that helps you turn your ideas into viral content quickly and easily, saving you hours of manual editing.",
  },
  {
    question: "Can I customize the style and format of my videos?",
    answer:
      "Absolutely! Fastly offers a variety of templates, voices, and visual styles so you can make each video unique to your brand or audience.",
  },
  {
    question: "How fast can I generate a video with Fastly?",
    answer:
      "You can create a fully edited video in less than a minute. Just enter your idea, select your preferences, and let Fastly do the rest.",
  },
  {
    question: "Is there a free trial or demo available?",
    answer:
      "Yes, you can try Fastly for free and explore all the core features before deciding on a plan.",
  },
  {
    question: "What platforms can I share my videos to?",
    answer:
      "Videos created with Fastly are optimized for all major social platforms including TikTok, Instagram, YouTube, and more.",
  },
];

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-3 sm:px-6 md:px-12 flex flex-col items-center bg-white">
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
        FAQ asked <span className="  text-[#6097ea]">  questions </span> 
      </h3>
      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl font-light text-center mb-8 max-w-2xl mx-auto">
        everuthin you need to know about the fastly and our video  creation platfrom .
      </p>
      {/* FAQ List */}
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={false}
              animate={isOpen ? { background: "linear-gradient(90deg, #e0ecff 0%, #f3f8ff 100%)" } : { background: "#f8fafc" }}
              className={`rounded-xl shadow transition-colors duration-300 cursor-pointer`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div
                className={`px-6 py-4 flex items-center justify-between select-none`}
              >
                <span className="font-bold text-black text-base sm:text-lg">
                  {item.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  className="ml-4 text-black font-bold"
                >
                  <FiChevronRight />
                </motion.span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-black text-sm sm:text-base font-normal">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
