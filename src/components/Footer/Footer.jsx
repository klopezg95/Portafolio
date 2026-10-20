function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 text-center border-t border-gray-700">
      <ul className="flex flex-wrap justify-center gap-6">
        <li>
          <a
            href="https://github.com/klopezg95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/klop95/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="mailto:klopezg95@gmail.com"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            Email
          </a>
        </li>
      </ul>

      <p className="mt-6 text-sm text-gray-400">© {currentYear} Kevin Lopez</p>
    </footer>
  );
}

export default Footer;
