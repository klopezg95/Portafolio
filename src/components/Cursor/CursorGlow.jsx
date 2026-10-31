import { useEffect, useRef, useState } from "react";

const INTRO_KEY = "portfolio-lights-intro";
const REVEAL_DURATION = 1400;

function supportsMouse() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getInitialMode() {
  if (!supportsMouse()) return "on";

  try {
    return sessionStorage.getItem(INTRO_KEY) === "seen" ? "on" : "intro";
  } catch {
    return "intro";
  }
}

function BulbIcon({ lit }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M9 18h6M10 21h4" />

      <path d="M8.5 14.5a6 6 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />

      {lit && <path d="M12 1V0M3 4 2 3M21 4l1-1M2 10H0M22 10h2" />}
    </svg>
  );
}

function CursorGlow() {
  const [lightMode, setLightMode] = useState(getInitialMode);
  const [hasMouse, setHasMouse] = useState(supportsMouse);
  const [isTurningOn, setIsTurningOn] = useState(false);

  const overlayRef = useRef(null);
  const dialogRef = useRef(null);
  const switchRef = useRef(null);
  const revealTimerRef = useRef(null);

  const isIntro = lightMode === "intro";
  const isFlashlight = lightMode === "flashlight";

  const turnOnLights = () => {
    if (revealTimerRef.current !== null) return;

    try {
      sessionStorage.setItem(INTRO_KEY, "seen");
    } catch {
      // Funciona aunque no se pueda guardar la preferencia.
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setLightMode("on");
      return;
    }

    setIsTurningOn(true);

    revealTimerRef.current = window.setTimeout(() => {
      setLightMode("on");
      setIsTurningOn(false);
      revealTimerRef.current = null;
    }, REVEAL_DURATION);
  };

  const toggleLights = () => {
    setLightMode((previous) => (previous === "on" ? "flashlight" : "on"));
  };

  // Desactiva el efecto cuando no hay un cursor preciso.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDevice = () => {
      setHasMouse(mediaQuery.matches);

      if (!mediaQuery.matches) {
        clearTimeout(revealTimerRef.current);
        revealTimerRef.current = null;

        setIsTurningOn(false);
        setLightMode("on");
      }
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  // Bloquea la página de atrás durante la introducción.
  useEffect(() => {
    if (!isIntro || !hasMouse) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      document.body.style.overflow = previousOverflow;

      if (dialog?.open) {
        dialog.close();
      }

      switchRef.current?.focus({ preventScroll: true });
    };
  }, [isIntro, hasMouse]);

  // Mueve el halo y la linterna sin actualizar el estado.
  useEffect(() => {
    if (!hasMouse) return;

    let frameId = null;

    const updatePosition = (event) => {
      if (event.pointerType === "touch") return;

      const { clientX, clientY } = event;

      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        if (!overlayRef.current) return;

        overlayRef.current.style.setProperty("--cursor-x", `${clientX}px`);

        overlayRef.current.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };

    window.addEventListener("pointermove", updatePosition);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", updatePosition);
    };
  }, [hasMouse]);

  // Cancela la animación pendiente al retirar el componente.
  useEffect(() => {
    return () => {
      clearTimeout(revealTimerRef.current);
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      {/* Halo azul o linterna durante la navegación. */}
      {/* Ambas capas comparten la posición del cursor. */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none"
      >
        {/* El halo azul desaparece suavemente al apagar la luz. */}
        <div
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out motion-reduce:transition-none ${
            isFlashlight ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: `radial-gradient(
        320px circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
        rgba(96, 165, 250, 0.13),
        rgba(59, 130, 246, 0.05) 45%,
        transparent 75%
      )`,
          }}
        />

        {/* La oscuridad aparece progresivamente y conserva la linterna. */}
        <div
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out motion-reduce:transition-none ${
            isFlashlight ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(
        circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
        transparent 90px,
        rgba(0, 0, 0, 0.3) 150px,
        rgba(0, 0, 0, 0.85) 220px,
        #000 280px
      )`,
          }}
        />
      </div>

      {/* Oscuridad inicial que desaparece gradualmente. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[55] bg-black transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
          isIntro && !isTurningOn ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Introducción: permanece abierta hasta terminar la animación. */}
      <dialog
        ref={dialogRef}
        aria-labelledby="lights-intro-title"
        onCancel={(event) => {
          event.preventDefault();
          turnOnLights();
        }}
        className={`fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-6 font-sans text-white backdrop:bg-transparent transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
          isTurningOn ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full text-center">
          <button
            type="button"
            onClick={turnOnLights}
            aria-label="Turn on the lights and enter the portfolio"
            aria-disabled={isTurningOn}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-300/5 text-yellow-200 shadow-[0_0_40px_rgba(253,224,71,0.12)] transition-colors hover:bg-yellow-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-yellow-300"
          >
            <BulbIcon lit={isTurningOn} />
          </button>

          <h2
            id="lights-intro-title"
            className="mt-8 text-2xl font-medium tracking-tight"
          >
            Turn on the lights
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Click the bulb to explore my portfolio.
          </p>
        </div>
      </dialog>

      {/* Interruptor visible después de la introducción. */}
      {!isIntro && (
        <button
          ref={switchRef}
          type="button"
          onClick={toggleLights}
          aria-label="Flashlight mode"
          aria-pressed={isFlashlight}
          title={isFlashlight ? "Turn lights on" : "Turn lights off"}
          className={`fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border shadow-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 ${
            isFlashlight
              ? "border-gray-500 bg-gray-900 text-gray-300 hover:text-yellow-300"
              : "border-yellow-300/50 bg-[#242428] text-yellow-300 shadow-yellow-300/20 hover:bg-gray-800"
          }`}
        >
          <BulbIcon lit={!isFlashlight} />
        </button>
      )}
    </>
  );
}

export default CursorGlow;
