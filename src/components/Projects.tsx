import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Terminal, X } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import projects from "./utils/project-details"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-28 overflow-hidden bg-neutral-950 px-6 pb-24 pt-2"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Featured Work
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Projects built like real products.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            A focused collection of automation, AI, DevOps, and full-stack
            projects designed to solve real engineering problems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-2xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-neutral-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-cyan-300">{project.tagline}</p>
                  </div>

                  <div
                    className="flex gap-3 text-neutral-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:scale-110 hover:text-white"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-black/40 p-4 text-sm text-neutral-300">
                  <span className="text-cyan-400">Impact:</span>{" "}
                  {project.impact}
                </div>

                <p className="mt-4 text-sm text-neutral-500">
                  Click card for deep dive →
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-fit rounded-2xl border border-neutral-800 bg-black p-5 shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Terminal size={18} className="text-cyan-400" />
              <span className="text-sm text-neutral-400">portfolio-cli</span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <p>
                <span className="text-cyan-400">$</span>{" "}
                <span className="text-neutral-300">view projects</span>
              </p>
              <p className="text-neutral-500">Loading featured work...</p>

              {projects.map((project) => (
                <p key={project.title}>
                  <span className="text-cyan-400">✓</span> {project.title}
                </p>
              ))}

              <p className="pt-4">
                <span className="text-cyan-400">$</span>{" "}
                <span className="text-neutral-300">status --candidate</span>
              </p>
              <p className="text-green-400">
                Available for full-stack, platform, DevOps, and AI engineering
                roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-neutral-400 transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Project Deep Dive
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-cyan-300">{selectedProject.tagline}</p>

              <p className="mt-6 leading-relaxed text-neutral-400">
                {selectedProject.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
                <h4 className="font-semibold text-white">Impact</h4>
                <p className="mt-2 text-neutral-400">
                  {selectedProject.impact}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-white">Technical Breakdown</h4>

                <ul className="mt-3 space-y-3 text-neutral-400">
                  {(selectedProject.details ?? [
                    "Designed with real-world engineering workflows in mind.",
                    "Focused on maintainability, reliability, and developer experience.",
                    "Built to demonstrate practical full-stack and automation skills.",
                  ]).map((detail: string) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 text-cyan-400">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((item: string) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-105"
                  >
                    View Code
                  </a>
                )}

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white hover:text-black"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}