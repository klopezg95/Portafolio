import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mt-24 bg-[#1C1C22] text-neutral-300 py-10 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-m text-center md:text-left">
          © {new Date().getFullYear()} Kevin Lopez. All rights reserved.
        </p>
        <div className="flex gap-6 text-neutral-400">
          <a
            href="https://github.com/klopezg95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/klop95/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:klopezg95@gmail.com"
            className="hover:text-white transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
