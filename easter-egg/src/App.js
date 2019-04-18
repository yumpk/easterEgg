import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./App.css";
import Homepage from "./Components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />        
      </div>
    );
  }
}

export default App;
