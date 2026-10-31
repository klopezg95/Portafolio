import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-[#f5f7fb] font-sans dark:border-white/10 dark:bg-[#1d1d20]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[90px] max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 sm:flex-row"
      >
        <a
          href="#home"
          aria-label="Kevin Lopez — Home"
          className="inline-flex flex-col items-start py-1 rounded-md group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <span className="flex items-baseline text-2xl tracking-tight sm:text-3xl">
            <span className="font-bold text-gray-900 dark:text-white">
              Kevin
            </span>

            <span
              className="ml-1.5 font-light text-blue-700 transition-colors
                duration-300 group-hover:text-blue-600
                dark:text-blue-300 dark:group-hover:text-blue-200"
            >
              Lopez
            </span>

            <span
              aria-hidden="true"
              className="mb-1.5 ml-1 h-2 w-2 self-end rounded-full
                bg-blue-600 transition-shadow duration-300
                group-hover:shadow-[0_0_14px_rgba(96,165,250,0.8)]
                dark:bg-blue-400"
            />
          </span>

          <span className="flex items-center gap-2 mt-1 text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400">
            <span
              aria-hidden="true"
              className="w-5 h-px bg-blue-600/60 motion-safe:transition-all motion-safe:duration-300 group-hover:w-8 group-hover:bg-blue-600 dark:bg-blue-400/60 dark:group-hover:bg-blue-300"
            />
            Frontend Developer
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium sm:gap-5 sm:text-base">
          <li>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-600 transition-colors rounded-lg hover:bg-black/5 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="https://github.com/klopezg95"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-gray-600 transition-colors rounded-lg hover:bg-black/5 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="block px-4 py-2 text-blue-700 transition-colors border rounded-lg border-blue-600/20 bg-blue-600/10 hover:border-blue-600 hover:bg-blue-600/20 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:border-blue-400 dark:hover:bg-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Contact me
            </a>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
