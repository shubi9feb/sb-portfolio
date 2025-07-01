"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000)); // simulate network delay
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100"
    >
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /.+@.+\..+/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full px-4 py-2 rounded bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:shubi9feb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://github.com/shubi9feb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/shubi9feb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
