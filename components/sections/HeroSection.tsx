import { heroData } from "@/data/hero";
import { ScrollFadeIn } from "@/components/common/ScrollFadeIn";

export default function HeroSection() {
  return (
    <ScrollFadeIn>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
      <div className="max-w-5xl mx-auto px-6 text-left">
        {/* Intro Line */}
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
          {heroData.intro}
        </p>

        {/* Name Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black dark:text-white mb-12 leading-tight">
          {heroData.name}
        </h1>

        {/* Positioning Statement */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-8 mt-8 max-w-3xl leading-relaxed">
          I build high-performance full-stack systems and{' '}
          <span className="text-blue-400">{heroData.accentedPhrase}</span>.
        </p>

        {/* Supporting Paragraph */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
          {heroData.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          {heroData.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`px-8 py-3 font-medium rounded-lg transition-all duration-200 inline-block ${
                index === 0
                  ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-90 hover:scale-[1.02]"
                  : "border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-[1.02]"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
