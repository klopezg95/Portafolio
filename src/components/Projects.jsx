import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "Una clonación moderna de Netflix con autenticación, diseño responsive y consumo de API.",
    image: "https://via.placeholder.com/800x400.png?text=Netflix+Clone",
    demoLink: "https://tu-demo.com",
    codeLink: "https://github.com/klopesg95/netflix-clone",
  },
  {
    title: "Netflix Clone",
    description:
      "Una clonación moderna de Netflix con autenticación, diseño responsive y consumo de API.",
    image: "https://via.placeholder.com/800x400.png?text=Netflix+Clone",
    demoLink: "https://tu-demo.com",
    codeLink: "https://github.com/klopesg95/netflix-clone",
  },
  {
    title: "Netflix Clone",
    description:
      "Una clonación moderna de Netflix con autenticación, diseño responsive y consumo de API.",
    image: "https://via.placeholder.com/800x400.png?text=Netflix+Clone",
    demoLink: "https://tu-demo.com",
    codeLink: "https://github.com/klopesg95/netflix-clone",
  },
  {
    title: "Netflix Clone",
    description:
      "Una clonación moderna de Netflix con autenticación, diseño responsive y consumo de API.",
    image: "https://via.placeholder.com/800x400.png?text=Netflix+Clone",
    demoLink: "https://tu-demo.com",
    codeLink: "https://github.com/klopesg95/netflix-clone",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-[100px] py-24 bg-[#1C1C22] text-white gap-20 flex flex-col"
    >
      <h2
        className="text-4xl font-bold flex justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Projects
      </h2>
      <div className="flex flex-col items-center gap-30">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full max-w-4xl ${
              index % 2 === 0 ? "md:self-start" : "md:self-end"
            }`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
