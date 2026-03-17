import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-28 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
