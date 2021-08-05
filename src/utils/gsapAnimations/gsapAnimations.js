import gsap from "gsap";

export function gsapAnimations({
  animateBallHero,
  circleChallenge,
  animatePhoto,
  layerPhoto,
  phoneRef,
  codeImgRef,
  circleLinkRef,
  word,
}) {
  const tlBallHero = gsap.timeline();
  tlBallHero.to(animateBallHero.current, {
    y: "97vh",
    xPercent: 15,
    ease: "power4.out",
    duration: 2.7,
    delay: 0.6,
    scale: 1.0,
  });

  const tlAnimatePhoto = gsap.timeline({
    scrollTrigger: {
      trigger: animatePhoto.current,
      start: "center 80%",
      end: "bottom -=400",
      scrub: true,
      markers: true
    },
  });
  const tlLayerPhoto = gsap.timeline({
    scrollTrigger: {
      trigger: layerPhoto.current,
      start: "top 80%",
      end: "top -=300",
      scrub: true,
    },
  });
  const tlAllText = gsap.timeline({
    scrollTrigger: {
      trigger: "#text",
      start: "center 90%",
      end: "bottom center",
      scrub: true,
    },
  });

  const tlCircleChallenge = gsap.timeline({
    scrollTrigger: {
      trigger: circleChallenge.current,
      start: "center 50%",
      end: "top -=1200",
      scrub: true,
    },
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: phoneRef.current,
      pin: true,
      start: "center 30%",
      end: "top -=550",
      scrub: true,
    },
  });
  gsap.utils.toArray("#text").forEach((item) => {
    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 98%",
        end: "center 80%",
        scrub: true,
        // markers: true
      },
    });
    tlText.from(item, {
      opacity: 0,
      yPercent: 50,
    });
  });

  const tlCode = gsap.timeline({
    scrollTrigger: {
      trigger: codeImgRef.current,
      start: "center 50%",
      end: "top -=550",
      scrub: true,
    },
  });
  const tlCircleLink = gsap.timeline({
    scrollTrigger: {
      trigger: circleLinkRef.current,
      start: "center 20%",
      end: "top -=1500",
      scrub: true,
    },
  });
  //animations////////////////
  tlAnimatePhoto.to(animatePhoto.current, {
    yPercent: 60,
    filter: "grayscale(0)",
  });

  tlLayerPhoto.to(layerPhoto.current, {
    scaleY: 0,
  });
  tlAllText.to(word.current, {
    yPercent: -50,
    duration: 1,
  });
  tlCircleChallenge.to(circleChallenge.current, {
    xPercent: -1300,
    yPercent: 1000,
  });
  tlCode.to(codeImgRef.current, {
    yPercent: 30,
    duration: 1,
  });
  tlCode.to(codeImgRef.current, {
    yPercent: -1,
    duration: 1,
  });
  tlCircleLink.to(circleLinkRef.current, {
    yPercent: 1000,
  });
}
