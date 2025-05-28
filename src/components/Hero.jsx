import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-start justify-center px-[100px] bg-white text-[#1C1C22]"
    >
      {/* Nombre */}
      <h1
        className="text-5xl font-bold mb-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Hi, I'm Kevin Lopez
      </h1>

      {/* Texto animado */}
      <h2
        className="text-8xl font-bold mb-8"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          <Typewriter
            words={[
              "Front-end Developer!",
              "Back-end Developer!",
              "Full stack web Developer!",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* Icons */}
      <div
        className="flex items-center gap-6 text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/klop95/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:scale-90 hover:bg-blue-100 transition-all duration-300 ease-in-out text-blue-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/klopezg95"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:scale-90 hover:bg-blue-100 transition-all duration-300 ease-in-out"
        >
          <FaGithub />
        </a>

        {/* CV */}
        <a
          href="/cv-kevin.pdf"
          download
          title="Download CV"
          className="p-3 rounded-full hover:scale-90 hover:bg-blue-100 transition-all duration-300 ease-in-out text-green-700"
        >
          <HiOutlineDocumentArrowDown />
        </a>
      </div>
    </section>
  );
}
