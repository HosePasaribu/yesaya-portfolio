import { MatrixBackground } from "@/components/Background";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { Writeups } from "@/components/Writeups";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Certifications />
        <Skills />
        <Research />
        <Writeups />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
