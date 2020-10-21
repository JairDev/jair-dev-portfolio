import React, { useEffect, useRef } from "react";
import {gsap} from "gsap"
import "./App.css";
import Home from "pages/Home"
import CurrentTime from "components/CurrentTime/CurrentTime"

function App() {
  let border = useRef(null)
  let hi = useRef(null)
  useEffect(() => {
    gsap.timeline()
      .from(border, {duration: 1, scaleX: 0, opacity:0})
      .from(hi, { opacity:0})
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <span ref={span => border = span} className="border-animate"></span>
        <div className="App-header-content">
          <span ref={span => hi = span} className="span-hi">Hi, Welcome</span>
        </div>
        <CurrentTime/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
