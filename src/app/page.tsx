import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Journey from "@/sections/Journey";
import Skills from "@/sections/Skills";
import Achievements from "@/sections/Achievements";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
