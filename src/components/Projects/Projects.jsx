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
    suit: "♣",
  },
  {
    title: "Ecommerce",
    imageSrc: ecommerceImage,
    description:
      "Shopping cart application built with React, using Context API to manage shared application state.",
    repository: "https://github.com/klopezg95/Ecommerce",
    suit: "♥",
  },
  {
    title: "Task Manager",
    imageSrc: taskManagerImage,
    description:
      "Task management application built with React. Includes task creation, editing, deletion, filtering, and localStorage persistence.",
    repository: "https://github.com/klopezg95/TODO-task",
    suit: "♠",
  },
];

const cardPositions = [
  "lg:z-10 lg:-translate-x-[115%] lg:translate-y-10 lg:-rotate-12",
  "lg:z-20 lg:-translate-x-1/2",
  "lg:z-10 lg:translate-x-[15%] lg:translate-y-10 lg:rotate-12",
];

const decorativePositions = [
  "-translate-x-[145%] translate-y-28 -rotate-[28deg]",
  "-translate-x-[125%] translate-y-16 -rotate-[20deg]",
  "translate-x-[45%] translate-y-28 rotate-[28deg]",
  "translate-x-[25%] translate-y-16 rotate-[20deg]",
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 overflow-hidden font-sans text-gray-700 scroll-mt-8 dark:text-gray-300"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Selected projects
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Explore a selection of applications I've built with React.
          </p>

          <p className="hidden mt-4 text-sm text-blue-700 dark:text-blue-300 lg:block">
            Hover over a card or use Tab to explore it.
          </p>
        </div>

        <div className="relative isolate flex flex-col items-center gap-6 lg:block lg:h-[780px]">
          {/* Cartas decorativas. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 hidden pointer-events-none select-none lg:block"
          >
            {decorativePositions.map((position, index) => (
              <div
                key={position}
                className={`absolute left-1/2 top-12 h-[510px] w-[300px]
                  rounded-2xl border border-blue-200 bg-[#e8eef9] p-3
                  shadow-[0_20px_50px_rgba(30,58,138,0.12)]
                  dark:border-blue-300/20 dark:bg-[#111722]
                  dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                  xl:w-[320px] ${position}`}
                style={{ zIndex: index % 2 }}
              >
                <div
                  className="relative flex items-center justify-center h-full overflow-hidden border rounded-xl border-blue-300/50 dark:border-blue-300/15"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 12px,
                        rgba(96, 165, 250, 0.12) 12px,
                        rgba(96, 165, 250, 0.12) 13px
                      ),
                      repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 12px,
                        rgba(96, 165, 250, 0.12) 12px,
                        rgba(96, 165, 250, 0.12) 13px
                      )
                    `,
                  }}
                >
                  <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border border-blue-300/50 bg-[#e8eef9] dark:border-blue-300/20 dark:bg-[#111722]">
                    <span className="text-4xl -rotate-45 text-blue-500/50 dark:text-blue-300/30">
                      ✦
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proyectos reales. */}
          {projectsData.map((project, index) => (
            <div
              key={project.repository}
              className={`relative w-full max-w-[340px]
                lg:absolute lg:left-1/2 lg:top-12 lg:w-[300px]
                xl:w-[340px]
                motion-safe:transition-transform motion-safe:duration-500
                lg:hover:z-30 lg:hover:-translate-y-6 lg:hover:rotate-0
                lg:focus-within:z-30 lg:focus-within:-translate-y-6 lg:focus-within:rotate-0
                ${cardPositions[index]}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
