import Aside from "components/Aside/Aside";
import IterateArray from "components/IterateArray/IterateArray";
import Skills from "components/Skills/Skills";
import { skills, tools } from "data/info-portfolio";
import React from "react";

function About() {
  return (
    <>
      <Aside about={true} />
      <div className={`App-content-personal-info`}>
        <div>
          <div>
            <img src="" alt=""></img>
          </div>
          <h3 className="title-personal-info">¿Tomamos un café?</h3>
          <span className="sub-title-personal-info">
            Sí, el título es cierto, ¡me gustaría tomar un café contigo!
          </span>
          <p className="text-personal-info first">
            Soy Alfredo Moscoso, desarrollador frontend, me emociona pensar que
            podemos crear cosas importantes, una aplicación web, un sitio web,
            esas cosas que cambiarán la vida de una persona, ser parte de esa
            experiencia me mantiene en constante aprendizaje, poder mejorar mis
            habilidades todos los días, habilidades técnicas en JavaScript,
            Reactjs, Sass, Html5, dispuesto a seguir aprendiendo nuevas
            tecnologías, trabajar mano a mano con un equipo y que hagamos
            posible ese próximo gran proyecto.
          </p>

          <p className="text-personal-info">
            Pero no todo es tecnología, disfruto de la compañía de una mascota,
            jugar un videojuego, mi nueva pasión es la jardinería, en estos
            tiempos es una actividad relajante.
          </p>
        </div>

        <div className="App-content-skills kit-content">
          <div className="content-title-skills">
            <div className="title-skills">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="over-hidden">
            <div className="over-kit">
              <IterateArray array={skills} Component={Skills} type={"skills"} />
            </div>
          </div>
        </div>
        <div className="App-content-tools kit-content">
          <div className="content-title-tools">
            <div className="title-tools">
              <h2>Tools</h2>
            </div>
          </div>
          <div className="over-hidden">
            <div className="over-kit">
              <IterateArray array={tools} Component={Skills} type={"tools"} />
            </div>
          </div>
        </div>
        <div className="content-button-personal-info">
          <div className="parent-action-link-about-me">
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={"button-action-about-me"}
            >
              ¡Tomemos ese café!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
