import Section from "../ui/Section";
import Card from "../ui/Card";
import aboutImage from "../../uploads/Akhil.jpg";

const strengths = [
    "Builds end-to-end products from interface to backend services",
    "Comfortable shipping AI-powered workflows for real business teams",
    "Balances product polish, reliability, and delivery speed",
];

const About = () => {
    return (
        <Section id="about">
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="lg:-mt-4">
                    <p className="section-kicker">About</p>
                    <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Akhilsai Relli</h2>
                    <p className="mt-3 text-lg font-medium text-amber-100/[0.82] md:text-xl">AI Agentic and Full Stack Developer</p>
                    <div className="section-copy mt-6 space-y-5">
                        <p>
                            I am a full stack developer based in Hyderabad, India, with hands-on experience building internal tools, business platforms, and AI-driven products.
                        </p>
                        <p>
                            At <span className="font-medium text-white">Markteer Media</span>, I work across product design, frontend implementation, backend systems, and AI integrations. That range lets me contribute from first concept through production delivery.
                        </p>
                        <p>
                            My strongest tools are React, Next.js, Node.js, Supabase, PostgreSQL, and modern AI APIs. I enjoy turning ambiguous product requirements into structured systems that are easier for teams to use and maintain.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4">
                    <Card className="flex flex-col items-center border-white/10 bg-white/[0.04] p-8 text-center hover:bg-white/[0.06]">
                        <div className="mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-amber-100/[0.22] bg-white/[0.06] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                            <img src={aboutImage} alt="Akhilsai Relli" className="h-full w-full rounded-full object-cover object-top" />
                        </div>
                        <p className="text-xl font-semibold text-white">Akhilsai Relli</p>
                        <p className="mt-2 text-sm text-stone-300">AI Agentic and Full Stack Developer</p>
                    </Card>
                    <Card className="border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.06]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/[0.70]">Current Focus</p>
                        <p className="text-lg leading-8 text-stone-200">
                            Full stack product engineering, AI agent workflows, and production-ready business tools.
                        </p>
                    </Card>
                    <Card className="border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.06]">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/[0.70]">What I Bring</p>
                        <div className="space-y-3">
                            {strengths.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/[0.08] bg-black/[0.15] px-4 py-3 text-sm leading-6 text-stone-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="border-white/10 bg-[linear-gradient(135deg,rgba(242,214,162,0.12),rgba(255,255,255,0.03))] p-7 hover:bg-white/[0.06]">
                        <p className="mb-2 text-sm uppercase tracking-[0.24em] text-white/[0.50]">Location</p>
                        <p className="text-xl font-semibold text-white">Hyderabad, India</p>
                        <p className="mt-2 text-sm leading-6 text-stone-300">Open to roles where product quality and engineering ownership both matter.</p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default About;
