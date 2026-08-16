import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  const sections = document.querySelectorAll(
    "[data-animate]"
  );

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  ScrollTrigger.refresh();
}