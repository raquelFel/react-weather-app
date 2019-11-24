import React from "react";
import logo from "./logo.svg";
import Location from "./Location";
import Temp from "./Temp";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Location />
      </div>
      <div>
        <Temp />
      </div>
      <div>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
