import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "pages/Home";
import About from "components/About/About";

const routes = [
  { path: "/", Component: Home },
  { path: "/profile", Component: About },
];

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="soon">En construccion ...</div> */}
        <Switch>
          <Route path="/profile">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

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
