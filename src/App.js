import React from "react";
import "./App.css";
import Home from "pages/Home"

function App() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  let pmOrAm = ""
  if (hours < 12) {
    pmOrAm = "am"
  }else if(hours >= 12 && hours <= 24) {
    pmOrAm = "pm"
  }
  const nowDate = `${hours}:${minutes} ${pmOrAm}`

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <span className="span-hi">Hi, Welcome</span>
          {/* <div>
            <form>
              <input
                type="text"
                placeholder="Please, enter your name..."
              ></input>
            </form>
          </div> */}
          {/* <span className="span-welcome">Welcome</span> */}
        </div>
        <div className="content-date">
          <span>{nowDate}</span>
        </div>
      </header>
      <Home/>

    </div>
  );
}

export default App;
