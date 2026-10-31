function ProjectCard({ project }) {
  return (
    <article
      className="group relative flex min-h-[500px] flex-col overflow-hidden
        rounded-2xl border border-blue-200 bg-white p-6 text-left font-sans
        shadow-[0_25px_60px_rgba(30,58,138,0.12)]
        transition-colors hover:border-blue-500
        dark:border-blue-300/30 dark:bg-[#181c25]
        dark:shadow-[0_25px_60px_rgba(0,0,0,0.55)]
        dark:hover:border-blue-300"
    >
      <div
        aria-hidden="true"
        className="flex items-center justify-between mb-5 text-blue-700 dark:text-blue-300"
      >
        <span className="text-xl font-semibold">A</span>
        <span className="text-2xl">{project.suit}</span>
      </div>

      <h3 className="mb-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-[#101319]">
        <img
          src={project.imageSrc}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="object-contain w-full aspect-video"
        />
      </div>

      <p className="mt-5 mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      <a
        href={project.repository}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} repository`}
        className="flex items-center justify-center gap-2 px-4 py-3 mt-auto font-semibold text-blue-700 transition-colors border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:bg-blue-600 dark:hover:text-white"
      >
        View repository
        <span aria-hidden="true">↗</span>
      </a>

      <div
        aria-hidden="true"
        className="flex items-center justify-between mt-5 text-blue-700 rotate-180 dark:text-blue-300"
      >
        <span className="text-xl font-semibold">A</span>
        <span className="text-2xl">{project.suit}</span>
      </div>
    </article>
  );
}

export default ProjectCard;
