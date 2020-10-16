import React, {useRef, useState} from "react"
import ProfileCard from "components/ProfileCard/ProfileCard";
import { users, skills } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";

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
        <div className={"content-button-info"}>
          <form>
            <button onClick={handleDisplay}>
              <svg className="icon icon-file-text"><use xlinkHref="#icon-file-text"></use></svg>
            </button>
          </form>
        </div>
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
            <IterateArray 
              array={skills} 
              Component={Skills} 
              type={"skills"} 
            />
          </div>
        </section>

        <section className="App-parent-projects">
          <div className="App-content-projects">
            <Projects/>
          </div> 
          
        </section>
      </section>
    </>
  )
}

export default Home