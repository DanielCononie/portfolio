interface Project {
  title: string
  tagline: string
  description: string
  tech: string[]
  impact: string
  github?: string
  live?: string
  details?: string[]
}

const projects: Project[] = [
  {
    title: "Auto Upgrade PR Bot",
    tagline: "Automates dependency upgrades and creates pull requests.",
    description:
      "A reusable GitHub Actions workflow that checks out a branch, upgrades packages, runs validation, and opens a PR across multiple languages.",
    tech: ["GitHub Actions", "Node", "Go", "Python", "CI/CD"],
    impact: "Automates dependency updates",
    github: "https://github.com/DanielCononie/github-shared-components",
    details: [
      "Built reusable automation for dependency upgrades.",
      "Creates a branch, upgrades packages, runs validation, and prepares a PR.",
      "Designed to work across multiple project types."
    ]
  },
  {
    title: "Technical Docs RAG Agent",
    tagline: "Tool-enabled RAG assistant for technical documentation.",
    description:
      "Python RAG agent that ingests local React, Express, MongoDB, and Node.js docs, stores embeddings in Postgres with pgvector, and answers questions through domain-specific retrieval tools.",
    tech: ["Python", "OpenAI", "pgvector", "PostgreSQL", "RAG"],
    impact: "Makes technical docs easier to search and extend by domain.",
    github: "https://github.com/DanielCononie/tech-docs-rag-agent",
    details: [
      "Ingests local React, Express, MongoDB, and Node.js documentation.",
      "Stores embeddings in Postgres with pgvector for efficient retrieval.",
      "Answers questions through domain-specific retrieval tools.",
      "Designed to make technical documentation easier to search and extend."
    ]
  },
]



export default projects
