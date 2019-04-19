import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./App.css";
import Homepage from "./Components/HomePage";
import SkillCards from "./Components/SkillCards";
import logo from "./Images/AdopteUnOeuf.png";
import Logo2 from './Logo2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Homepage"
    };
  }

  changePage = () => {
    this.setState({
      page: "Gallery"
    });
  };

  changetoPage2 = () => {
    this.setState({
      page: "SkillCards"
    });
  };

  renderSwitch = param => {
    switch (param) {
      case "Homepage":
        return <Homepage changePage={this.changePage} />;
      case "Gallery":
        return <Gallery changePage={this.changetoPage2} />;
      case "SkillCards":
        return <SkillCards page={this.state.page} />;
      default:
        console.log("Sorry, we are out of " + param + ".");
    }
  };

  render() {
    return (
    
      <div className="App-header">
        <div className="App">
          <header className="header-app">
            <img src={logo} className="app-logo" alt="logo" />
            <p className="banner">AdopteUnOeuf.com</p>
          </header>
          {this.renderSwitch(this.state.page)}
          <Logo2 idKey={1}/>
        </div>
      </div>
    );
  }
}

export default App;
