import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./App.css";
import Homepage from "./Components/HomePage";
import logo from "./Images/AdopteUnOeuf.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-app">
          <img src={logo} className="app-logo" alt="logo" />
          <p>AdopteUnOeuf.com</p>
        </header>
        <Gallery />
      </div>
    );
  }
}

export default App;
