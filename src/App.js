import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "pages/Home";
import Layout from "pages/Layout/Layout";
import MoreProjects from "pages/MoreProjects/MoreProjects";
import MoreChallenges from "pages/MoreChallenges/MoreChallenges";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <h1 className="mantenimiento">En matenimiento</h1> */}
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/proyectos" element={<MoreProjects />} />
          <Route path="/desafios" element={<MoreChallenges />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
