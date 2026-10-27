import "./Section.css";

function Section() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-6 py-24 text-white"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_65%)]"
      />

      <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
        <span className="px-4 py-2 mb-8 font-sans text-sm tracking-wide text-blue-200 border rounded-full border-blue-400/30 bg-blue-400/10">
          Based in Miami · Open to opportunities
        </span>

        <h2 className="typing-effect max-w-full text-3xl sm:text-5xl font-['Lobster',cursive]">
          Hi, I'm Kevin Lopez
        </h2>

        <h1 className="mt-6 font-sans text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          Frontend
          <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
            Developer
          </span>
        </h1>

        <p className="max-w-2xl mt-8 font-sans text-lg leading-relaxed text-gray-300 sm:text-xl">
          I build web applications with React, JavaScript, and Tailwind CSS,
          turning practical problems into clear, easy-to-use interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-3 font-sans text-sm text-gray-300 mt-7">
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
            React
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
            JavaScript
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
            Tailwind CSS
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10 font-sans">
          <a
            href="#projects"
            className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            View projects
          </a>

          <a
            href="/Kevin_Lopez_Resume.pdf"
            download
            className="px-6 py-3 font-semibold text-gray-200 transition-colors border rounded-lg border-white/20 bg-white/5 hover:border-blue-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
