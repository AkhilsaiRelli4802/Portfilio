import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Section from "../ui/Section";
import { useEffect, useState } from "react";

const CodeBlock = () => {
    const [text, setText] = useState("");
    const fullText = `const developer = {
  name: "Akhilsai Relli",
  role: "AI Agentic & Full Stack Developer",
  focus: ["React", "Node.js", "AI Agents", "Voice AI"],
  location: "Hyderabad, India",
  availableFor: "Full-time opportunities"
};`;

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index += 1;
            if (index > fullText.length) clearInterval(timer);
        }, 32);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mx-auto w-full max-w-xl rounded-[28px] border border-white/10 bg-[#08131c]/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:mx-0">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full border border-rose-200/[0.40] bg-rose-300/[0.30]" />
                    <div className="h-3 w-3 rounded-full border border-amber-200/[0.40] bg-amber-300/[0.30]" />
                    <div className="h-3 w-3 rounded-full border border-emerald-200/[0.40] bg-emerald-300/[0.30]" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-white/[0.35]">profile.js</span>
            </div>
            <div className="text-stone-300">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-7">
                    <code
                        dangerouslySetInnerHTML={{
                            __html: text
                                .replace(/(".*?")/g, '<span class="text-emerald-200">$1</span>')
                                .replace(/(const|name|role|focus|location|availableFor)/g, '<span class="text-sky-200">$1</span>'),
                        }}
                    />
                    <span className="animate-pulse text-amber-200">_</span>
                </pre>
            </div>
        </div>
    );
};

const metrics = [
    { value: "Jan 2025 - Present", label: "current role at Markteer Media" },
    { value: "10+ AI agents", label: "including chatbots and voice agents" },
    { value: "3 core projects", label: "built across product and automation work" },
];

const Hero = () => {
    return (
        <Section id="hero" className="flex min-h-screen items-center pt-32">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.9fr]">
                <div className="-mt-4 text-center md:text-left lg:-mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-100/[0.15] bg-amber-100/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                        </span>
                        Available for full-time opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl"
                    >
                        Akhilsai Relli
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                        className="mb-6 max-w-3xl text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl"
                    >
                        AI Agentic and Full Stack Developer building modern products with practical automation.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-stone-300 md:mx-0 md:text-xl"
                    >
                        I design and ship modern web applications with React, Node.js, Supabase, and AI tooling. My work focuses on agentic systems, production-ready interfaces, scalable backend architecture, and automation that solves real business problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:justify-start"
                    >
                        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f2d6a2,#d8b471)] px-6 py-3 text-sm font-semibold text-[#081018] transition hover:brightness-105">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.10]">
                            Contact Me <Mail size={18} />
                        </a>
                        <a
                            href="https://github.com/AkhilsaiRelli4802"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-white/[0.16] hover:bg-white/[0.06]"
                        >
                            <Github size={18} /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/akhilsai-relli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-5 py-3 text-sm font-medium text-stone-200 transition hover:border-white/[0.16] hover:bg-white/[0.06]"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.38 }}
                        className="mt-12 grid gap-4 sm:grid-cols-3"
                    >
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5 text-left">
                                <p className="mb-2 text-xl font-semibold text-white">{metric.value}</p>
                                <p className="text-sm leading-6 text-stone-400">{metric.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="hidden lg:block"
                >
                    <CodeBlock />
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
