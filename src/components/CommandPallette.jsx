"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const actions = [
  { id: "home", label: "Go to Home", section: "Navigation", shortcut: "H" },
  {
    id: "projects",
    label: "Go to Projects",
    section: "Navigation",
    shortcut: "P",
  },
  { id: "about", label: "Go to About", section: "Navigation", shortcut: "A" },
  {
    id: "contact",
    label: "Go to Contact",
    section: "Navigation",
    shortcut: "C",
  },
  {
    id: "github",
    label: "Open GitHub",
    section: "Links",
    icon: <Github />,
    url: "https://github.com/shubi9feb",
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    section: "Links",
    icon: <Linkedin />,
    url: "https://linkedin.com/in/shubi9feb",
  },
  { id: "theme", label: "Toggle Theme", section: "Preferences", icon: <Sun /> },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const shown = localStorage.getItem("cmdk-tip-shown");
    if (!shown) {
      toast("Tip: Press ⌘K / Ctrl+K to open the Command Palette", {
        icon: "⌨️",
        duration: 5000,
      });
      localStorage.setItem("cmdk-tip-shown", "true");
    }

    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const runAction = (item) => {
    if (item.id === "theme") {
      const html = document.documentElement;
      const isDark = html.classList.contains("dark");
      html.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } else if (item.url) {
      window.open(item.url, "_blank");
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <Toaster position="top-right" />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-[1000] flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <Command.Dialog
              open={open}
              onOpenChange={setOpen}
              shouldFilter={false}
              className="max-w-xl w-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Type a command or search…"
                className="w-full px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-transparent outline-none"
              />
              <Command.List className="max-h-80 overflow-y-auto">
                {actions
                  .filter((item) =>
                    item.label.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.label}
                      onSelect={() => runAction(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center gap-2"
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
              </Command.List>
            </Command.Dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
