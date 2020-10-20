import React, {useRef, useState} from "react"
import ProfileCard from "components/ProfileCard/ProfileCard";
import { users, skills } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Button from "components/Button/Button"

function Home() {
  const refPersonalInfo = useRef()
  const refMain = useRef()

  const handleDisplay = (e) => {
    refPersonalInfo.current.classList.toggle("scale-info")
    refMain.current.classList.toggle("scale")
    e.preventDefault()
  }
  return(
    <>
      <aside className="App-aside">
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
          <div className="App-content-profile">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
          <div className="App-content-skills">
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

        <section className="App-parent-projects">
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