import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
    {
        title: 'Standard',
        price: 9,
        features: [
            'Create 50 videos per month',
            'Basic analytics',
            'Standard support',
        ],
        button: false,
        popular: false,
    },
    {
        title: 'Standard Plus',
        price: 19,
        features: [
            'Create 200 videos per month',
            'Advanced analytics',
            'Priority support',
        ],
        button: true,
        popular: true,
    },
    {
        title: 'Standard Pro Plus',
        price: 39,
        features: [
            'Unlimited videos per month',
            'Full analytics suite',
            '24/7 premium support',
        ],
        button: false,
        popular: false,
    },
];

const sectionGradient =
    'bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 relative overflow-hidden';
const centerCardGradient =
    'bg-gradient-to-b from-sky-200 via-blue-200 to-blue-100';

const PerfectPlanSection: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section
            className={`w-full py-16 px-3 sm:px-6 md:px-12 flex flex-col items-center ${sectionGradient}`}
            id="perfect-plan"
        >
            {/* Section Title */}
            <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
            >
                The perfect plan for your needs
            </motion.h3>
            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl font-light text-center mb-6 max-w-2xl mx-auto"
            >
                Join the elite creators who transition their content into viral sensation.
            </motion.p>
            {/* Toggle */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-10"
            >
                <span className="text-base font-medium">Monthly</span>
                <button
                    className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${isYearly ? 'bg-blue-200' : 'bg-blue-500'
                        }`}
                    onClick={() => setIsYearly((prev) => !prev)}
                    aria-label="Toggle billing period"
                >
                    <motion.div
                        className={`w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'
                            }`}
                        layout
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                </button>
                <span className="text-base font-medium flex items-center gap-1">
                    Yearly <span className="ml-1 text-xs text-blue-600">(-15%)</span>
                </span>
            </motion.div>
            {/* Plan Cards */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                {plans.map((plan, idx) => {
                    const isCenter = idx === 1;
                    return (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: idx * 0.15, type: 'spring', stiffness: 80 }}
                            className={`relative flex flex-col items-center rounded-2xl shadow-lg p-6 w-full max-w-xs border border-blue-100 ${isCenter ? `${centerCardGradient} scale-105 z-10` : 'bg-white'
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded bg-blue-400 text-white font-semibold shadow">
                                    Popular
                                </span>
                            )}
                            {/* Title */}
                            <h4 className="text-lg font-bold text-[#6097ea] mb-2">{plan.title}</h4>
                            {/* Price */}
                            <div className="flex items-end gap-1 mb-2">
                                <span className="text-3xl font-extrabold text-black">
                                    £{isYearly ? (plan.price * 12 * 0.85).toFixed(0) : plan.price}
                                </span>
                                <span className="text-base text-gray-500 font-medium">/month</span>
                            </div>
                            {/* Features */}
                            <ul className="w-full flex flex-col gap-2 mb-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <FiCheck className="text-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {/* Button */}
                            
                                <button
                                    className="w-full py-2 rounded-lg font-semibold text-black bg-gradient-to-r from-blue-200 via-sky-200 to-blue-100 hover:from-blue-300 hover:to-sky-200 transition mb-2 shadow"
                                >
                                    Get Started
                                </button>
                             
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default PerfectPlanSection;
