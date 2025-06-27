"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const skillData = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind", level: 80 },
  { name: "Redux", level: 75 },
  { name: "JavaScript", level: 95 },
];

export default function ChartSkill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const el = document.getElementById("skills");
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white mb-8">
          My Skills at a Glance
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={skillData} layout="vertical" margin={{ left: 50 }}>
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" tick={{ fill: "#ccc" }} />
            <Tooltip cursor={{ fill: "#8884d8", opacity: 0.1 }} />
            <Bar
              dataKey="level"
              fill="#3b82f6"
              radius={[0, 10, 10, 0]}
              isAnimationActive={visible}
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}
