import gsap from "gsap";

export function animateHeroWave() {
  const waves = document.querySelectorAll(
    ".hero__wave span"
  );

  if (!waves.length) return;

  gsap.to(waves, {
    scaleY: 1.8,
    duration: 0.6,
    stagger: {
      each: 0.08,
      repeat: -1,
      yoyo: true,
    },
    ease: "sine.inOut",
  });
}