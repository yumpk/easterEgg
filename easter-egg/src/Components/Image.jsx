import React from "react";
import { Card, Col } from "reactstrap";

class Image extends React.Component {
  render() {
    return (
      <Card>
        <Col xs="6" md="3" xl="2">
          <img src={this.props.srcUrl} alt="Card cap" fluid />
        </Col>
      </Card>
    );
  }
}
export default Image;
