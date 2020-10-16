import React from "react";
import "./App.css";
import Home from "pages/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <span className="span-hi">Hi</span>
          <div>
            <form>
              <input
                type="text"
                placeholder="Please, enter your name..."
              ></input>
            </form>
          </div>
          <span className="span-welcome">Welcome</span>
        </div>
        <div className="content-date">
          <span>4:50 pm</span>
        </div>
      </header>
      <Home/>

    </div>
  );
}

export default App;
