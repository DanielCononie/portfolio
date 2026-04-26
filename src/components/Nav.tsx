import { motion } from "framer-motion"

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
]

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

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-neutral-800 bg-black/50 px-3 py-2 backdrop-blur-md"
    >
      <div className="flex gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="rounded-full px-4 py-2 text-sm text-neutral-300 transition hover:bg-white hover:text-black"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
