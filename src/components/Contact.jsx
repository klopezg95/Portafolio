import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] px-[100px] py-24 bg-[#1C1C22] text-white flex flex-col items-center text-center gap-6"
    >
      <h2
        className="text-4xl font-bold"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Let’s work together
      </h2>

      <p
        className="text-gray-300 max-w-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Si te gustó mi trabajo y quieres contactarme, puedes escribirme a mi
        correo o seguirme en redes. Estoy disponible para colaborar en proyectos
        frontend, full stack o simplemente conectar.
      </p>

      <a
        href="mailto:klopezg95@gmail.com"
        className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Enviarme un correo
      </a>

      <div
        className="flex gap-6 text-2xl mt-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="https://www.linkedin.com/in/tu-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:scale-90 hover:bg-blue-100 transition-all duration-300"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/klopesg95"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:scale-90 hover:bg-gray-200 transition-all duration-300"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
