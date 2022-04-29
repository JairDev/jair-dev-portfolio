import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "pages/Home";
import Layout from "pages/Layout/Layout";
import Challenge from "components/Challenge/Challenge";
import "./assets/css.svg";
import "./assets/git.svg";
import "./assets/html.svg";
import "./assets/js.svg";
import "./assets/react.svg";
import "./assets/sass.svg";
import "./App.css";
import { personalProjects, challenges } from "../src/data/info-portfolio";
import Projects from "components/Projects/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="mantenimiento">En matenimiento</h1>
        {/* <Layout>
          <Switch>
            <Route path="/proyectos">
              <Challenge
                data={personalProjects}
                title={"Proyectos"}
                subTitle={"Personales"}
                sliceStart={2}
                sliceEnd={4}
                showTitle={false}
              />
            </Route>
            <Route path="/desafios">
              <Challenge
                data={challenges}
                title={"Desafíos"}
                subTitle={"Frontend"}
                sliceStart={0}
                sliceEnd={2}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout> */}
      </div>
    </Router>
  );
}

export default App;
