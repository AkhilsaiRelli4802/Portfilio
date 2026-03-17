import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Card = ({ children, className = "", ...props }) => {
    const cardRef = useRef(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
    const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        rotateY.set(((offsetX - centerX) / centerX) * 4);
        rotateX.set(-((offsetY - centerY) / centerY) * 4);
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            onBlur={resetTilt}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
            }}
            className={`glass rounded-[28px] p-6 transition-colors duration-300 will-change-transform ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
