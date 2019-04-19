import React from "react";
import { Col, CardImg, CardBody } from "reactstrap";

let selectChar = [];

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on
    };
  }
  handleClick = () => {
    this.setState({
      on: !this.state.on
    });
  };
  storeSelected(e) {
    localStorage.setItem("charac", JSON.stringify(this.props.character));
    let chars = localStorage.getItem("charac");

    if (chars && selectChar.length < 2) {
      selectChar.push(chars);
      console.log(selectChar);
      localStorage.setItem("myChars", JSON.stringify(selectChar));
    } else {
      // selectChar = [];
      // selectChar.push(chars);
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
