import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/asthapattanaik/weather.git">
          See Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank">
          Astha Pattanaik
        </a>{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
