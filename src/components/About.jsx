"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Photo with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-lg group">
            <Image
              src="/images/shubham.jpeg"
              width={350}
              height={250}
              alt="Shubham Bhatia"
              priority
              className="object-cover object-[0_-20px] transition-transform duration-500 group-hover:scale-105 "
            />
          </div>
        </motion.div>

        {/* Career Highlights & Summary */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I’m a Front‑End Developer with 2.5+ years of experience crafting
            high‑performance, accessible, and scalable React.js & Next.js
            applications. I specialize in modular architecture, performance
            tuning, and pixel‑perfect responsive UIs. I’m a strong communicator
            and agile team player who mentors juniors and drives projects to
            success.
          </p>
          <h3 className="text-2xl font-semibold mb-3">Career Highlights</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Boosted Lighthouse performance scores from the 70s to 90+ by
              implementing code splitting and virtualizing large lists.
            </li>
            <li>
              Reduced Redux boilerplate by ~30% through modular slice design and
              reusable hooks.
            </li>
            <li>
              Accelerated new feature delivery by ~20% with a shared Storybook
              component library.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Know Me Better Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4">Know Me Better</h3>
        <p className="mb-3">
          When I’m not immersed in code, you’ll find me breaking a sweat on the
          badminton court—I'm at an advanced level and love a good rally. I’m
          also a fitness enthusiast who enjoys pushing limits in the gym and
          sharing tips on healthy living. On quieter days, I channel my
          creativity in the kitchen; as a self‑taught chef, I craft dishes that
          are as flavorful as they are Instagram‑worthy.
        </p>
        <p>
          I believe a balanced life fuels better work. Whether I’m experimenting
          with a new recipe, mastering a complex footwork drill, or planning my
          next React component, I bring the same passion and precision to
          everything I do.
        </p>
      </motion.div>
    </section>
  );
}
