import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Background from "./components/Background";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Specializations from "./components/sections/Specializations";
import Skills from "./components/sections/Skills";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-stone-100 selection:bg-amber-200/30 selection:text-white">
      <Background />
      <Navbar />

      <div className="flex flex-col pb-24">
        <Hero />
        <About />
        <Specializations />
        <Journey />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;
