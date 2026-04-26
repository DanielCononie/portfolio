import { motion } from "framer-motion"
import { Code2, Server, Workflow, Brain } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "React, TypeScript, Node.js, Go, REST APIs, and production-facing UI work.",
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    text: "CI/CD, GitHub Actions, Jenkins, Docker, OpenShift, and deployment workflows.",
  },
  {
    icon: Server,
    title: "Production Support",
    text: "Experience supporting real systems with monitoring, debugging, and reliability work.",
  },
  {
    icon: Brain,
    title: "AI & Developer Tools",
    text: "Building RAG, MCP, automation, and internal tooling projects that improve developer velocity.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 px-6 py-28"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm uppercase tracking-[0.3em] text-cyan-400"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
            >
              I build reliable software with a{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                product-minded
              </span>{" "}
              engineering approach.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 leading-relaxed text-neutral-400"
            >
              I’m a software developer with experience building full-stack
              applications, APIs, automation tools, and production systems using
              React, Node.js, Go, and modern DevOps workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-4 leading-relaxed text-neutral-400"
            >
              I enjoy working at the intersection of application development,
              platform engineering, and AI tooling — especially projects that
              reduce manual work, improve reliability, or help teams move faster.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 p-5 shadow-2xl transition hover:border-cyan-400/50"
                >
                  {/* Card shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />

                  {/* Card glow */}
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />
                  </div>

                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon className="text-cyan-400" size={22} />
                    </div>

                    <h3 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}