function ContactForm() {
  return (
    <section id="contact" className="px-6 py-20 font-sans scroll-mt-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-white/[0.02] px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let's work together
        </h2>

        <p className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-gray-300">
          I'm looking for a junior frontend role where I can contribute, keep
          learning, and build useful web applications with a team.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href="mailto:klopezg95@gmail.com"
            className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Email me
          </a>

          <a
            href="https://www.linkedin.com/in/klop95/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-gray-200 transition-colors border rounded-lg border-white/20 bg-white/5 hover:border-blue-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Connect on LinkedIn
          </a>
        </div>

        <a
          href="mailto:klopezg95@gmail.com"
          className="inline-block text-base text-gray-400 break-all transition-colors mt-7 hover:text-blue-300"
        >
          klopezg95@gmail.com
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
