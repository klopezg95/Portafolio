function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 font-sans border-t border-gray-200 dark:border-white/10">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto text-center max-w-7xl sm:flex-row sm:text-left">
        <div>
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-gray-900 transition-colors rounded-sm hover:text-blue-700 dark:text-white dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            Kevin Lopez
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </a>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
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
                className="text-gray-600 transition-colors rounded-sm hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/klop95/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors rounded-sm hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
