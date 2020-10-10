import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Hi</span>
          <form><input type="text"></input></form>
        </div>
      </header>
      
      <section className="App-main">
      <aside>
        <span>more info</span>
      </aside>
      <section className="App-content-profile-skills">
        <div className="App-content-profile">
          <div className="content-profile-avatar">
            <img alt="" src=""/>
          </div>

          <div className="content-profile-info">
            <span className="profile-name">Alfredo Moscoso</span>
            <span className="profile-role">Frontend Developer</span>
          </div>

          <div className="content-profile-social-media">
            <div className="social-media-github">

            </div>
            <div className="social-media-linkedin">

            </div>
            <div className="social-media-twitter">

            </div>
            <div className="social-media-gmail">

            </div>
          </div>
        </div>

        <div className="App-content-skills">
          <div className="skills">
            <span>Javascript</span>
          </div>
        </div>
      </section>

      <section className="App-content-projects">
        <div className="content-projects">
            <div className="projects">
              <div className="projects-img">
                <img alt="" src=""/>
              </div>
              <div className="projects-info">
                <span></span>
              </div>
              
            </div>
          </div>
      </section>

      </section>
      
    </div>
  );
}

export default App;
