import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ title, description, image, demoLink, codeLink }) {
  return (
    <div
      className="flex flex-col items-center text-center gap-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <img
        src={image}
        alt={title}
        className="w-full max-w-4xl rounded-lg shadow-md"
      />

      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-gray-300 max-w-2xl">{description}</p>

      <div className="flex gap-6 text-xl mt-2">
        <a
          href={codeLink}
          target="_blank"
          className="hover:text-blue-400 transition-colors"
          title="Ver código en GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={demoLink}
          target="_blank"
          className="hover:text-blue-400 transition-colors"
          title="Ver demo"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
