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
        this.setState({ characterList: resultat.data });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.characterList.map((character, i) => {
            return <Image key={i} character={character} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
