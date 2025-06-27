"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const sections = ["home", "skills", "projects", "about", "contact"];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem("theme");
    const dark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollY + 100 &&
          el.offsetTop + el.offsetHeight > scrollY + 100
        ) {
          setActive(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white-80 dark:bg-zinc-900/80 border-b border-zinc-300 dark:border-zinc-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl tracking-wide text-zinc-800 dark:text-white">
          Shubham.dev
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer capitalize transition-colors duration-300 ${
                {
                  true: "text-blue-600 dark:text-blue-400",
                  false:
                    "text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400",
                }[active === sec]
              }`}
            >
              {sec}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-700 dark:text-zinc-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 space-y-3 text-center bg-white dark:bg-zinc-900 border-t dark:border-zinc-800"
        >
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`cursor-pointer capitalize text-base py-2 ${
                {
                  true: "text-blue-600 dark:text-blue-400",
                  false: "text-zinc-700 dark:text-zinc-300",
                }[active === sec]
              }`}
            >
              {sec}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
