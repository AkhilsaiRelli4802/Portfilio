import { motion } from "framer-motion";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceItems = [
    {
        id: 1,
        type: "work",
        role: "Full Stack & AI Engineer",
        org: "Markteer Media",
        period: "Jan 2025 - Present",
        desc: "Working on full stack products and AI-powered workflows, including interview screening voice agents, LinkedIn content automation chatbots, patient intake assistants, and lead enrichment systems connected to CRM workflows.",
        tags: ["React", "Node.js", "Supabase", "AI Agents"],
    },
    {
        id: 2,
        type: "education",
        role: "B. Tech - Computer Science",
        org: "Avanthi Institute",
        period: "2019 - 2023",
        desc: "Graduated with a focus on software engineering and algorithms.",
        tags: ["Computer Science"],
    },
];

const Journey = () => {
    return (
        <Section id="experience">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <p className="section-kicker">Experience</p>
                    <h2 className="section-title">A short timeline of the work and training behind my portfolio.</h2>
                </div>
                <p className="section-copy max-w-xl">
                    This section now reflects your current professional role accurately, without adding experience that you have not claimed.
                </p>
            </div>

            <div className="grid gap-5">
                {experienceItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <SpotlightCard className="group h-full border-white/10 bg-white/[0.04] p-7 hover:border-white/[0.18]">
                            <div className="relative z-10 flex h-full flex-col">
                                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-amber-100">
                                            {item.type === "work" && <Briefcase size={18} />}
                                            {item.type === "education" && <GraduationCap size={18} />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                                            <p className="text-sm font-medium text-amber-100/[0.80]">{item.org}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/[0.45]">{item.period}</span>
                                </div>

                                <p className="mb-6 max-w-3xl text-sm leading-7 text-stone-300">{item.desc}</p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-white/10 bg-black/[0.15] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Journey;
