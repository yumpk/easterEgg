import React from "react";
import EggChoice from "./EggChoice";

//const currentCharacters = JSON.parse(window.localStorage.getItem('myChars'));
//console.log(currentCharacters);

class SkillCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCharacters: JSON.parse(window.localStorage.getItem("myChars"))
    };
  }
  componentDidMount() {
    this.setState({
      currentCharacters: JSON.parse(window.localStorage.getItem("myChars"))
    });
  }

  render() {
    let character1 = JSON.parse(this.state.currentCharacters[0]);
    //console.log(character1);
    //console.log(character1.name);
    //console.log(character1.gender);
    let character2 = JSON.parse(this.state.currentCharacters[1]);
    return (
      <div>
        <div className="container-card row mx-3 my-3">
          <div className="card-char">
            <img
              src={character1.image}
              alt="Card cap"
              className="image-reducer"
              height="200px"
            />
            <div>
              <h1 className="cards-name">{character1.name}</h1>

              <ul>
                <li>{`Gender : ${character1.gender}`}</li>
                <li>{`Species : ${character1.species}`}</li>
                <li>{`Origin : ${character1.origin}`}</li>
              </ul>
            </div>
          </div>
          <div className="card-char">
            <img
              src={character2.image}
              alt="Card cap"
              className="image-reducer"
            />
            <div>
              <h1 className="cards-name">{character2.name}</h1>

              <ul>
                <li>{`Gender : ${character2.gender}`}</li>
                <li>{`Species : ${character2.species}`}</li>
                <li>{`Origin : ${character2.origin}`}</li>
              </ul>
            </div>
          </div>
        </div>
        <EggChoice />
      </div>
    );
  }
}

export default SkillCards;
