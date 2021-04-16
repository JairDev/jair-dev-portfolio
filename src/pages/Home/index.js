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

    const tl = gsap.timeline();
    const tlText = gsap.timeline();
    const tlShowProfile = gsap.timeline();

    // tl.to(".App-content-profile", {
    //   xPercent: -110,
    //   // yPercent: 200,
    //   scale: 0.7,
    //   opacity: 0,
    //   duration: 1,
    // });
    

    // tlShowProfile.to(".App-content-profile", {
    //   xPercent: -110,
    //   // yPercent: 200,
    //   scale: 0.7,
    // });

    // tlShowProfile.to(".App-content-profile", {
    //   // immediateRender: false,
    //   xPercent: -110,
    //   yPercent: 100,
    //   scale: 0.7,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0,
    //   position: "fixed",
    //   top: 0,
    // });
    
  
    // tl.to(element, { opacity: 1, scale: .7, duration: 2, delay: 0 });

    tlText.fromTo(
      ".content-title-projects",
      {
        yPercent: 0,
        // opacity: 0,
        scale: 1.0,
        duration: 2,
      },
      {
        yPercent: -200,
        opacity: 1,
        scale: 1.5,
      }
    );

    // ScrollTrigger.create({
    //   animation: tl,
    //   markers: true,
    //   scrub: true,
    //   // pin: true,
    //   trigger: element,
    //   start: "center center",
    //   end: "bottom center",
    // });

    ScrollTrigger.create({
      animation: tlText,
      markers: true,
      scrub: true,
      trigger: ".content-title-projects",
      start: "top bottom",
      end: "bottom center",
    });

    // ScrollTrigger.create({
    //   animation: tlShowProfile,
    //   markers: true,
    //   scrub: true,
    //   trigger: ".content-projects",
    //   start: "top bottom",
    //   end: "center center",
    // });
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
        {/* <CurrentTime /> */}
      </header>

      <Aside />

      <section ref={refMain} className={`App-main`}>
      <span className="span-content-date"></span>

        <section ref={refContentSkill} className="App-content-profile-skills">
          <div className="App-content-profile all">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
        </section>

        {/* <div className="trigger-h"></div> */}

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
