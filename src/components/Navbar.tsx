import React from "react";
import { FiZap } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const menuItems: string[] = [
    "demo",
    "feature",
    "examples",
    "tesetomonial",
    "priceing",
    "faq",
];

const menuItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

const mobileMenuVariants = {
    initial: { opacity: 0, y: -20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.18 } },
};

const buttonTap = { scale: 0.95, boxShadow: "0 2px 8px rgba(0,102,255,0.15)" };
const buttonHover = { scale: 1.04, boxShadow: "0 4px 16px rgba(0,102,255,0.18)" };

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center flex-shrink-0"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <FiZap className="text-2xl mr-2" style={{ color: "#0066FF" }} />
                        <span className="text-2xl font-bold" style={{ color: "#0066FF" }}>
                            <span style={{ color: "#0066FF" }}>s</span>hortly
                        </span>
                    </motion.div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item, idx) => (
                            <motion.a
                                key={item}
                                href={`#${item}`}
                                className="text-base font-medium transition-colors duration-150 relative"
                                style={{ color: "#4B5563" }}
                                variants={menuItemVariants as import("framer-motion").Variants}
                                initial="initial"
                                animate="animate"
                                whileHover={{
                                    color: "#0066FF",
                                    scale: 1.08,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.04 }}
                            >
                                <span className="relative z-10">
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </span>
                                {/* Underline hover effect */}
                                <motion.span
                                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0066FF] rounded"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ originX: 0 }}
                                />
                            </motion.a>
                        ))}
                    </div>
                    {/* Button */}
                    <div className="flex-shrink-0 hidden md:block">
                        <motion.button
                            className="px-5 py-2 rounded-md font-semibold text-black bg-gradient-to-r from-[#0066FF] to-white hover:from-[#0052cc] hover:to-[#c3ccda] transition-colors duration-200 border border-[#0066FF] flex items-center gap-2 focus:outline-none"
                            style={{
                                color: "#fff",
                                background: "linear-gradient(90deg, #0066FF 0%, #fff 100%)",
                            }}
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        >
                            <FiZap className="text-lg" />
                            Try Now
                        </motion.button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Open menu"
                            className="text-2xl text-[#0066FF] focus:outline-none"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.92, rotate: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            className="md:hidden mt-2 flex flex-col space-y-2 bg-white rounded shadow px-4 py-3"
                            variants={mobileMenuVariants as import("framer-motion").Variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {menuItems.map((item, idx) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-base font-medium transition-colors duration-150 relative"
                                    style={{ color: "#4B5563" }}
                                    onClick={() => setMobileOpen(false)}
                                    variants={menuItemVariants as import("framer-motion").Variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    whileHover={{
                                        color: "#0066FF",
                                        scale: 1.08,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.04 }}
                                >
                                    <span className="relative z-10">
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </span>
                                    {/* Underline hover effect */}
                                    <motion.span
                                        className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0066FF] rounded"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ originX: 0 }}
                                    />
                                </motion.a>
                            ))}
                            <motion.button
                                className="mt-2 px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-[#0066FF] to-white border border-[#0066FF] flex items-center gap-2 focus:outline-none"
                                style={{
                                    color: "#fff",
                                    background: "linear-gradient(90deg, #0066FF 0%, #fff 100%)",
                                }}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            >
                                <FiZap className="text-lg" />
                                Try Now
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
