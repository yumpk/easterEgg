import React from "react";
import axios from "axios";
import Image from "./Image";
import {Row, Container, Col} from 'reactstrap';

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characterList : []
        };
    };


    componentDidMount(){
        axios.get("http://easteregg.wildcodeschool.fr/api/characters")
        .then(resultat => {
            console.log(resultat.data);
            this.setState ({characterList : resultat.data})
        });        
    };
    
    render(){
        return(
            <Container>
                <Row>
                    <Col xs="6" md="3" xl="2">
                    {this.state.characterList.map((character, i)=>{
                        return(
                        <Image 
                        key={i}
                        srcUrl= {character.image} />
                        )}
                    )};
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Gallery;
