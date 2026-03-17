import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import profileImage from "../../uploads/image (2).png";

const sectionHashes = ["#hero", "#about", "#specializations", "#experience", "#projects", "#skills", "#certifications", "#contact"];

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState(window.location.hash || "#hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = sectionHashes
            .map((hash) => document.querySelector(hash))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length === 0) return;

                const nextHash = `#${visibleEntries[0].target.id}`;
                setActiveHash((currentHash) => {
                    return nextHash;
                });
            },
            {
                rootMargin: "-25% 0px -45% 0px",
                threshold: [0.2, 0.35, 0.5, 0.7],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            setActiveHash(href);
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                    isScrolled ? "border-b border-white/10 bg-[#0c1117]/[0.84] backdrop-blur-xl" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <a
                        href="#hero"
                        className="flex items-center gap-3"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#hero");
                        }}
                    >
                        <span className="flex h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
                            <img src={profileImage} alt="Akhilsai Relli" className="h-full w-full object-cover" />
                        </span>
                        <span className="hidden sm:block">
                            <span className="block text-sm font-semibold text-white">Akhilsai Relli</span>
                            <span className="block text-xs uppercase tracking-[0.22em] text-white/[0.45]">Full Stack Engineer</span>
                        </span>
                    </a>

                    <div className="hidden items-center space-x-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-white ${
                                    activeHash === link.href ? "text-white" : "text-stone-300"
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center space-x-4 md:flex">
                        <a href="https://github.com/AkhilsaiRelli4802" target="_blank" rel="noopener noreferrer" className="text-stone-400 transition-colors hover:text-white">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/akhilsai-relli" target="_blank" rel="noopener noreferrer" className="text-stone-400 transition-colors hover:text-white">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:akhilsairelli@gmail.com" className="text-stone-400 transition-colors hover:text-white">
                            <Mail size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.10]"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#contact");
                            }}
                        >
                            Hire Me <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <button className="text-stone-200 hover:text-white md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0c1117]/95 px-6 pt-24 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-2xl font-semibold hover:text-white ${
                                        activeHash === link.href ? "text-white" : "text-stone-200"
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-6 border-t border-white/10 pt-6">
                                <a href="https://github.com/AkhilsaiRelli4802" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/akhilsai-relli" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:akhilsairelli@gmail.com" className="text-stone-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
