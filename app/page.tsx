import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl">
      <HeroSection />
      <div className="border-t border-gray-200 dark:border-gray-800 my-24" />
      <ExperienceSection />
      <div className="border-t border-gray-200 dark:border-gray-800 my-24" />
      <ProjectsSection />
      <div className="border-t border-gray-200 dark:border-gray-800 my-24" />
      <StackSection />
      <div className="border-t border-gray-200 dark:border-gray-800 my-24" />
      <ContactSection />
    </main>
  );
}
