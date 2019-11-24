import React from "react";
import logo from "./logo.svg";
import Location from "./Location";
import Temp from "./Temp";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <Location />
        </div>
        <div>
          <Forecast />
        </div>
      </div>
      <div>
        <p>
          <smal className="info">
            Open-source code by{" "}
            <a href="https://github.com/raquelFel/react-weather-app">
              Raquel Felgueiras
            </a>
          </smal>
        </p>
      </div>
    </div>
  );
}

export default App;
