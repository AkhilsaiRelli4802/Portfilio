import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#071018]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#153147,transparent_45%),linear-gradient(180deg,#071018_0%,#09131d_45%,#060b12_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
            <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-amber-100/[0.08] blur-[140px]" />

            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.18, 0.28, 0.18],
                    x: [0, 40, 0],
                    y: [0, -35, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-[8%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-sky-300/10 blur-[120px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.16, 1],
                    opacity: [0.08, 0.18, 0.08],
                    x: [0, -25, 0],
                    y: [0, 28, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-[8%] right-[10%] h-[22rem] w-[22rem] rounded-full bg-emerald-200/[0.08] blur-[120px]"
            />
        </div>
    );
};

export default Background;
