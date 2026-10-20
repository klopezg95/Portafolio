import ProjectCard from "./ProjectCard";
import roomflowImage from "../../img/RoomFlow.png";
import ecommerceImage from "../../img/Ecommerce.png";
import taskManagerImage from "../../img/TaskManager.png";

const projectsData = [
  {
    title: "RoomFlow",
    imageSrc: roomflowImage,
    description:
      "Room management app built with React and Tailwind CSS. Includes staff search, selection, and availability controls. Currently in development.",
    repository: "https://github.com/klopezg95/RoomFlow",
  },
  {
    title: "Ecommerce",
    imageSrc: ecommerceImage,
    description:
      "Shopping cart application built with React, using Context API to manage shared application state.",
    repository: "https://github.com/klopezg95/Ecommerce",
  },
  {
    title: "Task Manager",
    imageSrc: taskManagerImage,
    description:
      "Task management application built with React. Includes task creation, editing, deletion, filtering, and localStorage persistence.",
    repository: "https://github.com/klopezg95/TODO-task",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 font-sans text-gray-300 scroll-mt-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected projects
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-lg leading-relaxed text-gray-400">
            A selection of applications I've built while developing my frontend
            skills, from everyday tools to a project inspired by a real
            workplace need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.repository} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
