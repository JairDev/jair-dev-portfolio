import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ProfileCard from "components/ProfileCard/ProfileCard";
import { users } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button";
import CurrentTime from "components/CurrentTime/CurrentTime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Home.css";
import Aside from "components/Aside/Aside";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const refMain = useRef(null);
  const refContentSkill = useRef(null);
  let borderTop = useRef(null);
  let welcome = useRef(null);

  useEffect(() => {
    const element = refContentSkill.current;
    console.log(refContentSkill);
    // gsap.to(".trigger-h", {
    //   x: 100,
    //   duration: 2,
    //   ease: "bounce",
    //   delay: 1,
    //   scrollTrigger: {
    //     trigger: ".trigger-h",
    //     markers: true,
    //     start: "top top"
    //   }
    // });

    // gsap.from(refContentSkill.current, {
    //   scrollTrigger: {
    //     trigger: ".trigger-h",
    //     pin: true,
    //     scrub: true,
    //     markers: {startColor: "green", endColor: "red", fontSize: "12px"},
    //     start: "top center",
    //     end: "top top",
    //     toggleClass: "active",
    //   },
    // });

    const tl = gsap.timeline({});
    const tl2 = gsap.timeline({});

    tl.to(refContentSkill.current, {xPercent: -100, opacity: 0, scale: 0.7, duration: 2})
    tl.to(refContentSkill.current, {yPercent: 100, opacity: 1, scale: 0.7, duration: 2, delay: 50, position: "sticky", top: -800})

    // tl2.fromTo(
    //   ".content-title-projects",
    //   { y: 200, opacity: 0},
    //   { duration: 1, y: 0, opacity: 1, scale: 1.2}
    // );

    ScrollTrigger.create({
      animation: tl,
      trigger: ".trigger-h",
      // trigger: refContentSkill.current,
      // pin: true,
      // immediateRender: false,
      // pinType: "fixed",
      scrub: true,
      markers: { startColor: "green", endColor: "red", fontSize: "12px" },
      start: "top bottom",
      end: "top top",
      toggleClass: "active",
    });

    // ScrollTrigger.create({
    //   animation: tl2,
    //   trigger: ".content-title-projects",
    //   // trigger: refContentSkill.current,
    //   // pin: true,
    //   scrub: true,
    //   markers: { startColor: "green", endColor: "red", fontSize: "12px" },
    //   start: "top bottom",
    //   end: "top top",
    //   toggleClass: "active",
    // });

    //   .timeline()
    //   .from(borderTop, {
    //     duration: 0.5,
    //     delay: 0.3,
    //     scaleX: 0,
    //     opacity: 0,
    //     ease: "slow(0.7, 0.7,  false)",
    //   })
    //   .from(
    //     ".border-aside-animate",
    //     {
    //       duration: 0.5,
    //       scaleY: 0,
    //       opacity: 0,
    //       ease: "slow(0.7, 0.7,  false)",
    //     },
    //     "-=0.5"
    //   )
    //   .from(
    //     ".span-content-date",
    //     {
    //       duration: 0.5,
    //       scaleY: 0,
    //       opacity: 0,
    //       ease: "slow(0.7, 0.7,  false)",
    //     },
    //     "-=0.5"
    //   )
    //   .from(".all", { duration: 0.5, opacity: 0, stagger: 0.2 })
    //   .from(welcome, { duration: 1.5, opacity: 0 })
    //   .to(welcome, { duration: 1.5, opacity: 0 });
    const skill = refContentSkill.current;
    const skillTop = Math.floor(skill.getBoundingClientRect().height);
    const projects = document.getElementById("projects-ref");
    const all = document.querySelectorAll(".projects");
    // console.log(all)
    all.forEach((item) => {
      const t = item.getBoundingClientRect().top;
      // console.log(t);
    });
    const heightProjects = Math.floor(projects.getBoundingClientRect().height);
    const projectsTop = window.innerHeight - heightProjects;
    const calcTop = projectsTop - skillTop;
    // refMain.current.style = `padding-bottom: ${calcTop}px`
    // console.log("skills", skillTop);
    // console.log(heightProjects);
    // console.log(window.innerHeight);
    // console.log("calcTop", calcTop)
    // console.log("top-projects", projectsTop);
    // console.log(projectsTop - calcTop)
  }, []);

  return (
    <>
      <header className="App-header">
        <span
          ref={(span) => (borderTop = span)}
          className="border-animate"
        ></span>
        <div className="App-header-content">
          <span ref={(span) => (welcome = span)} className="span-welcome">
            Bienvenido
          </span>
        </div>
        <CurrentTime />
      </header>

      <Aside />

      <section ref={refMain} className={`App-main`}>
        <section ref={refContentSkill} className="App-content-profile-skills">
          <div className="App-content-profile all">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
        </section>

        <div className="trigger-h"></div>

        <section className="App-parent-projects all">
          <div className="App-content-projects">
            <div className="content-title-projects">
              <div className="title-projects">
                <h2>Proyectos</h2>
              </div>
            </div>
            <Projects />
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
