import { projectsData } from "@/data/projects";
import { ScrollFadeIn } from "@/components/common/ScrollFadeIn";

export default function ProjectsSection() {
  return (
    <ScrollFadeIn>
      <section id="projects" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-16">
          Projects
        </h2>

        {/* Stacking Cards Container */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="sticky transition-all"
              style={{
                top: `${96 + index * 24}px`,
                zIndex: projectsData.length + index,
              }}
            >
              {/* Card */}
              <div
                className={`border border-gray-200 dark:border-gray-800 rounded-xl p-8 transition-all ${
                  index !== 0
                    ? "bg-white dark:bg-gray-950 shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl"
                    : "bg-white dark:bg-gray-900 shadow-md hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl"
                }`}
              >
                {/* Title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="text-xs font-semibold text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 text-sm flex gap-3"
                    >
                      <span className="text-gray-400 dark:text-gray-600 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status !== "In Progress" && project.links?.length ? (
                  <div className="flex gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-[1.02] transition-all duration-200"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
