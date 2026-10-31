import "./Section.css";

function Section() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-6 py-24 text-gray-900 dark:text-white"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_65%)]"
      />

      <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
        <span className="px-4 py-2 mb-8 font-sans text-sm tracking-wide text-blue-800 border rounded-full border-blue-600/20 bg-blue-600/10 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200">
          Based in USA · Open to opportunities
        </span>

        <h2 className="typing-effect max-w-full text-3xl sm:text-5xl font-['Lobster',cursive]">
          Hi, I'm Kevin Lopez
        </h2>

        <h1 className="mt-6 font-sans text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          Frontend
          <span className="block text-transparent bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text dark:from-blue-400 dark:to-cyan-300">
            Developer
          </span>
        </h1>

        <p className="max-w-2xl mt-8 font-sans text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          I build web applications with React, JavaScript, and Tailwind CSS,
          turning practical problems into clear, easy-to-use interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-3 font-sans text-sm text-gray-700 mt-7 dark:text-gray-300">
          {["React", "JavaScript", "Tailwind CSS"].map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-gray-300 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10 font-sans">
          <a
            href="#projects"
            className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:hover:bg-blue-500"
          >
            View projects
          </a>

          <a
            href="/Kevin_Lopez_Resume.pdf"
            download
            className="px-6 py-3 font-semibold text-gray-800 transition-colors border border-gray-300 rounded-lg bg-white/70 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:border-white/20 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
