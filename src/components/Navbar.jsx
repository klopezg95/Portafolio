export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1C1C22] text-white shadow-md">
      <div className="my-7 mr-[20%] px-6 py-3 flex justify-end">
        <ul className="flex gap-6 text-2xl font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
