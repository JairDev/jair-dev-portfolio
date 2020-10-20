import React, { useEffect, useRef } from "react";
import "./App.css";
import Home from "pages/Home"
import CurrentTime from "components/CurrentTime/CurrentTime"

function App() {
  let elementRef = useRef(null)

  useEffect(() => {
    console.log(elementRef)
    
  },[])

  return (
    <div className="App">
      <header ref={header => elementRef = header} className="App-header">
        <div className="App-header-content">
          <span className="span-hi">Hi, Welcome</span>
        </div>
        <CurrentTime/>
      </header>
      <Home/>

    </div>
  );
}

export default App;
