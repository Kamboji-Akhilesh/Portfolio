import { contactData } from "@/data/contact";
import { ScrollFadeIn } from "@/components/common/ScrollFadeIn";

export default function ContactSection() {
  return (
    <ScrollFadeIn>
      <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
          {contactData.title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed">
          {contactData.message}
        </p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contactData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border border-gray-300 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-950 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-900 dark:text-white font-medium text-sm mb-1">
                {link.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          {contactData.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              download={button.download}
              className={`px-8 py-3 font-medium rounded-lg inline-block text-center transition-all duration-200 ${
                button.variant === "primary"
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
