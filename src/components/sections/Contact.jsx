import Section from "../ui/Section";
import Card from "../ui/Card";
import { Mail, MapPin, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
    return (
        <Section id="contact" className="flex min-h-[50vh] flex-col justify-center">
            <div className="mx-auto max-w-3xl text-center">
                <p className="section-kicker justify-center">Contact</p>
                <h2 className="section-title">If you&apos;re hiring for a full stack role, I&apos;d be glad to talk through the work.</h2>
                <p className="section-copy mx-auto mt-5 max-w-2xl">
                    The fastest way to reach me is by email. I&apos;m also available on LinkedIn and GitHub if you want to review my profile or past work.
                </p>
            </div>

            <div className="mx-auto mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-2">
                <Card className="flex flex-col items-center justify-center space-y-4 border-white/10 bg-white/[0.04] p-8 text-center hover:bg-white/[0.06]">
                    <div className="rounded-full bg-amber-100/[0.10] p-3 text-amber-100">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a href="mailto:akhilsairelli@gmail.com" className="text-stone-300 transition-colors hover:text-white">
                        akhilsairelli@gmail.com
                    </a>
                </Card>

                <Card className="flex flex-col items-center justify-center space-y-4 border-white/10 bg-white/[0.04] p-8 text-center hover:bg-white/[0.06]">
                    <div className="rounded-full bg-emerald-100/[0.10] p-3 text-emerald-100">
                        <Phone size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <a href="tel:+919381161353" className="text-stone-300 transition-colors hover:text-white">
                        +91 9381161353
                    </a>
                </Card>

                <Card className="flex flex-col items-center justify-center space-y-4 border-white/10 bg-white/[0.04] p-8 text-center hover:bg-white/[0.06]">
                    <div className="rounded-full bg-sky-100/[0.10] p-3 text-sky-100">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="text-stone-300">Hyderabad, India</p>
                </Card>

                <Card className="flex flex-col justify-between border-white/10 bg-[linear-gradient(135deg,rgba(242,214,162,0.12),rgba(255,255,255,0.04))] p-8 hover:bg-white/[0.08]">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.50]">Profiles</p>
                        <h3 className="text-2xl font-semibold text-white">Professional links</h3>
                        <p className="mt-3 text-sm leading-7 text-stone-300">
                            Review my public work, contributions, and profile details through the links below.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://linkedin.com/in/akhilsai-relli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-black/[0.15] px-5 py-3 text-sm text-white transition hover:bg-white/[0.10]">
                            <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
                        </a>
                        <a href="https://github.com/AkhilsaiRelli4802" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-black/[0.15] px-5 py-3 text-sm text-white transition hover:bg-white/[0.10]">
                            <Github size={18} /> GitHub <ArrowUpRight size={16} />
                        </a>
                    </div>
                </Card>
            </div>
        </Section>
    );
};

export default Contact;
