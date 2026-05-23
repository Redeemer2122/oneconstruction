/**
 * projects-scroll.ts — Horizontal Scroll-Pin для секции #projects.
 *
 * Активен только на desktop (min-width: 768px) через gsap.matchMedia().
 * Уважает prefers-reduced-motion: при reduce — пин выключается.
 */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const section = document.getElementById("projects");
  if (!section) return;
  const viewport = section.querySelector<HTMLElement>(".hs-viewport");
  const track = section.querySelector<HTMLElement>(".hs-track");
  if (!viewport || !track) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    },
    (ctx) => {
      if (!ctx.conditions?.isDesktop) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    }
  );
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
