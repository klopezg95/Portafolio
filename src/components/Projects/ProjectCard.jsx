function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-left font-sans transition-colors duration-300 hover:border-blue-400/50">
      <h3 className="mb-5 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300">
        {project.title}
      </h3>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161618]">
        <img
          src={project.imageSrc}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="object-contain w-full aspect-video motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
      </div>

      <p className="my-6 text-base leading-relaxed text-gray-300">
        {project.description}
      </p>

      <a
        href={project.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-5 py-3 mt-auto font-semibold text-blue-200 transition-colors border rounded-lg border-blue-400/20 bg-blue-500/10 hover:border-blue-400/50 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        View repository
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default ProjectCard;
