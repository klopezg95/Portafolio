function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 font-sans border-t border-white/10">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto text-center max-w-7xl sm:flex-row sm:text-left">
        <div>
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-blue-300"
          >
            Kevin Lopez<span className="text-blue-400">.</span>
          </a>

          <p className="mt-2 text-sm text-gray-400">
            © {currentYear} Kevin Lopez
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a
                href="https://github.com/klopezg95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-blue-300"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/klop95/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-blue-300"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="mailto:klopezg95@gmail.com"
                className="text-gray-400 transition-colors hover:text-blue-300"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
