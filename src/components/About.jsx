import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
} from "react-icons/si";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-[200px] py-20 bg-[#1C1C22] text-white"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <h2 className="text-5xl font-bold mb-6">About Me</h2>
      <p className="text-xl leading-8 max-w-3xl">
        I'm a dedicated frontend developer with a deep passion for crafting
        intuitive and visually engaging web experiences. My tools of choice
        include React, Tailwind CSS, and TypeScript, which I use to build
        performant and scalable interfaces. I thrive in collaborative
        environments, continuously push myself to learn new technologies, and
        enjoy turning creative ideas into meaningful digital solutions.
      </p>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">
          Technologies I work with
        </h3>
        <div className="flex flex-wrap gap-6 text-4xl">
          <FaReact title="React" className="text-[#61DAFB]" />
          {/*<SiAngular title="Next.js" className="text-[#DD0031]" />*/}
          <SiNextdotjs title="Next.js" className="text-white" />
          <SiTypescript title="TypeScript" className="text-[#3178C6]" />
          <SiNodedotjs title="Nodejs" className="text-[#5FA04E]" />
          <SiJavascript title="JavaScript" className="text-[#F7DF1E]" />
          <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />
          <FaHtml5 title="HTML5" className="text-[#E44D26]" />
          <FaCss3Alt title="CSS3" className="text-[#264de4]" />
          <FaGithub title="GitHub" className="text-white" />
        </div>
      </div>
    </section>
  );
}
