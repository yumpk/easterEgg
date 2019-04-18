import React from "react";
import { Card, Col, CardImg } from "reactstrap";

class Image extends React.Component {
  storeSelected() {
    localStorage.setItem("charac", JSON.stringify(this.props.character));
  }

  render() {
    return (
      <Col xs="6" md="3" lg="2">
        <Card
          onClick={() => {
            this.storeSelected();
          }}
        >
          <CardImg top src={this.props.character.image} alt="Card cap" />
        </Card>
      </Col>
    );
  }
}
export default Image;
