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

  handleClick = () => {
    this.props.changePage();
  };

  render() {
    return (
      <Container className="container">
        <Row className="justify-content-center">
          {this.state.characterList.map((character, i) => {
            return <Image key={i} character={character} />;
          })}
        </Row>
        <button class="button" onClick={this.handleClick}>
          Egg is coming!
        </button>
      </Container>
    );
  }
}

export default Gallery;
