import gsap from "gsap";

export function gsapAnimations({ word, rotateText }) {
  const tlWordWeb = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-wordweb]",
      start: "center 80%",
      end: "bottom 10%",
      scrub: true,
      // markers: true,
    },
  });

  const tlRotateText = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-rotate-text]",
      start: "+=180px 100%",
      end: "bottom 0%",
      scrub: true,
      // markers: true,
    },
  });
  //animations////////////////

  tlWordWeb.to(word.current, {
    yPercent: 100,
    duration: 10,
    ease: "sine.out",
  });
  tlRotateText.to(rotateText.current, {
    rotation: 360 * 0.2,
    duration: 0.5,
    ease: "sine.out",
  });
}
