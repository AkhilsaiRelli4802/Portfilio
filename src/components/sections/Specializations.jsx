import { motion } from "framer-motion";
import { Bot, Layers3, Mic } from "lucide-react";
import Section from "../ui/Section";
import SpotlightCard from "../ui/SpotlightCard";

const items = [
    {
        title: "AI Agents and Automation",
        description:
            "Designing agentic workflows, task-specific AI agents, and automation systems that support real business operations instead of demo-only concepts.",
        points: ["Interview screening and scheduling agents", "Lead enrichment and CRM prioritization", "LLM integration patterns for production use"],
        icon: Bot,
        accent: "from-amber-200/[0.22] via-amber-300/[0.08] to-transparent",
    },
    {
        title: "Full Stack Product Delivery",
        description:
            "Building modern frontend experiences and reliable backend systems together, so products feel polished to users and stable for teams.",
        points: ["React and Next.js interfaces", "Node.js and Supabase backends", "Production-focused architecture"],
        icon: Layers3,
        accent: "from-sky-200/[0.22] via-sky-300/[0.08] to-transparent",
    },
    {
        title: "Voice and Chat Experiences",
        description:
            "Creating chatbot and voice-agent experiences that make AI products more usable, accessible, and closer to real customer workflows.",
        points: ["HR screening voice calls", "LinkedIn content generation chatbot", "Patient intake conversational flows"],
        icon: Mic,
        accent: "from-emerald-200/[0.22] via-emerald-300/[0.08] to-transparent",
    },
];

const Specializations = () => {
    return (
        <Section id="specializations" className="pt-0">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <p className="section-kicker">Specialization</p>
                    <h2 className="section-title">Positioned clearly for AI agentic engineering and full stack product roles.</h2>
                </div>
                <p className="section-copy max-w-xl">
                    This section makes your strengths obvious to recruiters who are scanning quickly for AI, product, and implementation capability.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <SpotlightCard className="h-full p-7">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-100`} />
                                <div className="relative z-10 flex h-full flex-col">
                                    <div className="mb-5 inline-flex w-fit rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-amber-100">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-semibold text-white">{item.title}</h3>
                                    <p className="mb-6 text-sm leading-7 text-stone-300">{item.description}</p>
                                    <div className="mt-auto space-y-3">
                                        {item.points.map((point) => (
                                            <div
                                                key={point}
                                                className="rounded-2xl border border-white/[0.08] bg-black/[0.20] px-4 py-3 text-sm text-stone-200"
                                            >
                                                {point}
                                            </div>
                                        ))}
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

export default Specializations;
