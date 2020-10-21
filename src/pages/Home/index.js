import React, {useEffect, useRef, useState} from "react"
import ProfileCard from "components/ProfileCard/ProfileCard";
import { users, skills } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button"
import gsap from "gsap";

function Home() {
  const refPersonalInfo = useRef()
  const refMain = useRef()
  let divProfile = useRef(null)
  let divSkills = useRef(null)
  let divProjects = useRef(null)
  let border = useRef(null)

  const handleDisplay = (e) => {
    refPersonalInfo.current.classList.toggle("scale-info")
    refMain.current.classList.toggle("scale")
    e.preventDefault()
  }
  useEffect(() => {
    const a = document.querySelector(".all")
    // gsap.from(border, {duration: 1, delay: 0.5, scaleY: 0, opacity:0})
    gsap.timeline()
      .from(border, {duration: 1, delay: 0.5, scaleY: 0, opacity:0})
      // .from(divProfile, {opacity:0, duration: 0.5})
      // .from(divSkills, {opacity:0})
      // .from(divProjects, {opacity:0})
      .from(".all", {opacity:0, stagger: 0.2})
    // gsap.from(refMain.current, {duration: 1, delay: 1, opacity:0})
  })
  return(
    <>
      <aside className="App-aside">
      <span ref={span => border = span} className="border-aside-animate"></span>
        <Button 
        classSvg="topSvg"
        className={"content-button-info"} 
        typeSvg={"icon-user"}
        onClick={handleDisplay}
      />
      </aside>

      <div ref={refPersonalInfo} className={`App-content-personal-info`}>
        <div>
          <div>
            <img src ="" alt=""></img>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also 
            the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also 
            the leap into electronic typesetting, remaining essentially unchanged.  
          </p>
        </div>
      </div>


      <section ref={refMain} className={`App-main`}>
        <section className="App-content-profile-skills">
          <div ref={div => divProfile = div} className="App-content-profile all">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
          <div ref={div => divSkills = div} className="App-content-skills all">
            <div className="content-title-skills">
              <div className="title-skills">
                <h2>Skills</h2>
              </div>
            </div> 
            <IterateArray 
              array={skills} 
              Component={Skills} 
              type={"skills"} 
            />
          </div>
        </section>

        <section ref={section => divProjects = section} className="App-parent-projects all">
          <div className="App-content-projects">
          <div className="content-title-projects">
            <div className="title-projects">
              <h2>Projects</h2>
            </div>
          </div> 
          <div className="content-title-projects-top">
            <div className="title-projects-top">
              <h2>Projects</h2>
            </div>
          </div> 
            <Projects/>
          </div> 
          
        </section>
      </section>
    </>
  )
}

export default Home