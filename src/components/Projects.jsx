"use client";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Cognitive Market Research",
    img: "/images/cmr.png",
    tech: ["Next.js", "Tailwind", "React Query"],
    live: "https://cognitivemarketresearch.com",
    // code: "https://github.com/shubi9feb/cmr",
  },
  {
    id: 2,
    title: "AdBookPlus",
    img: "/images/adbookplus.png",
    tech: ["React", "Redux", "Bootstrap", "React Query"],
    live: "https://adbookplus.com",
    // code: "https://github.com/shubi9feb/adbookplus",
  },
  {
    id: 3,
    title: "[DEMO] The Wild Oasis-Admin Panel",
    img: "/images/adbookplus.png",
    tech: ["React", "Redux", "Tailwind", "Vite"],
    live: "https://shubi-the-wild-oasis-id5zkfe97.vercel.app/login",
    code: "https://github.com/shubi9feb/shubi-the-wild-oasis.git",
  },
  {
    id: 4,
    title: "[DEMO] The Wild Oasis-Web App",
    img: "/images/adbookplus.png",
    tech: ["React", "Redux", "Tailwind", "Next.js"],
    live: "https://the-wild-oasis-website-nine-beta.vercel.app/",
    code: "https://github.com/shubi9feb/the-wild-oasis-website.git",
  },
  // Add more projects here
];

const filters = [
  "All",
  "Next.js",
  "React",
  "Redux",
  "Tailwind",
  "Vite",
  "React Query",
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projectData
      : projectData.filter((p) => p.tech.includes(activeFilter));

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-zinc-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
          Projects Showcase
        </h2>
        <div className="mt-4 flex justify-center flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: proj.id * 0.1 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={400}
            >
              <div className="relative backdrop-blur-md bg-white/20 dark:bg-zinc-900/30 border border-white/20 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline text-blue-600 dark:text-blue-400"
                    >
                      {proj.id === 1 || proj.id === 2 ? "Live" : "Demo"}
                    </a>
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline text-zinc-800 dark:text-zinc-300"
                    >
                      {!proj.code ? "" : "Code"}
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
