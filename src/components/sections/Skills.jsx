import Section from "../ui/Section";
import { Code, Database, Globe, Cpu } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        icon: Globe,
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Backend",
        icon: Database,
        items: ["Node.js", "Supabase", "PostgreSQL", "Socket.io"],
    },
    {
        title: "Languages",
        icon: Code,
        items: ["JavaScript", "TypeScript", "Python"],
    },
    {
        title: "AI and Tools",
        icon: Cpu,
        items: ["OpenAI API", "Anthropic", "WebRTC", "Docker"],
    },
];

const Skills = () => {
    return (
        <Section id="skills">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <p className="section-kicker">Skills</p>
                    <h2 className="section-title">A practical stack for AI agentic systems and full stack product delivery.</h2>
                </div>
                <p className="section-copy max-w-xl">
                    I work best where AI capabilities, polished product experience, backend reliability, and fast iteration all matter together.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                        <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-amber-100">
                                    <Icon size={18} />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span key={item} className="inline-flex items-center rounded-full border border-white/10 bg-black/[0.15] px-4 py-2 text-sm text-stone-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
