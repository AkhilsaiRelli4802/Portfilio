import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SpotlightCard = ({ children, className = "", ...props }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
    const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setPosition({ x: offsetX, y: offsetY });
        rotateY.set(((offsetX - centerX) / centerX) * 5);
        rotateX.set(-((offsetY - centerY) / centerY) * 5);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 will-change-transform ${className}`}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(255, 236, 203, 0.12), transparent 42%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default SpotlightCard;
