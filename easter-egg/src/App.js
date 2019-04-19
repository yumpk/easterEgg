import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./App.css";
import Homepage from "./Components/HomePage";
import SkillCards from "./Components/SkillCards";
import logo from "./Images/AdopteUnOeuf.png";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page : 'HomePage'
    }

  }

  renderSwitch = (param) => {
    switch (param) {
      case 'Homepage':
      return <Homepage />;
        break;
      case 'Gallery':
      return <Gallery />
        break;
      case 'SkillCards':
      return <SkillCards />
        break;
      default:
        console.log('Sorry, we are out of ' + param + '.');
    }
  }
  render() {
    return (
      <div className="App">
        <header className="header-app">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="banner">AdopteUnOeuf.com</p>
      </header>
       {this.renderSwitch(this.state.page)}
      </div>
    );
  }
}

export default App;
