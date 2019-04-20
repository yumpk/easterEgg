import React from "react";
import { Col, CardImg, CardBody } from "reactstrap";

let selectChar = [];

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      count: 1,
      skills: this.props.character.skills
    };
  }

  handleClick = () => {
    this.setState({
      on: !this.state.on,
      count: this.state.count + 1
    });
  };

  storeSelected(e) {
    localStorage.setItem("charac", JSON.stringify(this.props.character));
    let chars = localStorage.getItem("charac");

    if (chars && selectChar.length < 2) {
      selectChar.push(chars);
      localStorage.setItem("myChars", JSON.stringify(selectChar));
    } else if (this.state.count === 3) {
      alert("Nope, mind the cat !");
      window.open("https://www.youtube.com/watch?v=16J7KiZmnJA", "_blank");
    }
  }

  render() {
    const clicked = this.state.on ? "card-clicked" : "card-design";
    return (
      <Col xs="6" md="3" lg="2">
        <div
          className={clicked}
          onClick={() => {
            this.storeSelected();
            this.handleClick();
          }}
          title={this.state.skills}
        >
          <CardImg
            top
            src={this.props.character.image}
            className="card-img"
            alt="Card cap"
          />
          <CardBody className="bg">
            <h6>{this.props.character.name}</h6>
          </CardBody>
        </div>
      </Col>
    );
  }
}
export default Image;
