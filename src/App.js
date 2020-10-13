import React from "react";
import ProfileCard from "components/ProfileCard/ProfileCard";
import { users, skills } from "data/info-portfolio";
import IterateArray from "components/IterateArray/IterateArray";
import "./App.css";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <span className="span-hi">Hi</span>
          <div>
            <form>
              <input
                type="text"
                placeholder="Please, enter your name..."
              ></input>
            </form>
          </div>
          <span className="span-welcome">Welcome</span>
        </div>
        <div className="content-date">
          <span>4:50 pm</span>
        </div>
      </header>
      <aside className="App-aside">
        <span>more</span>
      </aside>

      <section className="App-main">
        <section className="App-content-profile-skills">
          <div className="App-content-profile">
            <IterateArray
              array={users}
              Component={ProfileCard}
              type={"userInfo"}
            />
          </div>
          <div className="App-content-skills">
            <IterateArray array={skills} Component={Skills} type={"skills"} />
          </div>
        </section>

        <section className="App-parent-projects">
          <div className="App-content-projects">
            <Projects/>
            {/* <IterateArray array={projects} Component={Projects} type={"projects"}/> */}
          </div> 
          
        </section>
      </section>
    </div>
  );
}

export default App;
