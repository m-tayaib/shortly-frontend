import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { FaTwitter, FaRedditAlien, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

type SocialIcon = {
    icon: React.ReactNode;
    name: string;
    color: string;
};
const images: string[] = [
    // Professional, HD, and relevant to AI, content creation, and social media
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // AI/tech workspace
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', // Social media content creation
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', // Creative digital marketing
];

const socialIcons: SocialIcon[] = [
    { icon: <FaTwitter />, name: 'Twitter', color: '#1DA1F2' },
    { icon: <FaRedditAlien />, name: 'Reddit', color: '#FF4500' },
    { icon: <FaInstagram />, name: 'Instagram', color: '#E1306C' },
    { icon: <FaTiktok />, name: 'TikTok', color: '#000000' },
    { icon: <FaYoutube />, name: 'YouTube', color: '#FF0000' },
];

// Social Icon component for clarity
const SocialIconItem: React.FC<SocialIcon> = ({ icon, name, color }) => (
    <div
        className="flex flex-col items-center justify-center min-w-[60px]"
        aria-label={name}
    >
        <span style={{ color, fontSize: 32 }}>{icon}</span>
        <span className="text-xs font-semibold mt-1" style={{ color }}>
            {name}
        </span>
    </div>
);

const MadeWithStory: React.FC = () => {
    return (
        <section className="bg-white w-full py-12 px-4 flex flex-col items-center">
            {/* Header */}
            <motion.h3
                className="text-2xl md:text-3xl font-semibold text-center mb-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Made with <span className="font-bold text-[#6097ea]"   >fastly</span>
            </motion.h3>
            {/* Description */}
            <motion.p
                className="text-gray-500 text-center font-light mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                Shortfy AI tools help you catch trends and create content that goes viral. This text is light and thin for subtle emphasis.
            </motion.p>
            {/* Button */}
            <motion.button
                className="flex items-center gap-2 bg-black/40 text-white px-6 py-2 rounded-full font-medium mb-10 hover:bg-gray-900 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                aria-label="Start Creation"
                viewport={{ once: true }}
            >
                Start Creation <FaArrowRight />
            </motion.button>
            {/* Image Cards */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mb-10">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative flex-1 rounded-2xl overflow-hidden shadow-lg group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 * idx }}
                    >
                        <img src={img} alt={`Inspiring Story ${idx + 1} preview`} className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {img.includes("blog") ? "Featured Blog Post" : img.includes("video") ? "Viral Video" : `Fastly Creation #${idx + 1}`}
                            </span>
                        </div>
                    </motion.div>
                ))}

            </div>
            {/* Social Icons Banner */}
            <div className="w-full bg-white py-4 overflow-x-hidden mt-2">
                <SeamlessSocialIconsBanner icons={socialIcons} />
            </div>
        </section>
    );
};

// Seamless, performant, professional social icons banner
const SeamlessSocialIconsBanner: React.FC<{ icons: SocialIcon[] }> = ({ icons }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [rowWidth, setRowWidth] = React.useState(0);

    React.useEffect(() => {
        if (containerRef.current) {
            setRowWidth(containerRef.current.scrollWidth);
        }
    }, [icons]);

    // Duplicate icons enough times to fill at least twice the row width for seamless looping
    const minIcons = Math.ceil((window.innerWidth * 2) / (icons.length * 60));
    const repeatedIcons = Array.from({ length: minIcons }, () => icons).flat();

    return (
        <motion.div
            className="flex gap-10 justify-between items-center"
            ref={containerRef}
            style={{ width: 'max-content' }}
            animate={{ x: [0, -rowWidth / 2] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
            {repeatedIcons.map((icon, idx) => (
                <SocialIconItem key={icon.name + idx} {...icon} />
            ))}
        </motion.div>
    );
};

export default MadeWithStory;
