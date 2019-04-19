import React from "react";
import axios from "axios";


class EggChoice extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            filter1 :"XS",
            filter2 : "junk",
            eggsList : [],
            chosenEgg : "",
        };
        this.handleChangeFilter1 = this.handleChangeFilter1.bind(this);
        this.handleChangeFilter2 = this.handleChangeFilter2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChangeFilter1 (event) {
        this.setState({filter1 : event.target.value})           
        };
    handleChangeFilter2 (event) {
        this.setState({filter2 : event.target.value})           
        };
    handleSubmit (event) {
        event.preventDefault();
        axios
        .get("http://easteregg.wildcodeschool.fr/api/eggs")
        .then(resultat => {
        this.setState({eggsList: resultat.data});
        });
        let arrayFiltered1 = this.state.eggsList.filter(function(egg, i) {
            return (egg.caliber === this.state.filter1);
            }                
        );
        console.log(arrayFiltered1);
        let arrayFiltered2 = arrayFiltered1.filter(function(egg, j){
            return (egg.rarity === this.state.filtered2)
            }
        );
        /*function aleatoire(arrayFiltered2.length) {
            return (Math.floor((N)*Math.random()+1));
            }*/ 
    };
           
    

    
    render(){
    
        const caliber = ["XS","S","M","L","XL","2XL","3XL"];
        const rarity = ["junk","basic", "fine", "exotic", "ascended", "rare", "masterwork", "legendary"];
    
        return(
            
            <form onSubmit={this.handleSubmit}>
            <label>
                Chose your favorite Caliber :
                    <select value={this.state.filter1} onChange={this.handleChangeFilter1}>
                        {caliber.map((calib, i) => {
                            return(
                                <option
                                value= {calib}
                                key={i}>
                                {caliber[i]}
                            </option>)    
                        })}
                    </select>
            </label>
            <br />
            <label>
                Chose your rarity :
                    <select value={this.state.filter2} onChange={this.handleChangeFilter2}>
                        {rarity.map((rar, i) => {
                            return(
                                <option
                                value= {rar}
                                key={i}>
                                {rarity[i]}
                            </option>)    
                        })}
                    </select>
                </label>
            <br />
            <input type="submit" value="Envoyer" />
            </form>
        );
    };
};

export default EggChoice;