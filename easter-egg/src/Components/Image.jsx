import React from "react";
import { Card, Col, CardImg } from "reactstrap";

let selectChar = [];

class Image extends React.Component {
  
  storeSelected(e) {

localStorage.setItem("charac", JSON.stringify(this.props.character));
let chars = localStorage.getItem('charac');

 if(chars && selectChar.length < 2){
  selectChar.push(chars);
  console.log(selectChar);
  localStorage.setItem('myChars', JSON.stringify(selectChar));
}else {
  // selectChar = [];
  // selectChar.push(chars);
}
  

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
