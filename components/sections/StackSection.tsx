import { stackData } from "@/data/stack";
import { ScrollFadeIn } from "@/components/common/ScrollFadeIn";

export default function StackSection() {
  return (
    <ScrollFadeIn>
      <section id="stack" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-16">
          Tech Stack
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {stackData.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                {category.name}
              </h3>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
