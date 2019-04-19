import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const currentCharacters = JSON.parse(window.localStorage.getItem('myChars'));;
//console.log(currentCharacters);




class SkillCards extends React.Component {
  render() {
    let character1 = JSON.parse(currentCharacters[0]);
    //console.log(character1);
    //console.log(character1.name);
    //console.log(character1.gender);
let character2 = JSON.parse(currentCharacters[1]);
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{character1.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{character2.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SkillCards;