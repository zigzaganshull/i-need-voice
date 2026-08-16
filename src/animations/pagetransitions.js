import gsap from "gsap";

export function pageEnter() {
  gsap.fromTo(
    ".page-transition",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }
  );
}