import { motion } from "framer-motion"
import { FiCopy, FiCheck, FiDownload, FiMail } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"

const email = "danielcononie1278@gmail.com"
const linkedin = "https://www.linkedin.com/in/daniel-cononie-14a519268"
const github = "https://github.com/DanielCononie"
// const resume = "/resume.pdf"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24"
    >
      {/* Subtle glow (lighter than About) */}
      <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 shadow-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let’s build something reliable.
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-400">
            Open to full-stack, platform, DevOps, and AI engineering roles.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {/* EMAIL */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl border border-white/10 bg-black/30 p-5 text-left transition hover:border-cyan-400/50 hover:bg-black/50"
            >
              <FiMail className="text-2xl text-cyan-400" />

              <h3 className="mt-4 text-lg font-semibold">Email</h3>

              <p className="mt-1 text-sm text-neutral-400">
                {email}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied" : "Copy email"}
              </div>
            </motion.button>

            {/* LINKEDIN */}
            <motion.a
              href={linkedin}
              target="_blank"
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-cyan-400/50 hover:bg-black/50"
            >
              <FaLinkedin className="text-2xl text-cyan-400" />

              <h3 className="mt-4 text-lg font-semibold">LinkedIn</h3>

              <p className="mt-1 text-sm text-neutral-400">
                Connect professionally
              </p>
            </motion.a>

            {/* GITHUB */}
            <motion.a
              href={github}
              target="_blank"
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-cyan-400/50 hover:bg-black/50"
            >
              <FaGithub className="text-2xl text-cyan-400" />

              <h3 className="mt-4 text-lg font-semibold">GitHub</h3>

              <p className="mt-1 text-sm text-neutral-400">
                View projects and source code
              </p>
            </motion.a>

            {/* RESUME */}
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20"
            >
              <FiDownload className="text-2xl text-cyan-400" />

              <h3 className="mt-4 text-lg font-semibold">Resume</h3>

              <p className="mt-1 text-sm text-neutral-400">
                Download my latest resume
              </p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}