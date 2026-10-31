import { useEffect, useRef, useState } from "react";

function ContactForm() {
  const email = "klopezg95@gmail.com";
  const [copyStatus, setCopyStatus] = useState("idle");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const copyEmail = async () => {
    clearTimeout(timeoutRef.current);

    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");

      timeoutRef.current = setTimeout(() => {
        setCopyStatus("idle");
      }, 3000);
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 font-sans scroll-mt-8">
      <div
        className="mx-auto max-w-4xl rounded-3xl border border-blue-200
          bg-gradient-to-br from-blue-100/70 to-white
          px-6 py-12 text-center
          dark:border-blue-400/20 dark:from-blue-500/10 dark:to-white/[0.02]
          sm:px-12 sm:py-16"
      >
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Let's work together
        </h2>

        <p className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          I'm looking for a frontend role where I can contribute, keep learning,
          and build useful web applications with a team.
        </p>

        <p className="mt-8 text-lg font-medium text-blue-700 break-all select-all dark:text-blue-200 sm:text-2xl">
          {email}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-7">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-w-[170px] items-center justify-center
              gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white
              shadow-lg shadow-blue-600/20 transition-colors
              hover:bg-blue-700 dark:hover:bg-blue-500
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              {copyStatus === "copied" ? (
                <path d="m5 12 4 4L19 6" />
              ) : (
                <>
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                </>
              )}
            </svg>

            {copyStatus === "copied" ? "Copied!" : "Copy email"}
          </button>

          <a
            href="https://www.linkedin.com/in/klop95/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-800 transition-colors border border-gray-300 rounded-lg bg-white/70 hover:border-blue-500 hover:bg-blue-50 dark:border-white/20 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p
          role="status"
          className="mt-4 min-h-[3rem] text-sm text-gray-600 dark:text-gray-400"
        >
          {copyStatus === "copied"
            ? "Email copied. Paste it into your preferred email service."
            : copyStatus === "error"
              ? "Couldn't copy automatically. Select and copy the email above."
              : "Copy my email or connect with me on LinkedIn."}
        </p>
      </div>
    </section>
  );
}

export default ContactForm;
