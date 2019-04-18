import React from "react";
import { Card, Col, CardImg } from "reactstrap";

class Image extends React.Component {
  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <Col xs="6" md="3" xl="2">
        <Card
          onClick={() => {
            this.props.handleClick();
          }}
        >
          <CardImg top width="100%" src={this.props.srcUrl} alt="Card cap" />
        </Card>
      </Col>
    );
  }
}
export default Image;
