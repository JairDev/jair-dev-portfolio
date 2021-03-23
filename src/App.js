import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "pages/Home";
import About from "components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
