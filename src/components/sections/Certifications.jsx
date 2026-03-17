import Section from "../ui/Section";
import Card from "../ui/Card";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
    {
        name: "Developer Foundations, Databases, React.js, Node.js",
        issuer: "NxtWave",
    },
    {
        name: "Python Certification",
        issuer: "Kaggle",
    },
];

const education = [
    {
        degree: "Bachelor of Technology (B. Tech.)",
        institution: "Avanthi St. Theressa Institute of Engineering and Technology",
        period: "June 2019 - April 2023",
        location: "Garividi, India",
    },
];

const Certifications = () => {
    return (
        <Section id="certifications">
            <div className="mb-12">
                <p className="section-kicker">Credentials</p>
                <h2 className="section-title">Education and certifications that support the technical foundation.</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">Certifications</h3>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="flex items-center space-x-4 border-white/10 bg-white/[0.04] hover:bg-white/[0.06]">
                                <div className="rounded-2xl bg-amber-100/10 p-3 text-amber-100">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                                    <p className="text-sm text-stone-400">{cert.issuer}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">Education</h3>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <Card key={index} className="border-white/10 bg-white/[0.04] hover:bg-white/[0.06]">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="rounded-2xl bg-emerald-100/10 p-3 text-emerald-100">
                                        <GraduationCap size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                        <p className="text-base text-stone-300">{edu.institution}</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center justify-between text-sm text-stone-400">
                                    <span>{edu.period}</span>
                                    <span>{edu.location}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Certifications;
