import gsap from "gsap";

export function gsapAnimations({ word, heroImage }) {
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: phoneRef.current,
  //     pin: true,
  //     start: "center 30%",
  //     end: "top -=550",
  //     scrub: true,
  //   },
  // });

  const tlWordWeb = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-wordweb]",
      start: "center 80%",
      end: "bottom 10%",
      scrub: true,
      // markers: true,
    },
  });
  const tlHeroImage = gsap.timeline({
    scrollTrigger: {
      trigger: "[data-heroimage]",
      start: "center 40%",
      end: "bottom 10%",
      scrub: true,
      // markers: true,
    },
  });

  // gsap.utils.toArray("[data-text]").forEach((item) => {
  //   const tlText = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: item,
  //       start: "top 98%",
  //       end: "center 80%",
  //       scrub: true,
  //       // markers: true
  //     },
  //   });
  //   tlText.from(item, {
  //     opacity: 0,
  //     yPercent: 5,
  //   });
  // });

  //animations////////////////

  tlWordWeb.to(word.current, {
    yPercent: 50,
    duration: 10,
    ease: "sine.out",
  });

  // tlHeroImage.to(heroImage.current, {
  //   yPercent: 15,
  //   duration: 10,
  //   ease: "sine.out",
  // });
}
