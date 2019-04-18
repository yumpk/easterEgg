import React from "react";
import axios from "axios";
import Image from "./Image";
import { Row, Container } from "reactstrap";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: []
    };
  }

  componentDidMount() {
    axios
      .get("http://easteregg.wildcodeschool.fr/api/characters")
      .then(resultat => {
        // console.log(resultat.data);
        this.setState({ characterList: resultat.data });
      });
  }

  handleClick() {
    console.log("Youpi");
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.characterList.map((character, i) => {
            return (
              <Image
                key={i}
                srcUrl={character.image}
                handleClick={this.handleClick}
                skills={character.skills}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
