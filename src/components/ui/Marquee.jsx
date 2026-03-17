import { motion } from "framer-motion";

const Marquee = ({ children, className = "", reverse = false }) => {
    return (
        <div className={`flex overflow-hidden w-full group ${className}`}>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex flex-shrink-0 gap-8 py-4 px-4 min-w-full"
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex flex-shrink-0 gap-8 py-4 px-4 min-w-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Marquee;
