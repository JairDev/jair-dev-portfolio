import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Home from "pages/Home";
import Projects from "components/Projects/Projects";
// import workCoin from "../src/assets/coin.png";
// import workDessert from "../src/assets/desert.png";
import Header from "components/Header/Header";
import Layout from "pages/Layout/Layout";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // smoothScroll("#container")1
    // return () => ScrollTrigger.getAll().forEach(ST => ST.kill());
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Layout>
          <Switch>
            <Route path="/trabajos">
              <Projects
                // projectsArray={dataWork}
                title={"Proyectos"}
                subTitle={"Personales"}
                view={true}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>

        {/* <Route path="/profile">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route> */}

        {/* {routes.map((route) => (
          <Route key={route.path} exact path={route.path}>
            {({match}) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <route.Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))} */}
      </div>
    </Router>
  );
}

export default App;
