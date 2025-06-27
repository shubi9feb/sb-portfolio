"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function HomeHero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center
      bg-gradient-to-br from-white to-gray-100 text-black
      dark:from-zinc-900 dark:to-black dark:text-white
      px-6 transition-colors duration-500"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        Hi, I’m Shubham <span className="inline-block dark:hidden">👋</span>
        <span className="hidden dark:inline-block">🌙</span>
        <br />I build modern UIs with{" "}
        <span className="text-blue-600 dark:text-blue-400">React</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300"
      >
        Front-end Developer with 2.5+ years in building scalable React/Next.js
        apps.
      </motion.p>

      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/shubi9feb"
          className="px-4 py-2 rounded transition-all duration-300 border border-zinc-800 dark:border-white
          bg-white text-black hover:bg-zinc-100
          dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          target="_blank"
        >
          <Github className="inline-block mr-2" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/shubi9feb"
          className="px-4 py-2 rounded transition-all duration-300
          bg-blue-600 text-white hover:bg-blue-700"
          target="_blank"
        >
          <Linkedin className="inline-block mr-2" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
