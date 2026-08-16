import gsap from "gsap";

export function animateHeroText() {
  const title = document.querySelector(".hero__title");
  const buttons = document.querySelector("[data-hero-buttons]");
  const circle = document.querySelector(".hero__circle");
  const decorOne = document.querySelector(".hero__decor--one");
  const decorTwo = document.querySelector(".hero__decor--two");

  const timeline = gsap.timeline();

  if (title) {
    timeline.fromTo(
      title,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }
    );
  }

  if (buttons) {
    timeline.fromTo(
      buttons,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }

  if (circle) {
    timeline.fromTo(
      circle,
      {
        opacity: 0,
        scale: 0.7,
        rotation: -15,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.4)",
      },
      "-=0.8"
    );
  }

  if (decorOne) {
    timeline.fromTo(
      decorOne,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.9"
    );
  }

  if (decorTwo) {
    timeline.fromTo(
      decorTwo,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.7"
    );
  }
}

export function animateProfile() {
  const containers = document.querySelectorAll(".profile-animate");
  const details = document.querySelectorAll(".profile-detail");

  if (containers.length) {
    gsap.fromTo(
      containers,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }

  if (details.length) {
    gsap.fromTo(
      details,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.35,
      }
    );
  }
}

export function animateVoiceGrid() {
  const cards = document.querySelectorAll(
    ".profile-voice-grid .voice-card"
  );

  if (!cards.length) return;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2,
    }
  );
}

export function animateServices() {
  const cards = document.querySelectorAll(
    ".service-animate > *"
  );

  if (!cards.length) return;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    }
  );
}

export function animateAbout() {
  const cards = document.querySelectorAll(
    ".about-animate > *"
  );

  if (!cards.length) return;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    }
  );
}

export function animateContact() {
  const infoBlocks = document.querySelectorAll(
    ".contact-animate > *"
  );

  const form = document.querySelector(
    ".contact-form-animate"
  );

  if (infoBlocks.length) {
    gsap.fromTo(
      infoBlocks,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }

  if (form) {
    gsap.fromTo(
      form,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.35,
      }
    );
  }
}

export function animateQuote() {
  const selectedVoice = document.querySelector(
    ".quote-animate"
  );

  const form = document.querySelector(
    ".quote-form-animate"
  );

  if (selectedVoice) {
    gsap.fromTo(
      selectedVoice,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }

  if (form) {
    gsap.fromTo(
      form,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: selectedVoice ? 0.4 : 0.2,
      }
    );
  }
}