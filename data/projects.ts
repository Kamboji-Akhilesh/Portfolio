export const projectsData = [
  {
    title: "Atlas",
    status: "In Progress",
    description:
      "RAG-based system that enables natural language querying of codebase and database schemas to help developers and non-technical stakeholders understand system behavior.",
    highlights: [
      "Implemented code-aware retrieval pipeline for explaining API flows and database structure.",
      "Designed semantic search layer over repository and schema files.",
      "Architected scalable backend service using FastAPI for LLM-powered system querying.",
    ],
    tech: ["FastAPI", "Python", "Next.js", "Groq", "RAG", "LLMs"],
  },
  {
    title: "Screenshot Cleaner",
    description:
      "An Android utility app that automatically deletes temporary screenshots using user-defined timers, reducing gallery clutter and manual cleanup effort.",
    highlights: [
      "Developed Android background service to monitor and schedule timed screenshot deletion.",
      "Implemented configurable deletion workflows with notification-based controls.",
      "Designed recoverable deletion system with 7-day restore window.",
    ],
    tech: ["Kotlin", "Android", "Background Service", "Notifications", "Restoration System"],
    links: [
      { label: "GitHub", href: "https://github.com/Kamboji-Akhilesh/Screenshot-Cleaner" },
      { label: "Live Demo", href: "https://github.com/Kamboji-Akhilesh/Screenshot-Cleaner" },
    ],
  },
  {
    title: "Helping Hand (Hackathon)",
    description:
      "A full-stack mental health tracking application built to help students monitor emotional well-being using mood analysis and personalized insights.",
    highlights: [
      "Built Flutter + Flask application with real-time mood tracking and journaling features.",
      "Implemented Python-based mood recognition logic for personalized emotional insights.",
      "Deployed on Google Cloud and selected Top 10 in South India at a national-level hackathon.",
    ],
    tech: ["Flutter", "Dart", "Flask", "Python", "GCP", "Mood Analysis"],
    links: [
      { label: "GitHub", href: "https://github.com/kamboji-akhilesh/helping-hand" },
      { label: "Live Demo", href: "https://github.com/kamboji-akhilesh/helping-hand" },
    ],
  },
];
