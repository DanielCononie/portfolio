import { motion } from "framer-motion"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (!section) {
    return
  }

  const navOffset = id === "projects" ? 64 : 96
  const top = section.getBoundingClientRect().top + window.scrollY - navOffset

  window.scrollTo({
    top,
    behavior: "smooth",
  })
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Nav />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Full Stack Developer
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-neutral-400"
        >
          Daniel Cononie
        </motion.h2>

        <p className="mt-6 max-w-xl text-lg text-neutral-400">
          Building scalable apps, automation tools, and AI-powered systems.
        </p>

        <button
          onClick={() => scrollToSection("projects")}
          className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105 hover:opacity-90"
        >
          View Projects
        </button>
      </section>

      <Projects />

      <About />

      <Contact />
    </div>
  )
}

export default App
