import React from "react";
<<<<<<< Updated upstream
import EggChoice from "./EggChoice";
=======
>>>>>>> Stashed changes

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
          />
          <div>
            <h3>{character1.name}</h3>

            <ul>
              <li>{`gender : ${character1.gender}`}</li>
              <li>{`species : ${character1.species}`}</li>
              <li>{`origin : ${character1.origin}`}</li>
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
            <h3>{character2.name}</h3>

            <ul>
              <li>{`gender : ${character2.gender}`}</li>
              <li>{`species : ${character2.species}`}</li>
              <li>{`origin : ${character2.origin}`}</li>
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
