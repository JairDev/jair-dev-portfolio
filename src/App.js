import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "pages/Home";
import Layout from "pages/Layout/Layout";
import Challenge from "components/Challenge/Challenge";
import "./assets/coin.png";
import "./assets/desert.png";
import "./assets/css.svg";
import "./assets/git.svg";
import "./assets/html.svg";
import "./assets/js.svg";
import "./assets/react.svg";
import "./assets/sass.svg";
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
