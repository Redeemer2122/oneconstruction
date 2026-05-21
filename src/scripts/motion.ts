/**
 * motion.ts — премиальный моушен-каркас.
 *
 *  1. Lenis Smooth Scroll: длинный замедляющий такт, без рывков.
 *  2. IntersectionObserver: добавляет `.in-view` к узлам с `[data-reveal]`
 *     или `[data-reveal-line]` при первом пересечении viewport.
 *
 * Полная честность к prefers-reduced-motion: при включённом OS-флаге
 * Lenis не запускается, ревилы ставятся в финальное состояние мгновенно.
 *
 * Импортируется в Layout.astro как client-side <script>.
 */
import Lenis from "lenis";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.4,
    lerp: 0.085,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const revealTargets = document.querySelectorAll<HTMLElement>(
  "[data-reveal], [data-reveal-line]",
);

if (reduceMotion) {
  revealTargets.forEach((el) => el.classList.add("in-view"));
} else if (revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  revealTargets.forEach((el) => observer.observe(el));
}
