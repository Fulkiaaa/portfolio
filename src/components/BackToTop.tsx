import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  /** pixel à partir duquel le bouton apparaît (0 = toujours visible) */
  threshold?: number;
};

export default function BackToTop({ threshold = 400 }: Props) {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
        ticking.current = false;
      });
    };
    onScroll(); // état initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollTop = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <div
      className="fixed right-6 z-50 pointer-events-none"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }} // safe area iOS
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={scrollTop}
        className={`pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff923e] shadow-neumorphism ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: "#ff923e", color: "#fff" }}
        aria-label="Remonter en haut"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
