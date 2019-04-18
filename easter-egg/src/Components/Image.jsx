import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg} from 'reactstrap';

class Image extends React.Component {
  render() {
    return (
      <div>
        <Card className= "character-card col-6 col-md-3 col-xl-2">
          <img src={this.props.srcUrl} alt="Card image cap" />
        
        </Card>
      </div>     
    );
  }
}
export default Image;
