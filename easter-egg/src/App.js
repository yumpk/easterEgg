import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./App.css";
import Homepage from "./Components/HomePage";
import SkillCards from "./Components/SkillCards";

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

       {this.renderSwitch(this.state.page)}

       
      </div>
    );
  }
}

export default App;
