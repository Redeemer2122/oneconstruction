/**
 * motion.ts — премиальный моушен-каркас.
 *
 *  1. Lenis Smooth Scroll: длинный замедляющий такт, без рывков.
 *  2. Internal anchors scroll through Lenis with a fixed-header offset.
 *  3. IntersectionObserver: добавляет `.in-view` к узлам с `[data-reveal]`
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

let lenis: Lenis | undefined;

if (!reduceMotion) {
  lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.4,
    lerp: 0.085,
  });

  const activeLenis = lenis;

  function raf(time: number) {
    activeLenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

const getHeaderOffset = () => {
  const header = document.querySelector<HTMLElement>("header");
  return header ? -(header.offsetHeight + 18) : -86;
};

const closeMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  const trigger = document.getElementById("mobile-menu-trigger");

  if (!menu || !trigger) return;

  menu.dataset.open = "false";
  menu.setAttribute("aria-hidden", "true");
  trigger.setAttribute("aria-expanded", "false");
  document.documentElement.style.overflow = "";
};

const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    closeMobileMenu();

    if (reduceMotion || !lenis) {
      const top = target.getBoundingClientRect().top + window.scrollY + getHeaderOffset();
      window.scrollTo({ top, behavior: "auto" });
      history.pushState(null, "", href);
      return;
    }

    lenis.scrollTo(target, {
      offset: getHeaderOffset(),
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      onComplete: () => history.pushState(null, "", href),
    });
  });
});

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
