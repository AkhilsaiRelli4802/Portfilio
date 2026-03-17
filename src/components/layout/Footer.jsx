import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/[0.10] py-8">
            <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
                <p className="text-sm text-stone-400">Copyright {new Date().getFullYear()} Akhilsai Relli. All rights reserved.</p>

                <div className="mt-4 flex items-center space-x-6 md:mt-0">
                    <a href="https://github.com/AkhilsaiRelli4802" target="_blank" rel="noopener noreferrer" className="text-stone-400 transition-colors hover:text-white">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/akhilsai-relli" target="_blank" rel="noopener noreferrer" className="text-stone-400 transition-colors hover:text-white">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:akhilsairelli@gmail.com" className="text-stone-400 transition-colors hover:text-white">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
