import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ProfileCard from "components/ProfileCard/ProfileCard";
import { users } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button";
import CurrentTime from "components/CurrentTime/CurrentTime";
import gsap from "gsap";
import "./Home.css";
import Aside from "components/Aside/Aside";

function Home() {
  const refMain = useRef();
  let borderTop = useRef(null);
  let welcome = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(borderTop, {
        duration: 0.5,
        delay: 0.3,
        scaleX: 0,
        opacity: 0,
        ease: "slow(0.7, 0.7,  false)",
      })
      .from(
        ".border-aside-animate",
        {
          duration: 0.5,
          scaleY: 0,
          opacity: 0,
          ease: "slow(0.7, 0.7,  false)",
        },
        "-=0.5"
      )
      .from(
        ".span-content-date",
        {
          duration: 0.5,
          scaleY: 0,
          opacity: 0,
          ease: "slow(0.7, 0.7,  false)",
        },
        "-=0.5"
      )
      .from(".all", { duration: 0.5, opacity: 0, stagger: 0.2 })
      .from(welcome, { duration: 1.5, opacity: 0 })
      .to(welcome, { duration: 1.5, opacity: 0 });
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

      <Aside/>
      
      <section ref={refMain} className={`App-main`}>
        <section className="App-content-profile-skills">
          <div className="App-content-profile all">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
        </section>

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
