import React, { Component } from "react";
import logo from "../src/Facebook-app-Logo-Icon.png";
import "./App.css";
import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div className="input-box">
          <Calculator />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
