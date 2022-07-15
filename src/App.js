import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "pages/Home";
import Layout from "pages/Layout/Layout";
import MoreProjects from "pages/MoreProjects/MoreProjects";
import MoreChallenges from "pages/MoreChallenges/MoreChallenges";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1 className="mantenimiento">En matenimiento</h1> */}
        <Layout>
          <Switch>
            <Route path="/proyectos">
              <MoreProjects/>
            </Route>
            <Route path="/desafios">
              <MoreChallenges/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
