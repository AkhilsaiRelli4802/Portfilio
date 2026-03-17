import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, MessageSquare, Sparkles } from "lucide-react";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";

const projects = [
    {
        title: "RhinoAgents",
        label: "AI Automation Platform",
        description:
            "Developed a production-facing AI automation platform featuring 10+ AI agents, including screening voice agents, content automation chatbots, patient intake assistants, and lead enrichment workflows for practical business use cases.",
        highlights: ["Interview scheduling and screening voice agent", "LinkedIn post generation and publishing chatbot", "Patient intake and lead enrichment agents"],
        icon: Bot,
        accent: "from-amber-200/[0.20] via-amber-300/[0.08] to-transparent",
        href: "https://www.rhinoagents.com/",
        domain: "rhinoagents.com",
    },
    {
        title: "WhatzCRM",
        label: "WhatsApp CRM Platform",
        description:
            "Built a multi-department CRM focused on real-time communication, operational visibility, and smoother coordination across business teams.",
        highlights: ["Real-time communication workflows", "Role-based operational usage", "Internal process support"],
        icon: MessageSquare,
        accent: "from-sky-200/[0.20] via-sky-300/[0.08] to-transparent",
        href: "https://www.whatzcrm.com/",
        domain: "whatzcrm.com",
    },
    {
        title: "MightyApps",
        label: "AI Product Build",
        description:
            "Worked on an AI-driven app-building experience that turns user ideas into structured product flows with a modern web interface and scalable delivery model.",
        highlights: ["AI-assisted app generation", "Modern frontend experience", "Structured product workflow"],
        icon: Sparkles,
        accent: "from-emerald-200/[0.20] via-emerald-300/[0.08] to-transparent",
        href: "https://www.mightyapps.ai/",
        domain: "mightyapps.ai",
    },
];

const Projects = () => {
    return (
        <Section id="projects" className="pt-0">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <p className="section-kicker">Selected Work</p>
                    <h2 className="section-title">Projects presented like case studies, not just names on a grid.</h2>
                </div>
                <p className="section-copy max-w-xl">
                    Each card now highlights the project purpose, the kind of systems you built, and a direct link recruiters can open immediately.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project, index) => {
                    const Icon = project.icon;

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <SpotlightCard className="h-full border-white/10 bg-white/[0.03] p-7">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-100`} />
                                <div className="relative z-10 flex h-full flex-col">
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-amber-100">
                                            <Icon size={20} />
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-black/[0.18] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-stone-300">
                                            <Globe size={14} />
                                            Live Project
                                        </div>
                                    </div>

                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                                        {project.label}
                                    </p>
                                    <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
                                    <p className="mb-6 text-sm text-amber-100/[0.75]">{project.domain}</p>
                                    <p className="mb-7 text-sm leading-7 text-stone-300">{project.description}</p>

                                    <div className="mb-7 space-y-3">
                                        {project.highlights.map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-2xl border border-white/[0.08] bg-black/[0.20] px-4 py-3 text-sm text-stone-200"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.10]"
                                        >
                                            Visit Project <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Projects;
