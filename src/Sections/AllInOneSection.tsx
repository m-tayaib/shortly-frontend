import { motion } from "framer-motion";

import { FiThumbsUp, FiMic, FiImage, FiMessageSquare } from "react-icons/fi";

type Card = {
    icon: React.ReactNode;
    status: string;
    title: string;
    description: string;
    gradient: string;
};

const cards: Card[] = [
    {
        icon: <FiThumbsUp className="text-3xl text-gray-600 " />,
        status: "",
        title: "Reddit Story Generator",
        description: "Create viral Reddit-style stories with a single click. Perfect for content inspiration and engagement.",
        gradient: "from-[#eaf2ff] to-white",
    },
    {
        icon: <FiMic className="text-3xl text-gray-600 " />,
        status: "Coming Soon",
        title: "AI Voice Mover",
        description: "Transform your text into realistic AI-generated voices for podcasts, videos, and more.",
        gradient: "from-[#eaf2ff] to-white",
    },
    {
        icon: <FiImage className="text-3xl text-gray-600 " />,
        status: "Coming Soon",
        title: "Image Generation",
        description: "Generate eye-catching images to complement your stories and posts instantly.",
        gradient: "from-[#eaf2ff] to-white",
    },
    {
        icon: <FiMessageSquare className="text-3xl text-gray-600 " />,
        status: "Coming Soon",
        title: "Fake Text Story",
        description: "Craft believable fake text conversations for memes, storytelling, and creative projects.",
        gradient: "from-[#eaf2ff] to-white",
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
};

const AllInOneSection = () => {
    return (
        <section
            className="w-full py-16 px-3 sm:px-6 md:px-12 bg-gradient-to-br from-[#eaf2ff] to-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16"
            id="all-in-one"
        >
            {/* Left Side */}
            <div className="flex-1 max-w-lg flex flex-col items-start gap-6">
                <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 "
                >
                    <span className="text-[#0066FF]">All-in-one</span> content creation suit
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl font-light text-neutral-600 mb-4"
                >
                    Everything you need to create viral-worthy content in one place.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold text-base shadow hover:bg-[#222] transition"
                >
                    Try it now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                        />
                    </svg>
                </motion.button>
            </div>
            {/* Right Side - Cards */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.title}
                        className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 min-h-[180px] border border-[#eaf2ff]`}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={cardVariants}
                        transition={{ delay: i * 0.15, type: "spring" as const, stiffness: 80 }}
                    >
                        <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-2xl">{card.icon}</span>
                            {card.status && (
                                <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gradient-to-r from-[#eaf2ff] to-white text-[#0066FF] font-semibold">
                                    {card.status}
                                </span>
                            )}
                        </div>
                        <h4 className="text-lg font-bold text-[#689ff1] mb-1">{card.title}</h4>
                        <p className="text-sm text-neutral-600 font-light">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AllInOneSection;
