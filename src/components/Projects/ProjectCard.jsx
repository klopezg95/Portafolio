function ProjectCard({ project }) {
  return (
    <article className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-blue-300/30 bg-[#181c25] p-6 text-left font-sans shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition-colors hover:border-blue-300">
      <div
        aria-hidden="true"
        className="flex items-center justify-between mb-5 text-blue-300"
      >
        <span className="text-xl font-semibold">A</span>
        <span className="text-2xl">{project.suit}</span>
      </div>

      <h3 className="mb-5 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>

      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#101319]">
        <img
          src={project.imageSrc}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="object-contain w-full aspect-video"
        />
      </div>

      <p className="mt-5 mb-6 text-base leading-relaxed text-gray-300">
        {project.description}
      </p>

      <a
        href={project.repository}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} repository`}
        className="flex items-center justify-center gap-2 px-4 py-3 mt-auto font-semibold text-blue-200 transition-colors border rounded-lg border-blue-400/30 bg-blue-500/10 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        View repository
        <span aria-hidden="true">↗</span>
      </a>

      <div
        aria-hidden="true"
        className="flex items-center justify-between mt-5 text-blue-300 rotate-180"
      >
        <span className="text-xl font-semibold">A</span>
        <span className="text-2xl">{project.suit}</span>
      </div>
    </article>
  );
}

export default ProjectCard;
