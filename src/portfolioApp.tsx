import { About } from "./portfolio/components/About";
import { Contact } from "./portfolio/components/Contact";
import { Education } from "./portfolio/components/Education";
import { Footer } from "./portfolio/components/Footer";
import { Hero } from "./portfolio/components/Hero";
import { Nav } from "./portfolio/components/Nav";
import { Projects } from "./portfolio/components/Projects";
import { Skills } from "./portfolio/components/Skills";

export const PortfolioApp = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};
