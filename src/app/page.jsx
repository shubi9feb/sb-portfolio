import HomeHero from "@/components/HomeHero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ChartSkill from "../components/ChartSkills";

export default function HomePage() {
  return (
    <main className="pt-20 space-y-24 ">
      {" "}
      {/* pt-20 to account for fixed navbar height */}
      <section id="home">
        <HomeHero />
      </section>
      <section id="skills">
        <ChartSkill />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
