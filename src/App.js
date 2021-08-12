import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "pages/Home";
import Layout from "pages/Layout/Layout";
import Challenge from "components/Challenge/Challenge";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/desafios">
              <Challenge />
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
