import { ScrollFadeIn } from "@/components/common/ScrollFadeIn";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <ScrollFadeIn>
      <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-16">
          Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}
              >
                {/* Desktop Alternating Layout */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:col-start-1 md:pr-16"
                      : "md:col-start-2 md:col-end-3 md:pl-16"
                  }`}
                >
                  {/* Center Dot (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-black dark:bg-white rounded-full transform -translate-x-1/2 border-4 border-white dark:border-black" />

                  {/* Card */}
                  <div
                    className={`border rounded-lg p-6 transition-colors ${
                      exp.isCurrent
                        ? "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                        : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-xs font-semibold text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {exp.duration}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 text-sm flex gap-3"
                        >
                          <span className="text-gray-400 dark:text-gray-600 mt-0.5">
                            •
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: highlight }} />
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
